import React, { useState } from 'react'
import "../layout/Forme.css"
import { useNavigate } from "react-router-dom";
function Taskform({add}) {
  const [name,setname]=useState('')
  const [des,setdes]=useState('')
  const navigate=useNavigate()
  const handdlesubmit=()=>{
    add(name,des)
    navigate('/')
   }

  return (
    <div>
      <form onSubmit={handdlesubmit}>
        <label>Name:</label>
        <input onChange={(e)=>setname(e.target.value)}/>
        <label>Description</label>
        <input onChange={(e)=>setdes(e.target.value)}/>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default Taskform