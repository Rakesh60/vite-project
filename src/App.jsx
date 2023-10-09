import React from "react";
import { Video, Thumb } from "./components/Video";
import Resume from "./Resume/Resume";
import videos from './data/data'
import "./App.css";

function App() {

 

  return (
    <div>
       {
        videos.map(video=><Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        ></Video>)
      }

      {/* <Resume ></Resume> */}
    </div>
  );
}

export default App;

// title = "React Js";
// views = "10 k";
// time = "1 Month ago";
// channel = { channel };
