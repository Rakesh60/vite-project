import React, { useState } from 'react'
import "./Playbutton.css"

function PlayButton({message,children,onPlay,onPause}) {
  const [btnname, setBtn] = useState('play')
  let playing=false;
  function handelClick(e){
    e.stopPropagation()
   if(playing)onPause(setBtn('pause'))
   else onPlay(setBtn('play'));
   playing=!playing
   
  }
  return (
    <div>
      <button onClick={handelClick} >{btnname}</button>
    </div>
  )
}

export default PlayButton
