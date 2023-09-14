import KProJS from "kprojs";
import TransportWebHID from "kprojs-web-hid";
import * as secp from '@noble/secp256k1';
import { keccak256 } from 'js-sha3';
import { recoverPersonalSignature, recoverTypedSignature } from '@metamask/eth-sig-util';

const connectBtn = document.getElementById("btn-connect") as HTMLButtonElement;
const disconnectBtn = document.getElementById("btn-disconnect") as HTMLButtonElement;
const getAddressBtn = document.getElementById("btn-get-address") as HTMLButtonElement;
const getConfBtn = document.getElementById("btn-get-conf") as HTMLButtonElement;
const logsContainer = document.getElementById("logs-container");
const txSignBtn = document.getElementById("btn-sign-tx") as HTMLButtonElement;
const signData = document.getElementById("sign-data") as HTMLTextAreaElement;
const eip712SignBtn = document.getElementById("btn-sign-eip712") as HTMLButtonElement;
const pMessSignBtn = document.getElementById("btn-sign-message") as HTMLButtonElement;
const path = document.getElementById("sign-path") as HTMLInputElement;

let data: string;
let date: number;

function addMessage(message: string, container: HTMLElement) : void {
  let m = document.createElement('p');
  m.innerHTML = message;
  container.appendChild(m);
}

function padTo2Digits(n: number) : string {
  return n.toString().padStart(2, '0');
}

function formattedDate() : string {
  let date = new Date(Date.now());
  let d = [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('-');

  let t = [
    padTo2Digits(date.getHours()),
    padTo2Digits(date.getMinutes()),
    padTo2Digits(date.getSeconds()),
  ].join(':');

  return d + " " + t;
}

function getV(v: number) : number {
  if (v <= 1) {
    return v;
  } else {
    return ~(v & 1) & 1;
  }
}

function verifySign(signature: {v: number, r: string, s: string}, message: string) : {signature: string, signed: boolean} {
  let sigV = getV(signature.v);
  let s = new secp.Signature(BigInt("0x" + signature.r), BigInt("0x" + signature.s), sigV);
  let messageHash = keccak256(message);
  let publicKey = s.recoverPublicKey(messageHash);
  return {signature: s.toCompactHex(), signed: secp.verify(s.toCompactHex(), messageHash, publicKey.toHex())};
}

function verifyMessSign(s: {v: number, r: string, s: string}, succMessage: string, errMessage: string, address: string, m: any, f: (options: {}) => {}) : void {
  let sigV = getV(s.v);
  let message: string;
  let signature = "0x" + s.r + s.s + (sigV ? "01" : "00");

  let recAddress = f({data: m, signature: signature, version: "V4"});
  console.log(recAddress);
  console.log(address);

  if(recAddress == address.toLowerCase()) {
    message = succMessage + signature;
    addMessage(message, logsContainer);
  } else {
    message = errMessage;
    addMessage(message, logsContainer);
  }
}

function main() : void {
  let transport: any;
  let appEth: any;
  connectBtn.addEventListener("click", async () => {
    try {
      transport = await TransportWebHID.create();
      appEth = new KProJS.Eth(transport);
      disconnectBtn.disabled = false;
      getAddressBtn.disabled = false;
      getConfBtn.disabled = false;
      txSignBtn.disabled = false;
      eip712SignBtn.disabled = false;
      pMessSignBtn.disabled = false;
      connectBtn.disabled = true;

      let message = formattedDate() + "&nbsp;" + "KPro Wallet connected";
      addMessage(message, logsContainer);
    } catch (e) {
      console.log(e);
    }
  });

  getAddressBtn.addEventListener("click", async () => {

    if(appEth) {
      const { publicKey, address, chainCode } = await appEth.getAddress(path.value, true, true);
      let message = formattedDate() + "&nbsp;" + "Ethereum address: " + address;
      addMessage(message, logsContainer);
    }
  });

  getConfBtn.addEventListener("click", async () => {
    if(appEth) {
      date = Date.now();
      const { fwVersion, erc20Version } = await appEth.getAppConfiguration();
      let message = formattedDate() + "&nbsp;" + "Firmware version - " + fwVersion + ", ERC20/Chain DB version - " + erc20Version;
      addMessage(message, logsContainer);
    }
  });

  txSignBtn.addEventListener("click", async () => {
    let message: string;

    if(appEth) {
      data= signData.value;

      let res = await appEth.signTransaction(path.value, data);
      let {signature, signed} = verifySign(res, data);

      if(signed) {
        message = formattedDate() + "&nbsp;" + "Transaction successfully signed. Signature - 0x" + signature;
        addMessage(message, logsContainer);
      } else {
        message = formattedDate() + "&nbsp;" + "Error. Invalid signature"
        addMessage(message, logsContainer);
      }
    }
  });

  pMessSignBtn.addEventListener("click", async () => {
    if(appEth) {
      date = Date.now();
      data = signData.value;

      let { address } = await appEth.getAddress(path.value);
      let res = await appEth.signPersonalMessage(path.value, data);
      let succMessage = formattedDate() + "&nbsp;" + "Personal message successfully signed. Signature - ";
      let errMessage = formattedDate() + "&nbsp;" + "Error. Invalid signature";

      verifyMessSign(res, succMessage, errMessage, address, new TextEncoder().encode(data), recoverPersonalSignature);
    }
  });

  eip712SignBtn.addEventListener("click", async() => {
    let message: string;

    if(appEth) {
      let eip712MessJSON = JSON.parse(signData.value);
      let res = await appEth.signEIP712Message(path.value, eip712MessJSON);
      let succMessage = formattedDate() + "&nbsp;" + "EIP712 Message successfully signed. Signature - ";
      let errMessage = formattedDate() + "&nbsp;" + "Error. Invalid signature";
      let { address } = await appEth.getAddress(path.value);

      verifyMessSign(res, succMessage, errMessage, address, eip712MessJSON, recoverTypedSignature);
    }
  });

  disconnectBtn.addEventListener("click", async () => {
    if(transport) {
      await transport.close();
      disconnectBtn.disabled = true;
      getAddressBtn.disabled = true;
      getConfBtn.disabled = true;
      txSignBtn.disabled = true;
      eip712SignBtn.disabled = true;
      pMessSignBtn.disabled = true;
      connectBtn.disabled = false;

      let message = formattedDate() + "&nbsp;" + "KPro Wallet disconnected"
      addMessage(message, logsContainer);
    }
  });
}

main();

