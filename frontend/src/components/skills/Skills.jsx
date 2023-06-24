import React from 'react'
import './Skills.css'

import react from "../../assets/react.svg";
import btc from "../../assets/btc.png";
import eth from "../../assets/eth.png";
import hardhat from "../../assets/hardhat.png";
import etherjs from "../../assets/etherjs.jpeg";
// import gns from "../../assets/gns.png";
import polygon from "../../assets/polygon.png";
import node from "../../assets/node.svg";



const Skills = () => {
  return (
    <section className="skills-section">

      {/* <img src={react} alt="react-icon" />
        <img src={btc} alt="btc-icon" />
        <img src={eth} alt="eth-icon" />
        <img src={polygon} alt="polygon-icon" />
        <img src={node} alt="node-icon" /> */}
        {/* <a className='text'>Skills</a> */}

      <a href="https://hardhat.org/" target="_blank">
        <img src={hardhat} alt="hardhat-icon" />
      </a>

      <a href="https://legacy.reactjs.org/" target="_blank">
        <img src={react} alt="react-icon" />
      </a>

      <a href="https://docs.ethers.org/v6/" target="_blank">
        <img src={etherjs} alt="etherjs-icon" />
      </a>

      <a href="https://bitcoin.org/en/" target="_blank">
        <img src={btc} alt="btc-icon" />
      </a>

      <a href="https://ethereum.org/en/" target="_blank">
        <img src={eth} alt="eth-icon" />
      </a>



      <a href="https://polygon.technology/" target="_blank">
        <img src={polygon} alt="polygon-icon" />
      </a>

      <a href="https://nodejs.org/en/docs" target="_blank">
        <img src={node} alt="node-icon" />
      </a>

    </section>
  )
}

export default Skills