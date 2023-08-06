import { SlCalender } from "react-icons/sl"
import './Experience.css'
import { useState, useEffect } from "react"

const Experience = ({ state }) => {

    const [education, setEducation] = useState("");
    const [experience, setExperience] = useState("");

    useEffect(() => {
        const { contract } = state;
        const educationDetails = async () => {
            const education = await contract.allEducations();
            setEducation(education);
        }
        contract && educationDetails();

        const experienceDetails = async () => {
            const experience = await contract.allExperiences();
            setExperience(experience);
            console.log(experience);
        }
        contract && experienceDetails();

    }, [state])

    // useEffect(() => {
    //     const { contract } = state;

    // }, [state])

    return (
        <section className="exp-section">
            <h1 className="title">Experience & Education </h1>

            <div className="container">

                <div className="education">
                    <h1 className="edu-tittle">Education</h1>
                    {education != "" && education.map((edu,index) => {
                        return (
                            <div className="edu-card" key={index}>
                                <p className="card-text1">
                                    <SlCalender className='icon' /> {edu.date}
                                </p>
                                <h3 className="card-text2">{edu.degree}</h3>
                                {/* <p className="card-text3">Description Of Your Course</p> */}
                                <p className="card-text4">
                                    {edu.institutionName}
                                </p>
                            </div>)
                    })}
                </div>
                {/* experience */}
                <div className="education">
                    <h1 className="edu-tittle">Experience</h1>
                    {experience != "" && experience.map((exper,index) => {
                        return (
                            <div className="edu-card" key={index}>
                                <p className="card-text1">
                                    <SlCalender className='icon' /> {exper.timeWorked}
                                </p>
                                <h3 className="card-text2">{exper.designation}</h3>
                                {/* <p className="card-text3">Description Of Your Course</p> */}
                                <p className="card-text4">
                                    {exper.companyName}
                                </p>
                            </div>)
                    })}
                </div>
                
            </div>
        </section>
    )
}

export default Experience