import React from 'react'
import './Video.css'

function Video(props) {
    
    console.log(props)
  return (
    
    <>   
      <div>
       {props.children}
      </div>

      </>
  
  )
}



function Thumb() {
  return (
    <div>
        Thumbnail
      
    </div>
  )
}




export  {Video,Thumb}
