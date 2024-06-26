
import React from 'react'
import './App.css'
import { CourseForm } from './components/CourseForm'
import { CourseList } from './components/CourseList'
import { CourseSearch } from './components/CourseSearch'
import { CourseValue } from './components/CourseValue'
import Container from '@mui/material/Container';


function App() {

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <CourseForm />
        <CourseSearch />
        <CourseList />
        <CourseValue />
      </Container>
    </React.Fragment>
  )
}

export default App
