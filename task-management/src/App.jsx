import { useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'


function App() {
  const [tasks,setTasks] = useState([])

  const createTask = (title,Task) => {
    // Chillden Parenta param aktarımı
    // console.log(title,Task);

    // spread operator ...
    const createdTasks = [
      ...tasks ,{
        id : Math.round(Math.random()*99999),
        title,
        taskDesc : Task
      }
    ];

    setTasks(createdTasks);
  }

  const DeleteTaskById = (id) => {
    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(newTasks);
  }  

  const editTaskById = (id,updatedTitle,updatedDesc) => {
    const updatedTasks = tasks.map((task) => {
      if(task.id ===id){
        return {id,title:updatedTitle,taskDesc:updatedDesc}
      }
      return task;
    });

    
    setTasks(updatedTasks);
  }  
  
  
  return (
    <>
      <TaskCreate onCreate={createTask}/>
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={DeleteTaskById} onUpdate={editTaskById} />
    </>
  )
}

export default App
