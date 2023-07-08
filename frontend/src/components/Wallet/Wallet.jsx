import { useState } from "react";
import Portfolio from "../../artifacts/contracts/Portfolio.sol/Portfolio.json"        // ek br "../" use krne pr tm pahunchoge components aur 2 br use krne pr src pr but you cannot move outside src
import './Wallet.css';
import { ethers } from "ethers";

const Wallet = ({ saveState }) => {
  const [connected, setConnected] = useState(true);
  const isAndroid = /android/i.test(navigator.userAgent);   //created this varibale to check whether user is using site on desktop or android

  const init = async () => {
    let signer = null;
    let provider;
    if (window.ethereum == null) {

      console.log("MetaMask not installed; using read-only defaults")
      provider = ethers.getDefaultProvider()

    } else {
      provider = new ethers.BrowserProvider(window.ethereum)
      signer = await provider.getSigner();
      const account = await signer.getAddress();
      console.log(account);
      const contractAddress = "0x703436f3FD3d4c9399a914138bE0486c9Ae4693B";

      const contract = new ethers.Contract(
        contractAddress, Portfolio.abi, signer
      );
      setConnected(false);
      saveState(contract);
      console.log(contract);
    }
  }
  console.log(connected);
  // console.log(contract);

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
