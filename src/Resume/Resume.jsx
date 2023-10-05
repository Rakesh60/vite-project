import React from "react";
import Skill from "./Components/Skill";
import resumeData from "./resumeData";
import Education from "./Components/Education";
import Interest from "./Components/interest";
import Experience from "./Components/Experience";
import "./resume.css";

function Resume() {
  const { experience, education, skills, interest, personalDetail } =
    resumeData;
  return (
    <>
      <div className="stuff">
        <br />
        <br />
        <h1>Resume</h1>
        <h2>{personalDetail}</h2>
        <hr />
        <br />
        <Border border="solid black 1px">
          <Interest interest={interest}></Interest>
        </Border>

        <Border border="solid red 2px">
          <Skill skills={skills}></Skill>
        </Border>
        <Border border="solid green 2px">
          <Education education={education}></Education>
        </Border>

        <Border border="solid brown 2px">
          <Experience experience={experience}></Experience>
        </Border>
      </div>
    </>
  );
}
const Border = ({ children, border }) => {
  return <div style={{ border }}>{children}</div>;
};

export default Resume;
