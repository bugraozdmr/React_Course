import { useEffect, useContext } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'

import TasksContext from './context/task';

function App() {
  const {FetchData} = useContext(TasksContext)

  // sadece başta çalışsın istersen
  useEffect(()=>{
    FetchData();
  },[]);


  
  
  return (
    <>
      <TaskCreate/>
      <h1>Görevler</h1>
      <TaskList/>
    </>
  )
}

export default App
