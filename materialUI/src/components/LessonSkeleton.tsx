import { Box, Skeleton } from '@mui/material'
import React, { useState } from 'react'

export const LessonSkeleton = () => {
    const [loading,setLoading] = useState(true);
  return (
    <Box sx={{ width: '100%' }}>
      {loading ? 
      (
        <>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
        </>
      )
      :
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quod voluptate ex corrupti. Soluta, tempora repudiandae quo sed minus consectetur, suscipit in eveniet quam animi labore vitae optio, id autem?</p>}
    </Box>

  )
}
