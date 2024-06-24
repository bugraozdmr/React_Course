import { Stack } from '@mui/material'
import React, { useState } from 'react'
import {LoadingButton} from '@mui/lab'


export const LessonLoadingButton = () => {
  const [loading,setLoading] = useState(false);

  return (
    <Stack direction={'row'}>
      <LoadingButton loading>Save</LoadingButton>
      <LoadingButton loading={loading} variant='outlined' onClick={() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }}>Save</LoadingButton>
    </Stack>
  )
}
