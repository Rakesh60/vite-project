import React from "react";
import { useState } from "react";

function Counter() {
  const [number, setnumber] = useState(0);
  console.log(number);

  function onKlick(e) {
    e.stopPropagation();
    setnumber((number) => number + 1);
  }
  function handelClick(e) {
    e.stopPropagation();
    if (number > 0) {
      setnumber((number) => number - 1);
    } else {
      setnumber(0);
    }
  }

  return (
    <div>
      <button onClick={onKlick}>Add</button>
      <h1 style={{ color: "white", fontSize: "30px" }}>{number}</h1>
      <button onClick={handelClick}>Minus</button>
    </div>
  );
}

export default Counter;
