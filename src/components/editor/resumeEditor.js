import { useSelector } from "react-redux";
import {
  add as educationAdd,
  modify as educationModify,
  remove as educationRemove,
} from "../../redux/slices/educationSlice";
import {
  add as employmentAdd,
  modify as employmentModify,
  remove as employmentRemove,
} from "../../redux/slices/employmentSlice";
import {
  add as websitesSocialSitesAdd,
  modify as websitesSocialSitesModify,
  remove as websitesSocialSitesRemove
} from "../../redux/slices/websiteSocialSitesSlice"
import Header from "./header";
import PersonalDetails from "./personalDetails";
import Section from "./section";
import Summary from "./summary";
import Accordian from "../utils/accordion";
import redux from "../../redux";
const ResumeEditor = () => {
    // const educationState = useSelector(state => state.Education.value);
    // const employmentState = useSelector(state => state.Employment.value);
  const employment = {
    inputs: [
      {
        label: "Job Title",
        col: 6,
        type: "text",
      },
      {
        label: "Employer",
        col: 6,
        type: "text",
      },
      {
        label: "Start",
        col: 3,
        type: "date",
      },
      {
        label: "End",
        col: 3,
        type: "date",
      },
      {
        label: "City",
        col: 6,
        type: "text",
      },
      {
        label: "Description",
        col: 12,
        type: "textarea",
      },
    ],
    title: "Employment History",
    desc: "Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).",
    redux: {
      actions: {
        add: employmentAdd,
        modify: employmentModify,
        remove: employmentRemove,
      },
      state: "Employment"
    },
  };
  const education = {
    inputs: [
      {
        label: "School",
        col: 6,
        type: "text",
      },
      {
        label: "Degree",
        col: 6,
        type: "text",
      },
      {
        label: "Start",
        col: 3,
        type: "date",
      },
      {
        label: "End",
        col: 3,
        type: "date",
      },
      {
        label: "City",
        col: 6,
        type: "text",
      },
      {
        label: "Description",
        col: 12,
        type: "textarea",
      },
    ],
    title: "Education",
    desc: "A varied education on your resume sums up the value that your learnings and background will bring to job.",
    redux: {
      actions: {
        add: educationAdd,
        modify: educationModify,
        remove: educationRemove,
      },
      state: "Education"
    },
  };
  console.log("rerender1");
  const socialAndWebsites = {
    inputs: [
      {
        label: "label1",
        col: 6,
        type: "text",
      },
      {
        label: "link",
        col: 6,
        type: "text",
      },
    ],
    title : "Websites & Social Links",
    desc : "You can add links to websites you want hiring managers to see! Perhaps It will be  a link to your portfolio, LinkedIn profile, or personal website",
    redux : {
      actions:{
        add : websitesSocialSitesAdd,
        modify : websitesSocialSitesModify,
        remove : websitesSocialSitesRemove
      } ,
      state: "WebsiteAndSocialSites"
    }
   
  }
  return (
    <div>
      <Header />
      <PersonalDetails />
      <Summary />

      <Section formData={education} />
      <Section formData={employment} />
      <Section formData={socialAndWebsites}/>
    </div>
  );
};

export default ResumeEditor;