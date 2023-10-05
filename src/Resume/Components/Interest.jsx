import React from "react";

function Interest({ interest }) {
  return (
    <div>
      Interest
      <ul>
        {interest.map((int, index) => {
          return <li key={index}>{int}</li>;
        })}
      </ul>
    </div>
  );
}

export default Interest;
