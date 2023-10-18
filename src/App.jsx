import React, { useState } from "react";

import videosDb from "./data/data";
import "./App.css";

import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(videosDb);
  const [editableVideo, setEditableVideo] = useState(null);
  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  function deleteVideos(id) {
    setVideos(videos.filter((video) => video.id !== id));
    console.log(videos.filter((video) => video.id !== id));
  }
  function editVideos(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }
  function updateVideo(video) {
    const index = videos.findIndex((v) => v.id === video.id);
    const newVideo = [...videos];
    newVideo.splice(index, 1, video);
    setVideos(newVideo);
  }
  return (
    <>
      <div
        className="App"
        onClick={() => {
          console.log("App");
        }}
      >
        <AddVideo
          addVideos={addVideos}
          editableVideo={editableVideo}
          updateVideo={updateVideo}
        ></AddVideo>
        <VideoList
          videos={videos}
          deleteVideo={deleteVideos}
          editVideo={editVideos}
        ></VideoList>
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
