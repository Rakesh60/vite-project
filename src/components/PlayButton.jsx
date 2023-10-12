import React, { useState } from 'react'
import "./Playbutton.css"

function PlayButton({children,onPlay,onPause}) {
  const [playing, setPlaying] = useState(false)

  function handelClick(e){
    e.stopPropagation()
   if(playing)onPause();
   else onPlay();
   setPlaying(!playing)
   
  }
  return (
    <div>
      <button onClick={handelClick} >{children} {playing?'▶️':'⏸️'}</button>
    </div>
  )
}

export default PlayButton
