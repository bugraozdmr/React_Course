import { Box } from '@mui/material'
import React from 'react'

export const LessonBox = () => {
  return (
    <Box sx={{
        backgroundColor:'secondary.main',
        width:'100px',
        height:'100px',
        color:'#00796b',
        padding:'20px',
        '&:hover':{
            backgroundColor:'secondary.dark'
        }

    }}>
        Lesson Box
    </Box>
  )
}
