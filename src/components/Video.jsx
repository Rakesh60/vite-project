import React from "react";
import "./Video.css";

function Video({ title,id, views, channel="Coder Dost", time,verified,children }) {
  return (
    <>
        <div className='container'>
      <div className="pic">
      <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel} {verified && '✅'} </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      {children}
      </div>
    </>
  );
}

function Thumb() {
  return <div>Thumbnail I am Childern Prop</div>;
}

export { Video, Thumb };
