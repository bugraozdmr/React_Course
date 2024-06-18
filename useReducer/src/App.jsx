import React,{ useState,useReducer } from 'react'
import './App.css'
import Calculate from './Calculate';

export const NumberContext = React.createContext();

const initialValue = 0;
const reducer = (state , action) => {
  switch(action){
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialValue;
    default:
      return state;
  }
}

function App() {
  // state ile atama yapıyor (count'a) orda atama olur
  const [count,dispatch] = useReducer(reducer,initialValue);

  // metodlar burda çağırma başka yerde
  return (
    <div>
      <NumberContext.Provider value={{count:count,dispatch:dispatch}}>
      <Calculate />
      </NumberContext.Provider>
    </div>
  )
}

export default App
