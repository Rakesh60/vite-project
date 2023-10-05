import React from "react";

function Education({ education }) {
  return (
    <div>
      Education
      <ul>
        {education.slice(0, 3).map((edu, index) => {
          return <li key={index}>{edu}</li>;
        })}
      </ul>
    </div>
  );
}

export default Education;
