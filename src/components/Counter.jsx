import React from 'react'
import { useState } from 'react'

function Counter() {
    // const [number, setnumber] = useState(0)
    var fruit = useState('banana'); 
    let fname=fruit[0];
    let setfname=fruit[1]
  
    
        // Returns a pair
    function handelClick(e){
        e.stopPropagation()
        // setnumber(number+1)
        // console.log(number)
        console.log(setfname)
        console.log(fname)
    }


  return (
    <div>
        
      
      <button onClick={handelClick}>Add</button>
      {/* <h1 style={{color:'white',fontSize:'30px'}} >{number}</h1> */}
      <h1 style={{color:'white',fontSize:'30px'}}>{fname}</h1>
    </div>
  )
}

export default Counter
