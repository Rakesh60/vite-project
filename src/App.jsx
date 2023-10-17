import React, { useState } from "react";

import videosDb from "./data/data";
import "./App.css";

import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(videosDb);
  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  return (
    <>
      <div
        className="App"
        onClick={() => {
          console.log("App");
        }}
      >
        <AddVideo addVideos={addVideos}></AddVideo>
        <VideoList videos={videos}></VideoList>
      </div>
    </>
  );
}

export default App;

// title = "React Js";
// views = "10 k";
// time = "1 Month ago";
// channel = { channel };

{
  /* <Counter></Counter> */
}

{
  /* <Resume ></Resume> */
}
