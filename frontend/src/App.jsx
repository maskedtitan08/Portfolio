import {useState} from "react";
import Hero from "./components/hero/Hero";
import Wallet from "./components/Wallet/Wallet";
import Handles from "./components/handles/Handles";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Documents from "./components/documents/Documents";
import './App.css';
import { ethers } from "ethers";

function App() {
  // const [state,setState]=useState({
  //   web3:null,
  //   contract:null
  // })
  const [state,setState] = useState({contract :null});
  const saveState=(state)=>{
    console.log(state);
    setState({contract :state});
  }
  return (
    <div className="App">
      <>
               {/* phla wala saveState koi bhi naam hai jis naam se aap function pass krenge child compo mein but dusra wala saveState function jo hm bhejna chah rhe */}
        <Wallet saveState={saveState} ></Wallet>    
        <Hero state={state}/>
        <Skills />
        <Projects state={state}/>
        <Documents state={state}/>
        <Experience state={state} />
        <Contact state={state}/>
        <Handles />

      </>
      
    </div>
  );
}

export default App;
