import React from "react";
import marksheet from "../../assets/marsheet.png";
import adhar from "../../assets/adhar.png";
import dl from "../../assets/dl.png";
import "./documents.css";

function Documents() {
  return (
    <div className="documents-container">
      <h2 className="documents-title">Personal Documents</h2>
      <ul className="documents-list">
        <li className="documents-list-item">
          <a href="link-to-document-1" className="documents-link">
          <img src={marksheet} alt="Icon" />
          <br />
            High School Marksheet
        </a>
        </li>
        <li className="documents-list-item">
          <a href="link-to-document-2" className="documents-link">
          <img src={marksheet} alt="Icon" />
          <br />
            Intermediate Marksheet
          </a>
        </li>
        <li className="documents-list-item">
          <a href="link-to-document-3" className="documents-link">
          <img src={adhar} alt="Icon" />
          <br />
            Electronic Aadhar
          </a>
        </li>
        <li className="documents-list-item">
          <a href="link-to-document-4" className="documents-link">
          <img src={dl} alt="Icon" />
          <br />
            Driving License
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Documents;
