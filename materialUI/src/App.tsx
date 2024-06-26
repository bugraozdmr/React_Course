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
import { LessonAutoComplete } from './components/LessonAutoComplete'
import { LessonBox } from './components/LessonBox'
import { LessonStack } from './components/LessonStack'
import { LessonGrid } from './components/LessonGrid'
import { LessonCard } from './components/LessonCard'
import { LessonAccordion } from './components/LessonAccordion'
import { LessonAppBar } from './components/LessonAppBar'
import { LessonImageList } from './components/LessonImageList'
import { LessonPaper } from './components/LessonPaper'
import { LessonLink } from './components/LessonLink'
import { LessonBreadCrumps } from './components/LessonBreadCrumps'
import { LessonDrawer } from './components/LessonDrawer'
import { LessonBadge } from './components/LessonBadge'
import { LessonSpeedDial } from './components/LessonSpeedDial'
import { LessonBottomNavigation } from './components/LessonBottomNavigation'
import { LessonAvatar } from './components/LessonAvatar'
import { LessonList } from './components/LessonList'
import { LessonTooltip } from './components/LessonTooltip'
import { LessonAlert } from './components/LessonAlert'
import { LessonDialog } from './components/LessonDialog'
import { LessonSnackbar } from './components/LessonSnackbar'
import { LessonProgress } from './components/LessonProgress'
import { LessonSkeleton } from './components/LessonSkeleton'
import { LessonLoadingButton } from './components/LessonLoadingButton'
import { LessonTable } from './components/LessonTable'
import { LessonDatePicker } from './components/LessonDatePicker'
import { LessonDatePicker2 } from './components/LessonDatePicker2'
import { LessonDateRange } from './components/LessonDateRange'
import { LessonTabs } from './components/LessonTabs'
import { LessonMasonry } from './components/LessonMasonry'
import { LessonTimeline } from './components/LessonTimeline'
import { LessonCustomizeTheme } from './components/LessonCustomizeTheme'

import { colors,ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette:{
    secondary:{
      main: colors.brown[500],
    },
  },
});

function App() {
  return (
    // son ders için customize etme
    <ThemeProvider theme={theme}>
      <div>
      {/* <LessonTypography /> */}
      {/* <LessonButton /> */}
      {/* <LessonButtonGroup /> */}
      {/* <LessonTextField /> */}
      {/* <LessonRadioGroup /> */}
      {/* <LessonRadioExample /> */}
      {/* <LessonSelect /> */}
      {/* <LessonCheckbox /> */}

      {/* <LessonAutoComplete /> */}
      {/* <LessonBox /> */}
      {/* <LessonStack /> */}
      {/* <LessonGrid /> */}
      {/* <LessonCard /> */}
      {/* <LessonAccordion /> */}
      {/* <LessonAppBar /> */}
      {/* <LessonImageList /> */}
      {/* <LessonPaper /> */}
      {/* <LessonLink /> */}
      {/* <LessonBreadCrumps /> */}
      {/* <LessonDrawer /> */}
      {/* <LessonBadge /> */}
      {/* <LessonSpeedDial /> */}
      {/* <LessonBottomNavigation /> */}
      {/* <LessonAvatar /> */}
      {/* <LessonList /> */}
      {/* <LessonTooltip /> */}
      {/* <LessonAlert /> */}
      
      {/* <LessonDialog /> */}
      {/* <LessonSnackbar /> */}
      {/* <LessonProgress /> */}
      {/* <LessonSkeleton /> */}
      {/* <LessonLoadingButton /> */}
      {/* <LessonTable /> */}
      {/* <LessonDatePicker /> */}
      {/* <LessonDatePicker2 /> */}
      {/* <LessonDateRange /> */}
      {/* <LessonTabs /> */}
      {/* <LessonMasonry /> */}
      {/* <LessonTimeline /> */}
      <LessonCustomizeTheme />
    </div>
    </ThemeProvider>
  )
}

export default App
