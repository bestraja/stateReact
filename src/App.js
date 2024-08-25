import React, { useState } from 'react'
import {Routes,Route,Link} from "react-router-dom";
import Taskform from "./component/Taskform";
import Tasklist from "./component/Tasklist";


function App() {
  const [tasks,settasks]=useState([])
  function add(newname,newdesc)
  {
settasks([...tasks,{name:newname,description:newdesc,cheked:false,id:tasks.length+1}])
localStorage.setItem("data", JSON.stringify(tasks));
  }
 
  return (
    <>
    <nav>
<Link to={'/addtask'}><button>AddTask</button></Link>
<Link to={'/'}><button>Home</button></Link>
    </nav>
    
      <Routes>
        <Route path ='/' element={<Tasklist />} />
        <Route path ='/addtask' element={<Taskform add={add}/>} />
      </Routes>
    </>
  );
}

export default App;
