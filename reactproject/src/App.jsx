import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const students = 43000;
  const name_surname = "Pakistanlı Mehmet Abdül";
  const type = "date";
  const url = "https://random-image-pepebigotes.vercel.app/api/random-image";

  return (
    <>
      <a href='https://techarsiv.com'>Grant</a>
      <h1>{name_surname}</h1>
      <p>{students}</p>
      <h3>{students == 43000 ? "Quite lot" : "?_*"}</h3>
      <div>
        <input placeholder='Give me your name'></input>
      </div>
      <div>
        <input type={type}></input>
      </div>
      <img src={url} width={500} height={500}></img>

      <div className='box'>
      </div>

    {/* camel case yapısı */}
      <div style={
        {
          backgroundColor:'red',
          width:'250px',
          height : '250px',
          textAlign : 'center',
          margin : 'center'
        }
      }></div>
      
    </>
  )
}

export default App
