import React from "react";
import { Video, Thumb } from "./components/Video";
import PlayButton from "./components/PlayButton";
import Resume from "./Resume/Resume";
import videos from "./data/data";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div
      className="App"
      onClick={() => {
        console.log("App");
      }}
    >
      <Counter></Counter>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            message="Play-Message"
            onPlay={() => {
              console.log("Playing", video.title);
            }}
            onPause={() => {
              console.log("Paused", video.title);
            }}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      {/* <div style={{clear:"both"}}>
        {" "}
        <PlayButton  message='Play-Message' onPlay={()=>{console.log('Play')}} onPause={()=>{console.log('Pause')}}>PLAY</PlayButton>
  
      </div> */}
      {/* <Resume ></Resume> */}
    </div>
  );
}

export default App;

// title = "React Js";
// views = "10 k";
// time = "1 Month ago";
// channel = { channel };
