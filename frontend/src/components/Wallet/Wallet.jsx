import { useState } from "react";
import Portfolio from "../../artifacts/contracts/Portfolio.sol/Portfolio.json"        // ek br "../" use krne pr tm pahunchoge components aur 2 br use krne pr src pr but you cannot move outside src
import './Wallet.css';
import { ethers } from "ethers";

const Wallet = ({ saveState }) => {
  const [connected, setConnected] = useState(true);
  const isAndroid = /android/i.test(navigator.userAgent);   //created this varibale to check whether user is using site on desktop or android

  const init = async () => {

    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // try {
    //   const provider = new ethers.providers.BrowserProvider(window.ethereum);
    //   // const accounts = await provider.send("eth_requestAccounts", []);
    //   const signer = provider.getSigner();

    //   const contractAddress = "0x0B45519effF8f6738528bA196279f54f3FD7B768";

    //   const contract = new ethers.Contract(
    //     contractAddress,Portfolio.abi,signer
    //   );
    //   setConnected(false);
    //   saveState(contract);
    //   console.log(contract);

    // } catch(error) {
    //   alert(error);
    //   alert("install metamask");
    // }

    let signer = null;
    let provider;
    if (window.ethereum == null) {

      console.log("MetaMask not installed; using read-only defaults")
      provider = ethers.getDefaultProvider()

    } else {
      provider = new ethers.BrowserProvider(window.ethereum)
      signer = await provider.getSigner();
      const contractAddress = "0x0Bc4acDE91918B6A36c762E3BFCd1D53915d2767";

      const contract = new ethers.Contract(
        contractAddress, Portfolio.abi, signer
      );
      setConnected(false);
      saveState(contract);
      console.log(contract);
    }
  }

  return (
    <>
      <div className="header">
        {isAndroid && <button className="connectBTN">
          <a href="#">Click for mobile</a>
          {/* in href paste link of metamask deeplink */}
          </button>}
      {/* <button type="" className="connectBTN" onClick={() => init()} disabled={!connected}> Connect Metamask</button> */}
        <button type="" className="connectBTN" onClick={() => init()} disabled={!connected}> {connected ? "Connect Metamask" : "Connected"}</button>
        {/* when connected show connected else show Connect Metamask */}
      </div>

    </>
  )
}


export default Wallet;
