import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { CourseList } from './components/CourseList'

function App() {
  

  return (
    <>
      <Navbar />
      <CourseList />
    </>
  )
}

export default App
