import { useState , FC, ChangeEvent} from 'react'
import './App.css'
import {todoType} from './apptypes'
import TodoItem from './TodoItem';

// functional component
const App : FC = () => {
  const [task,setTask] = useState<string>('');
  const [days,setDays] = useState<number>(0);
  const [todoList,setTodoList] = useState<Array<todoType>>([]);

  const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === 'task'){
      setTask(event.target.value);
    }
    else setDays(Number(event.target.value));
  }

  const addNewTask = ():void => {
    const newTask = {taskName:task,days:days};

    // spread ile ekleme
    setTodoList([...todoList,newTask]);

    setDays(0);
    setTask('');
  }

  const deleteTask = ( name : string): void => {
    //setTodoList(todoList.filter((task) => task.taskName !== name));
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== name;
      })
    )
  }

  return (
    <div className=''>
      <div className='inputArea'>
        <input type="text" placeholder='Enter task' value={task} name='task' onChange={handleChange}/>
        <input type="number" placeholder='How many days ?' value={days} name='days' onChange={handleChange}/>
        <button onClick={addNewTask}>New Task</button>
      </div>
      <div className='itemsDiv'>
        {todoList.map((value: todoType, index: number) => {
          return (
            <TodoItem key={index} task={value} deleteTask={deleteTask} />
          );
        })}
      </div>
    </div>
  )
}

export default App
