import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [value, setValue] = useState(1)

  const handleClick = () => {
    console.log({value});
    value += 1;
  }

  return (
    <>
      {/*<button onClick={handleClick}>Kurs Ekle</button>*/}
      <button
        onClick={() => {
          setValue(value+=1);
        }}
      >
        Kurs Ekle
      </button>
      <div>Kurs Sayısı : {value}</div>
    </>
  );
}

export default App
