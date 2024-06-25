import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header'
import { CreateTask } from './Components/CreateTask'
import { taskType } from "../proptypes";
import { Task } from './Components/Task';
import { Grid } from '@mui/material';
import { Footer } from './Components/Footer';


function App() {
  const [tasks, setTasks] = useState<Array<taskType>>([])

  const addTask = (newTask:taskType) => {
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id:number |null) :void => {
    if(id === null){
      console.log('wtf !?');
    }
    else{
      setTasks((prevTask) => {
        return prevTask.filter((taskItem) => {
          return taskItem.id !== id;
        })
      }
      );
    }
  }

  return (
    <>
      <Header />
      <CreateTask onAdd={addTask} />

      <Grid container spacing={2} sx={{marginTop:'1.2rem'}} >
        {tasks.map((value, index) => {
          return <Task key={index} task={value} onDelete={deleteTask} />;
        })}
      </Grid>

      <Footer />
    </>
  );
}

export default App
