import './Contact.css'
import {useState,useEffect} from "react";

const Contact = ({state}) => {

    const[resume,setResume] = useState("")

    useEffect(()=>{
        const {contract} = state;
        const set=async()=>{
            const resume = await contract.resumeLink();
            setResume("https://ipfs.filebase.io/ipfs/"+resume);   // comcatenate gateway link with cid fetched
        }
        contract && set();
    },[state]) 
    
 
    return (
        <section className="contact-section">
            <h1 className="title">
                Interested?
                Let's Get In Touch!
            </h1>
            <a href={resume} target='_blank' rel="noopener noreferrer">
                <button className="downlodeBTN" >
                    View Resume
                </button>
            </a>

        </section>
    )
}

export default Contact