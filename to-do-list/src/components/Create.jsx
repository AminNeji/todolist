import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { useState} from 'react';

const Create = () => {
  const [task, setTask] = useState([]);
    const handleclick = () => {
      fetch("http://localhost:4000/api/tasks/add", {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          task
        })
      })
      .then(res=> res.json())
      .catch(err => console.log(err))
      .then(setTask(""))
    }
  return (
    <div className='create'>
      <input type="text" name="task" value={task} placeholder="Enter Your Task" onChange={(e) => setTask(e.target.value)}/>
      <Button variant="contained" endIcon={<AddIcon/>} onClick={handleclick}>Add</Button>
    </div>
  )
}

export default Create
