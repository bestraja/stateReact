import React from 'react'
import Taslitem from './Taslitem'


function Tasklist() {
  const data=JSON.parse(localStorage.getItem("data"));
  
  return (
    <div>
       {data&&data.map((el)=><Taslitem el={el} />)}
        
    </div>
  )
}

export default Tasklist