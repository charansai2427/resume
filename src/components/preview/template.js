import { useSelector } from "react-redux";
import ResumeEditor from "../editor/resumeEditor";
import '../../styles/template.scss'
const Template = () =>{
    const personalDetails = useSelector((state) => state.PersonalDetails.value);
    const employmentDetails=useSelector((state) => state.Employment.value);
    const summaryDetails=useSelector((state) => state.Summary.value);
    const educationDetails = useSelector(state => state.Education.value);
    const skillDetails = useSelector((state) => state.Skill.value);


    return(
        <div>
        <div className="left">
            <div className="profile">
                <img className="image" src={personalDetails.photo}/>
            </div>
            <div className="box">
                <div className="head">
                <p>Contact</p>
                </div>
                <p className="p3"><span>Wanted Job Title : {personalDetails.jobTitle} </span></p>
                <p className="p3"><span>First Name : {personalDetails.firstName} </span></p>
                <p className="p3"><span>Last Name : {personalDetails.lastName} </span></p>
                <p className="p3"><span>Email : {personalDetails.email} </span></p>
                <p className="p3"><span>Phone : +91 {personalDetails.phone} </span></p>
                <p className="p3"><span>Country : {personalDetails.country} </span></p>
                <p className="p3"><span>City : {personalDetails.city} </span></p>
            </div>
            
            <div className="box">
                <div className="head">
                    <p>Professional Summary</p>
                    <p>{summaryDetails}</p>
                </div>
            </div>
            <br/>
                        <div className="box">
                            <div className="head">
                                <p>Education </p>
                            </div>
                            <p>
                                {educationDetails.map((e)=>{
                                    return(
                                        <div>

                                            <p className="p3">School:<span>{e.school}</span></p>
                                            <p className="p3">Degree:<span>{e.degree}</span></p>
                                            <p className="p3"><span>Start: {e.start}</span></p>
                                             <p className="p3"><span>End Date:{e.end}</span></p>
                                             <p className="p3"><span>City:{e.city}</span></p>
                                             <p className="p3"><span>Description:{e.description}</span></p>

                                        </div>
                                    )
                                })}
                            </p>
                        </div>
                <div className="box">
                <div className="head">
                    <p>Employment History</p>
                </div>      
                <p>
                    {employmentDetails.map((e) => {
                        return(
                            <div>
                                <p className="p3"><span>Job Tiltle: {e.jobTitle}</span></p>
                                <p className="p3"><span>Company:{e.company}</span></p>
                                <p className="p3"><span>Start: {e.start}</span></p>
                                <p className="p3"><span>End Date:{e.end}</span></p>
                                <p className="p3"><span>City:{e.city}</span></p>
                                <p className="p3"><span>Description:{e.description}</span></p>
                                
                        </div>
                        )
                    })}
                </p>
                </div>
            <br/>

            <div className="box">
                <div className="head">
                    <p>Skills</p>
                </div>
                <p>
                    {skillDetails.map((e)=>{
                     return(
                        <div>
                            <p className="p3"><span>Skill {e.skill} </span></p>
                            <p className="p3"><span>Level-- {e.level}</span></p>
                        </div>
                     )   
                    })}
                </p>
            </div>

            
        </div>
        </div>
    )
}

export default Template;