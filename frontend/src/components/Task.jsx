import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
const Task = ({taskid,task, isCompleted}) => {
    const [isDone,setIsDone]=useState(isCompleted);
    const handleEdit=(taskid,currentStatus)=>{
        fetch(`http://localhost:4000/api/tasks/update/${taskid}`, {
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                isCompleted:!currentStatus
            })
        })
        .then(res=>res.json())
        .then((updatedTask)=> setIsDone(updatedTask.isCompleted))
        .catch(err=>console.log(err))
    }
    
    const handleDelete=(taskid)=>{
        fetch(`http://localhost:4000/api/tasks/delete/${taskid}`, {
            method:'DELETE',
        })
        .then(res=>res.json())
        .catch(err=>console.log(err))
    }
  return (
    <div className='task'>
        <h3 className={isDone ? 'line-through' : ''}>{task}</h3>
        <div className="checkbox">
            {isDone ? <CheckCircleIcon className='icon' onClick={()=>handleEdit(taskid,isDone)}/> : <CircleIcon className='icon' onClick={()=>handleEdit(taskid,isDone)}/>}
            <DeleteIcon className='icon' onClick={()=>handleDelete(taskid)}/>
        </div>
    </div>
  )
}

export default Task
