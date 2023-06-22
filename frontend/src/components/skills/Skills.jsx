import React from 'react'
import './Skills.css'

import react from "../../assets/react.svg";
import btc from "../../assets/btc.png";
import eth from "../../assets/eth.png";
// import truffle from "../../assets/skills/truffle.png";
// import gns from "../../assets/skills/gns.png";
import polygon from "../../assets/polygon.png";
import node from "../../assets/node.svg";
// import react from "../../assets/react.svg"


const Skills = () => {
  return (
    <section className="skills-section">

        <img src={react} alt="react-icon" />
        <img src={btc} alt="btc-icon" />
        <img src={eth} alt="eth-icon" />
        {/* <img src={truffle} alt="truffle-icon" /> */}
        {/* <img src={gns} alt="gns-icon" /> */}
        <img src={polygon} alt="polygon-icon" />
        <img src={node} alt="node-icon" />
    </section>
  )
}

export default Skills