import { useState } from "react";
import TaskCreate from "./TaskCreate";


function TaskShow({task,onDelete,onUpdate}){
    const [showEdit,setshowEdit] = useState(false);

    const handleDeleteClick = () => {
        // bir üst elemente aktarım
        onDelete(task.id);
    }

    const handleEditClick = () => {
        setshowEdit(!showEdit);
    }

    // onUpdate'e 3 parametre geliyor taskCreate'den
    const HandleSubmit = (id,updatedTitle,updatedDesc) => {
        setshowEdit(false);
        onUpdate(id,updatedTitle,updatedDesc);
    }
    
    

    return (
      <div className="task-show">
        {showEdit ? (
            // bunun için yer hazılanmıştı zaten :D
          <TaskCreate task={task} taskFormUpdate={true} onUpdate={HandleSubmit}/>
        ) : (
          <div>
            <h3 className="task-title">Göreviniz</h3>
            <p>{task.title}</p>
            <h3 className="task-title">Yapılacaklar</h3>
            <p>{task.taskDesc}</p>
            <div>
              <button className="btn-dlt" onClick={handleDeleteClick}>
                Sil
              </button>
              <button className="btn-upd" onClick={handleEditClick}>
                Güncelle
              </button>
            </div>
          </div>
        )}
      </div>
    );
}

export default TaskShow;