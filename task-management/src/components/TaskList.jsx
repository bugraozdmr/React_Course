import TaskShow from "./TaskShow"


function TaskList ({tasks,onDelete,onUpdate}){
    console.log(tasks)
    return (
        <div className="task-list">
        {tasks.map((task,index) => {
            // bir üst elemente aktarım
            return <TaskShow key={index} task={task} onDelete={onDelete} onUpdate={onUpdate}/>
        })}
        </div>
    )
}

export default TaskList;