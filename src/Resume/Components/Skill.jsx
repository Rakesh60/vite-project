/* eslint-disable no-unused-vars */
import React from "react";

function Skill({ skills }) {
  return (
    <div>
      Skill
      <ul>
        {skills.map((sk, index) => {
          return <li key={index}>{sk}</li>;
        })}
      </ul>
    </div>
  );
}

export default Skill;
