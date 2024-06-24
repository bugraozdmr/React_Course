import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export const LessonTooltip = () => {
  return (
    <Tooltip title='delete' placement='top'>
        <IconButton>
            <DeleteIcon />
        </IconButton>
    </Tooltip>
  )
}
