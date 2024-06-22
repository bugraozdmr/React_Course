import React from 'react'
import {todoType} from './apptypes'

type PropsType = {
    task : todoType
    deleteTask(name:string):void
};

function TodoItem({task,deleteTask}:PropsType) {
  return (
    <div className='todoItem'>
        <p>{task.taskName}</p>
        <p>{task.days}</p>
        <button onClick={() => deleteTask(task.taskName)}>Delete</button>
    </div>
  )
}

export default TodoItem