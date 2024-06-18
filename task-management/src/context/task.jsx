import axios from 'axios';
import { useState } from 'react'


import {createContext} from 'react';
// context oluştu
const TasksContext = createContext();

function Provider({children}){
    const [tasks, setTasks] = useState([]);

    const FetchData = async () => {
      const response = await axios.get("http://localhost:3000/tasks");

      setTasks(response.data);
    };

    const createTask = async (title, Task) => {
      // Chillden Parenta param aktarımı

      const response = await axios.post("http://localhost:3000/tasks", {
        title,
        taskDesc: Task,
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

      const createdTasks = [...tasks, response.data];

      setTasks(createdTasks);
    };

    const DeleteTaskById = async (id) => {
      // siler databaseden
      await axios.delete(`http://localhost:3000/tasks/${id}`);

      const newTasks = tasks.filter((task) => {
        return task.id !== id;
      });

      setTasks(newTasks);
    };

    const editTaskById = async (id, updatedTitle, updatedDesc) => {
      await axios.put(`http://localhost:3000/tasks/${id}`, {
        title: updatedTitle,
        taskDesc: updatedDesc,
      });

      const updatedTasks = tasks.map((task) => {
        if (task.id === id) {
          return { id, title: updatedTitle, taskDesc: updatedDesc };
        }
        return task;
      });

      setTasks(updatedTasks);
    };  

    /* ** */
    const sharedValuesAndMethods = {
        tasks,
        createTask,
        FetchData,
        editTaskById,
        DeleteTaskById
    }

    // farklı provider bu
    return (  
        <TasksContext.Provider value={sharedValuesAndMethods}>
            {children}
        </TasksContext.Provider>
    );
}


export {Provider}
export default TasksContext;