import { React, useState } from "react";
import "./AddVideo.css";
import videos from "../data/data";

function AddVideo({ addVideos }) {
  const initialState = {
    time: "2 month ago",
    channel: "Kumar Coder",
    verified: true,
    title: "",
    views: "",
  };
  const [video, setVideo] = useState({
    time: "2 month ago",
    channel: "Kumar Coder",
    verified: true,
  });
  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    setVideo(initialState);
  }

  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
          value={video.title}
        />
        <input
          type="text"
          name="views"
          placeholder="views"
          onChange={handleChange}
          value={video.views}
        />
        <button
          onClick={handleSubmit}
          // className="styled"
          // onClick={() => {
          //   setVideos([
          //     ...videos,
          //     {
          //       id: videos.length + 1,
          //       title: "New Added",
          //       views: "1.5M",
          //       time: "2 month ago",
          //       channel: "Kumar Coder",
          //       verified: true,
          //     },
          //   ]);
          // }}
        >
          Add Videos
        </button>
      </form>
    </div>
  );
}

export default AddVideo;
