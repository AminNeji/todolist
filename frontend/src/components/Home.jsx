import React from 'react'
import Create from './Create.jsx'
import { useState, useEffect } from 'react'
import Task from './Task.jsx'
import GitHubIcon from '@mui/icons-material/GitHub';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/`)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.log(err))
  }, [tasks]);
  return (
    <div className="home">
      <h1>To-Do-List</h1>
      <Create />
      {
        tasks.length === 0 ? (
          <h2>No Records !</h2>
        ) : (
          tasks.map((tasked, index) => (
            <div key={index}>
              <Task taskid={tasked._id} task={tasked.task} isCompleted={tasked.isCompleted} />
            </div>
          ))
        )
      }
      <div className="link"><a href="https://github.com/AminNeji"><GitHubIcon/></a></div>
    </div>
  )
}

export default Home
