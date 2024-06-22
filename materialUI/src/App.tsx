import { useState } from 'react'
import './App.css'
import LessonTypography from './components/LessonTypography'
import LessonButton from './components/LessonButton'
import LessonButtonGroup from "./components/LessonButtonGroup"
import { LessonTextField } from './components/LessonTextField'
import { LessonRadioGroup } from './components/LessonRadioGroup'
import { LessonRadioExample } from './components/LessonRadioExample'
import { LessonSelect } from './components/LessonSelect'
import { LessonCheckbox } from './components/LessonCheckbox'

function App() {
  return (
    <div>
      {/* <LessonTypography /> */}
      {/* <LessonButton /> */}
      {/* <LessonButtonGroup /> */}
      {/* <LessonTextField /> */}
      {/* <LessonRadioGroup /> */}
      {/* <LessonRadioExample /> */}
      {/* <LessonSelect /> */}
      <LessonCheckbox />
    </div>
  )
}

export default App
