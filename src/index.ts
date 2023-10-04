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
const fw = document.getElementById("load-fw") as HTMLInputElement;
const loadFWBtn = document.getElementById("btn-load-fw") as HTMLButtonElement;

let data: string;
let date: number;

function addMessage(message: string, container: HTMLElement) : void {
  let m = document.createElement('p');
  m.innerHTML = message;
  container.appendChild(m);
}

function addLogsMessage(success: boolean, succMessage: string, errMessage: string) {
  let message = success ? succMessage : errMessage;
  addMessage(message, logsContainer);
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

function fromHex(hexStr: string) : ArrayBuffer {
  return new Uint8Array(hexStr.match(/../g).map(h=>parseInt(h,16))).buffer;
}

function getV(v: number) : number {
  if (v <= 1) {
    return v;
  } else {
    return ~(v & 1) & 1;
  }
}

function verifySign(s: {v: number, r: string, s: string}, message: string, pubKey: string) : {signature: string, signed: boolean} {
  let messageHash = keccak256(fromHex(message));
  let sigV = getV(s.v);
  let signature = new secp.Signature(BigInt("0x" + s.r), BigInt("0x" + s.s), sigV);

  return {signature: signature.toCompactHex(), signed: secp.verify(signature, messageHash, pubKey.toLowerCase())};
}

function verifyMessSign(s: {v: number, r: string, s: string}, address: string, m: any, f: (options: {}) => {}) : {signature: string, signed: boolean} {
  let sigV = getV(s.v);
  let signature = "0x" + s.r + s.s + (sigV ? "01" : "00");
  let recAddress = f({data: m, signature: signature, version: "V4"});

  return {signature: signature, signed: recAddress == address.toLowerCase()};
}

async function readFile(file: Blob) : Promise<ArrayBuffer> {
  let res = await new Promise((resolve) => {
    let fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.readAsArrayBuffer(file);
  });

  return res as ArrayBuffer;
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
      loadFWBtn.disabled = false;
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
    if(appEth) {
      data= signData.value;
      let { publicKey } = await appEth.getAddress(path.value);
      let res = await appEth.signTransaction(path.value, data);
      let {signature, signed} = verifySign(res, data, publicKey);
      let succMessage = formattedDate() + "&nbsp;" + "Transaction successfully signed. Signature - 0x" + signature;
      let errMessage = formattedDate() + "&nbsp;" + "Error. Invalid signature";
      addLogsMessage(signed, succMessage, errMessage);
    }
  });

  pMessSignBtn.addEventListener("click", async () => {
    if(appEth) {
      date = Date.now();
      data = signData.value;

      let { address } = await appEth.getAddress(path.value);
      let res = await appEth.signPersonalMessage(path.value, data);
      let r = verifyMessSign(res, address, new TextEncoder().encode(data), recoverPersonalSignature);
      let succMessage = formattedDate() + "&nbsp;" + "Personal message successfully signed. Signature - " + r.signature;
      let errMessage = formattedDate() + "&nbsp;" + "Error. Invalid signature";
      addLogsMessage(r.signed, succMessage, errMessage);
    }
  });

  eip712SignBtn.addEventListener("click", async() => {
    if(appEth) {
      let eip712MessJSON = JSON.parse(signData.value);
      let res = await appEth.signEIP712Message(path.value, eip712MessJSON);
      let { address } = await appEth.getAddress(path.value);
      let r = verifyMessSign(res, address, eip712MessJSON, recoverTypedSignature);
      let succMessage = formattedDate() + "&nbsp;" + "EIP712 Message successfully signed. Signature - " + r.signature;
      let errMessage = formattedDate() + "&nbsp;" + "Error. Invalid signature";
      addLogsMessage(r.signed, succMessage, errMessage);
    }
  });

  loadFWBtn.addEventListener("click", async() => {
    const f = fw.files[0];
    let message: string;

    if(f && appEth) {
      let firmware = await readFile(f);
      console.log(firmware);

      await appEth.loadFirmware(firmware);
      message = formattedDate() + "&nbsp;" + "Firmware updated successfuly"
      addMessage(message, logsContainer);

      //try {

      //} catch (e) {
       //message = formattedDate() + "&nbsp;" + "Error: " + e;
        //addMessage(message, logsContainer);
      //}
    } else {
      message = formattedDate() + "&nbsp;" + "Error: Keycard Pro is disconnected or no firmware file found";
      addMessage(message, logsContainer);
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
      loadFWBtn.disabled = true;
      connectBtn.disabled = false;

      let message = formattedDate() + "&nbsp;" + "KPro Wallet disconnected"
      addMessage(message, logsContainer);
    }
  });
}

main();

