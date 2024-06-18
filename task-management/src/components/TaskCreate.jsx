import { useState } from "react";

import { useContext } from 'react'
import TasksContext from '../context/task';


function TaskCreate ({task,taskFormUpdate,onUpdate}){
    const {editTaskById,createTask} = useContext(TasksContext)

    const [title,setTitle] = useState(task ? task.title : '')
    const [taskDesc,setTaskDesc] = useState(task ? task.taskDesc : '')

    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    
    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(taskFormUpdate){
            // bilgi taşıma yukarılara
            onUpdate(task.id,title,taskDesc);
            // zaten taskShowda gidiyor bilgiler
            //editTaskById(task.id,title,taskDesc);
        }
        else{
            //onCreate(title,taskDesc);
            createTask(title,taskDesc);
        }

        
        setTitle('');
        setTaskDesc('');
    }
    
    

    return (
      // bu açılmalı yoksa {} kullanılamaz --- doğruysa
      <>
        {taskFormUpdate ? (
            <div className="task-update">
            <h3>Lütfen Task Ekleyiniz</h3>
            <form className="task-form">
                <label className="task-label">Lütfen taskı düzenleyiniz :</label>
                <input value={title} onChange={handleChange} className="task-input" />
                <label className="task-label">Taskı düzenleyin :</label>
                <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={6}/>
                <button className="btn-sub btn-hero" onClick={handleSubmit}>Güncelle</button>
            </form>
            </div>
        ) : (
          <div className="task-create">
            <h3>Lütfen Task Ekleyiniz</h3>
            <form className="task-form">
              <label className="task-label">Başlık :</label>
              <input
                value={title}
                onChange={handleChange}
                className="task-input"
              />
              <label className="task-label">Task Girin :</label>
              <textarea
                value={taskDesc}
                onChange={handleTaskChange}
                className="task-input"
                rows={6}
              />
              <button className="btn-sub" onClick={handleSubmit}>
                Oluştur
              </button>
            </form>
          </div>
        )}
      </>
    );
}

export default TaskCreate;