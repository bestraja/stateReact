
import '../layout/Taskitem.css'
import { MdEditCalendar } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
function Taslitem({el})
{
const [isChecked, setIsChecked] = useState(el.cheked);
const [editDes, seteditDes] = useState(el.description)
const [edit, setedit] = useState(false)

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    const data =JSON.parse(localStorage.getItem('data'))
    const updateData=data.map(task=>task.id===el.id?{...task,cheked:true}:task)
    setIsChecked(true)
    localStorage.setItem('data',JSON.stringify(updateData))
  };
  const pStyle = {
    color: isChecked ? 'green' : 'red',
   
  };
  const handleEdit=()=>{
    setedit(!edit)
  }
  const saveEdit=()=>{
    const data = JSON.parse(localStorage.getItem('data')) 
    const updatedData = data.map(task => task.id === el.id ? { ...task, description:editDes } : task )
    setedit(false)
    localStorage.setItem('data', JSON.stringify(updatedData))

  }
  const handleDelete=()=>{
     const confirmdelete=window.confirm('confirm  delete')
    if (confirmdelete)
    {
    const data = JSON.parse(localStorage.getItem('data')) 
    const deleteData = data.filter(task => task.id !== el.id )
    localStorage.setItem('data', JSON.stringify(deleteData))

  }}
  return (
    <div>
     <h1>Name:{el.name}</h1>
    
    <p>Description:{el.description}</p>
    <input type='checkbox'  checked={isChecked}
          onChange={handleChange} /><MdEditCalendar />
    <MdDeleteForever />
    <p  style={pStyle} >Task  {isChecked ? 'Complete'   : 'Not Complete'}</p>
    <div className='icons' >
       <FaEdit   onClick={handleEdit} />
     {edit ? <><input  onChange={(e)=>seteditDes(e.target.value)} /> <button onClick={saveEdit}  >save</button>  </>: null}
       <MdDelete  onClick={handleDelete} />
       </div>
    </div>
  )
}

export default Taslitem