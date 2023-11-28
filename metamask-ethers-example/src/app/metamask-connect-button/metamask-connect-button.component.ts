import { Component } from '@angular/core';
import { ethers } from 'ethers';

@Component({
  selector: 'app-metamask-connect-button',
  template: `
    <button (click)="connectWallet()">Connect to Metamask</button>
  `,
})

declare global {
  interface Window {
    ethereum: any;
  }
}


export class MetamaskConnectButtonComponent {


  constructor(private window: Window) {}

  ngOnInit(): void {}

  connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    }
    else {
      console.log('MetaMask not found');
    }
  }
  // async connectToMetamask() {
  //   // Connect to Metamask
  //   if (window.ethereum) {
  //     await window.ethereum.request({ method: 'eth_requestAccounts' });
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     console.log('Connected to Metamask with provider:', provider);
  //   } else {
  //     console.log('Metamask not detected');
  //   }
  // }

}
