import React, { useState } from "react";
import { Video, Thumb } from "./components/Video";
import PlayButton from "./components/PlayButton";
import Resume from "./Resume/Resume";
import videosDb from "./data/data";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [videos,setVideos]=useState(videosDb)
  return (
    <><button onClick={()=>{
   
      setVideos(  [...videos,{id:videos.length+1,
        title: 'New Added',
        views: '1.5M',
        time: '2 month ago',
        channel: 'Kumar Coder',
        verified: true}])
     }}>Add Videos</button>
    <div
      className="App"
      onClick={() => {
        console.log("App");
      }}
    >
     
      {/* <Counter></Counter> */}
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
     
      {/* <Resume ></Resume> */}
    </div>
    </>);
}

export default App;

// title = "React Js";
// views = "10 k";
// time = "1 Month ago";
// channel = { channel };
