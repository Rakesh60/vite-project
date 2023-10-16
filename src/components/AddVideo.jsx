import { React, useState } from "react";
import "./AddVideo.css";

function AddVideo({ addVideos }) {
  const [video, setVideo] = useState({
    time: "2 month ago",
    channel: "Kumar Coder",
    verified: true,
  });
  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
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
        />
        <input
          type="text"
          name="views"
          placeholder="views"
          onChange={handleChange}
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
