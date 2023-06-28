import{useState,useEffect} from "react";
import React from "react";
import marksheet from "../../assets/marsheet.png";
import adharicon from "../../assets/adhar.png";
import dlicon from "../../assets/dl.png";
import "./documents.css";

const Documents = ({ state }) => {

  // const handleLinkClick = async (event) => {
  //   try {
  //     const accounts = await window.ethereum.request({ method: "eth_accounts" });
  //     if (!accounts || accounts.length === 0) {
  //       event.preventDefault();
  //       alert("You must be connected to MetaMask to open this link.");
  //       return false;
  //     }
  //   } catch (error) {
  //     console.error("An error occurred while checking MetaMask connection:", error);
  //   }
  // };

  const[adhar,setAdhar] = useState("");
  const[highSchool,setHighSchool] = useState("");
  const[intermediate,setIntermediate] = useState("");
  const[dl,setdl] = useState("");

  useEffect(() => {
    const { contract } = state;
    const init = async () => {
      const adhar = `https://ipfs.filebase.io/ipfs/QmT8U6f3B2bnTig2Mj4V5w3XqAQzYj3UvLuKksAwQeegb1`;
      const highschool = `https://ipfs.filebase.io/ipfs/QmZiWXNXf36fMzFDoaaForLwU4VnqTL6iX9bH4XfsnsepX`;
      const intermediate = `https://ipfs.filebase.io/ipfs/QmTTQ4zF9Z5ZLHzcyz4pzvCq1g7u7iQ2gy9L6sUymwYiVR`;
      const dl =`https://ipfs.filebase.io/ipfs/QmUeswnGK2DDTeAiE9SrPK7QTT43tnseNBQmoRxRCzXkeJ`;
      setAdhar(adhar);
      setHighSchool(highschool);
      setIntermediate(intermediate);
      setdl(dl);
      // console.log(projects);
    }
    contract && init();
  }, [state]);




  return (
    <div className="documents-container">
      <h2 className="documents-title">Personal Documents</h2>
      <ul className="documents-list">
        <li className="documents-list-item">
          <a href={highSchool} target="_blank" className="documents-link">
            <img src={marksheet} alt="Icon" />
            <br />
            High School Marksheet
          </a>
        </li>
        <li className="documents-list-item">
          <a href={intermediate} target="_blank" className="documents-link">
            <img src={marksheet} alt="Icon" />
            <br />
            Intermediate Marksheet
          </a>
        </li>
        <li className="documents-list-item">
        <a href={adhar} target="_blank" className="documents-link">
          {/* <a href={`https://ipfs.filebase.io/ipfs/QmT8U6f3B2bnTig2Mj4V5w3XqAQzYj3UvLuKksAwQeegb1`} target="_blank" className="documents-link"> */}
            <img src={adharicon} alt="Icon" />
            <br />
            Electronic Aadhar
          </a>
        </li>
        <li className="documents-list-item">
          <a href={dl} className="documents-link" target="_blank">
            <img src={dlicon} alt="Icon" />
            <br />
            Driving License
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Documents;
