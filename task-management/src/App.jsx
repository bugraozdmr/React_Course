import { useEffect, useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import axios from 'axios';

function App() {
  const [tasks,setTasks] = useState([])

  const FetchData = async () => {
    const response = await axios.get('http://localhost:3000/tasks');
    
    setTasks(response.data);
  }

  // sadece başta çalışsın istersen
  useEffect(()=>{
    FetchData();
  },[]);


  const createTask = async (title,Task) => {
    // Chillden Parenta param aktarımı

    const response = await axios.post('http://localhost:3000/tasks',{
      title,
      taskDesc:Task
    });

    //console.log(response);

    // console.log(title,Task);

    // spread operator ...
    /*const createdTasks = [
      ...tasks ,{
        id : Math.round(Math.random()*99999),
        title,
        taskDesc : Task
      }
    ];*/

    const createdTasks = [
      ...tasks ,response.data
      ];
      

    setTasks(createdTasks);
  }

  const DeleteTaskById = async (id) => {
    // siler databaseden
    await axios.delete(`http://localhost:3000/tasks/${id}`);

    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(newTasks);
  }  

  const editTaskById = async (id,updatedTitle,updatedDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`,{
      title:updatedTitle,
      taskDesc:updatedDesc
    });
    
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
