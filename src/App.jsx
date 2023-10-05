import React from "react";
// import { Video, Thumb } from "./components/Video";
import Resume from "./Resume/Resume";
import "./App.css";

function App() {
  const channel = "RakeshYt";
  const resume = {
    experience: [{ year: 2012, company: "xyz", role: "something" }],
    education: [],
    skills: ["react js", "node js","Django"],
  };

  return (
    <div>
      {/* <Video>
        <Thumb></Thumb>   
      </Video> */}

      <Resume {...resume}></Resume>
    </div>
  );
}

export default App;

// title="React Js"
// views="10 k"
// time="1 Month ago"
// channel={channel}
