import { Box, Grid } from '@mui/material'
import React from 'react'

export const LessonGrid = () => {
  return (
     <Box>
        <Grid container>
        <Grid xs={6} md={8}>8 birim</Grid>
        <Grid xs={6} md={4}>4 birim</Grid>
        {/* 
        <Grid xs={8}>8 birim</Grid>
        <Grid xs={4}>4 birim</Grid>
        */}
     </Grid>
     {/* 
     <Grid container>
        <Grid xs={8}>8 birim</Grid>
        <Grid xs={4}>4 birim</Grid>
        <Grid xs={8}>8 birim</Grid>
        <Grid xs={4}>4 birim</Grid>
    </Grid>
     */}
     </Box>
  )
}
