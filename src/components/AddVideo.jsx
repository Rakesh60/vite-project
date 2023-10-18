import { React, useEffect, useState } from "react";
import "./AddVideo.css";
import videos from "../data/data";

function AddVideo({ addVideos, editableVideo,updateVideo }) {
  const initialState = {
    time: "2 month ago",
    channel: "Kumar Coder",
    verified: true,
    title: "",
    views: "",
  };
  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }

    console.log("Effect");
  }, [editableVideo]);
  const [video, setVideo] = useState(initialState);
  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      updateVideo(video)
    } else {
      addVideos(video);
    }

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
        <button onClick={handleSubmit}>
          {" "}
          {editableVideo ? "Edit" : "Add"} Videos
        </button>
      </form>
    </div>
  );
}

export default AddVideo;
