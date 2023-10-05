import React from "react";

function Experience({ experience }) {
  if (experience.length > 0) {
    return (
      <div>
        {console.log(experience.length)}
        Experience
        <ul>
          {experience.slice(0, 3).map(({ year, company, role }, index) => {
            return (
              <li key={index}>
                Year:{year} Company:{company} Role:{role}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default Experience;
