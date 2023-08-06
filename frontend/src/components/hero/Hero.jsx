import React, { useState,useEffect} from 'react'
import { Modal, ModalBody, Row } from "reactstrap"
// import heroImg from '../../assets/hero-img.png'
import './Hero.css'

const Hero = ({state}) => {
    const [modal, setModal] = useState(false);
    const[description,setDescription]=useState("");
    const[image,setImage] = useState("");
    useEffect(() => {
        const {contract} = state;
        const fetchDescription = async() => {
            const descriptionText = await contract.description();
            setDescription(descriptionText); 
        }
        contract && fetchDescription();  // checking whether contract is there or not 
                                    // is present contract then only call description function
    },[state]);
    
    useEffect(() => {
        const {contract} = state;
        const fetchImage = async() => {
            const image = await contract.profileImage();
            setImage(image);
        }
        contract && fetchImage();

    },[state]);

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "evening"
    }
    

    return (
        <section className="hero">
        <div className="container">
            <div className="hero-text">
                {/* not stored this name in contract because it not efficient it will take unnecessary space */}
                {/* because naam br br change nhi hota to usko yahan rkh liya */}
                <p><span>Good {timeOfDay} everyone</span></p>
                <p><span>I'm Shreshtha gupta </span>  
                    </p>
                <h1>I develop decentralised apps in web3 space.</h1>
                <h3>Description : {description}</h3>
                {/*  =========popup bootstrap==========  */}

                <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalBody>
                            <Row className="text-align">
                                <label htmlFor="" toggle={() => setModal(!modal)}>
                                    Mail Id - guptashreshtha08@gmail.com
                                    {/* you can also use mail id by storing it in contract rather that using hardcoded if you are willing to change it  */}
                                    
                                </label>

                            </Row>
                    </ModalBody>
                </Modal>

                <button className="msg-btn" onClick={() => setModal(true)}>Get in Touch</button>
                {/*  =========popup bootstrap end==========  */}

            </div>
            <div className="hero-img">

                <div className="img-container">
                    <img src={`https://ipfs.filebase.io/ipfs/${image}`} alt="profilePhoto" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero