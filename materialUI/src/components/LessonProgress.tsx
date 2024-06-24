import { CircularProgress, LinearProgress } from '@mui/material'
import React from 'react'

function GradientCircularProgress() {
    return (
      <React.Fragment>
        <svg width={0} height={0}>
          <defs>
            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e01cd5" />
              <stop offset="100%" stopColor="#1CB5E0" />
            </linearGradient>
          </defs>
        </svg>
        <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
      </React.Fragment>
    );
  }
  

export const LessonProgress = () => {
  return (
    <div>
        <CircularProgress color="success" />
        <CircularProgress color="secondary" variant='determinate' value={100}/>
        <GradientCircularProgress />
        <LinearProgress color="secondary" />
        <LinearProgress color="success" variant='determinate' value={40}/>
    </div>
  )
}
