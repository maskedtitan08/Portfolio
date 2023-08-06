import React, {useState,useEffect} from 'react'
// import { FaDonate } from 'react-icons/fa';
// import { Modal, ModalHeader, ModalBody, Row, Button } from "reactstrap"
// import img from "../../assets/img1.png"
import "./Projects.css"

const Projects = ({state}) => {
    const [projects,setProjects] = useState("");
    useEffect(()=> {
        const {contract} = state;
        const projectDetails = async()=> {
            const projects = await contract.allProjects();
            setProjects(projects);
            // console.log(projects);
        }
        contract && projectDetails();
    },[state]);
    return (
        <section className="project-section">
            <h1 className="title">Projects </h1>
            <div className="card-wrapper">
                 {projects!=="" && projects.map((project,index)=>{          // paasing projects array
                    const githubLink = `https://github.com/maskedtitan08/${project.name}`
                                                    // contract k project.name mein whi naam save krna jo repo ka ho github mein
                    return ( <a href= {githubLink} className="project-card" target='_blank' rel="noopener noreferrer" key={index}>
                    <div className="card-img">
                        <img src={`https://ipfs.filebase.io/ipfs/${project.image}`} alt="" /></div>
                        {/* change img => https://gateway.pinata.cloud/ipfs/${projects.image} */}
                                                                       {/* $ - it is used to get remianing url from project variable */}
                    <div className="card-text">
                        {/* using project name and description using dot operator */}
                        <h3>{project.name}</h3>     
                        <p>{project.description}</p>
                    </div>
                </a>)
                })} 
           
            </div>
 {/*  =========popup bootstrap==========  */}

{/* modal mtlb jaise aap uss line pr click kro to upar se dialogue box type ka nikal k aata */}
 {/* <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                        <ModalHeader toggle={() => setModal(!modal)}>
                            Enter the ETH you want to donate!
                        </ModalHeader>
                        <ModalBody>
                            <form >
                                <Row>
                                    <input id="eth" type="text" />
                                        <Button className='mt-4' >
                                            Send
                                        </Button>
                                </Row>
                            </form>
                        </ModalBody>
                    </Modal>
                    {/*  =========popup bootstrap end==========  */}
                    {/* <p className='donate' onClick={() => setModal(true)}>Liked the dummyValue's ? Consider donating Eth's <FaDonate className='icon' /></p> */} 
        </section>
    )
}

export default Projects