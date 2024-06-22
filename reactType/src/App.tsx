import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Instructor from './components/Instructor'
import InstructorList from './components/InstructorList'
import Request from './components/Request'
import EventActions from './components/EventActions'
import LoginCheck from './components/LoginCheck'
import ReducerExemple from './components/ReducerExemple'
import ContextExample from './components/ContextExample'
import { ThemeContextProvider } from './components/ThemeContext'
import RefExemple from './components/RefExemple'


function App() {



  const instructor = {
    firstName : 'Grant',
    lastName : 'Wick'
  }
  const instructorList = [
    {
      firstName : 'Grant',
      lastName : 'Wick'
    },
    {
      firstName : 'Polat',
      lastName : 'Alemdar'
    },
    {
      firstName : 'Abdülley',
      lastName : 'Johnsen'
    }
  ]


  return (
    <>
      <Home name='Grant Wick' course_number={23} />
      <Instructor instructor={instructor} />
      <InstructorList instructorList={instructorList} />
      <Request status='loading'/>
      <EventActions />
      <LoginCheck />
      <ReducerExemple />

        <ThemeContextProvider>
          <ContextExample />
        </ThemeContextProvider>

        <RefExemple />
    </>
  )
}

export default App
