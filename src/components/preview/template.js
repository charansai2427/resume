import { useSelector } from "react-redux";
import '../../styles/template.scss'
const Template = () =>{
    const personalDetails = useSelector((state) => state.PersonalDetails.value);
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
                <p className="p3"><span>Wanted Job Title: {personalDetails.jobTitle} </span></p>
                <p className="p3"><span>First Name: {personalDetails.firstName} </span></p>
                <p className="p3"><span>Last Name: {personalDetails.lastName} </span></p>
                <p className="p3"><span>Email: {personalDetails.email} </span></p>
                <p className="p3"><span>Phone: +91 {personalDetails.phone} </span></p>
                <p className="p3"><span>Country: {personalDetails.country} </span></p>
                <p className="p3"><span>City: {personalDetails.city} </span></p>
            </div>
            <div className="box">
                <div className="head">
                    <p>Professional Skills</p>
                </div>
                <p className="p3"></p>
                <p className="p3"></p>
                <p className="p3"></p>
                <p className="p3"></p>
            </div>
            <br/>

            <div className="box">
                <div className="head">
                    <p>InterPersonal Skills</p>
                </div>
                <p className="p3"></p>
                <p className="p3"></p>
                <p className="p3"></p>
                <p className="p3"></p>
            </div>
            
        </div>
        </div>
    )
}

export default Template;