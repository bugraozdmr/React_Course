import { Typography } from '@mui/material'
import React from 'react'

function LessonTypography() {
  return (
    <div>
        <Typography variant='body1'>Body1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sint rem consequatur modi cupiditate necessitatibus voluptatibus non, perspiciatis doloremque possimus magni maxime? Distinctio consectetur laboriosam veritatis quae unde error aut.</Typography>
        <Typography variant='body2'>Body1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sint rem consequatur modi cupiditate necessitatibus voluptatibus non, perspiciatis doloremque possimus magni maxime? Distinctio consectetur laboriosam veritatis quae unde error aut.</Typography>

        <Typography variant='h1'>h1</Typography>
        <Typography variant='h2'>h2</Typography>
        <Typography variant='h3'>h3</Typography>
        <Typography variant='h4'>h4</Typography>
        <Typography variant='h5'>h5</Typography>
        <Typography variant='h6'>h6</Typography>

        {/* h1 özellikleri geçerli ama h4 */}
        <Typography variant='h1' component='h4'>h1</Typography>

        <Typography variant='h1' component='h4' align='left'>h1</Typography>
        <Typography variant='h1' component='h4' align='right'>h1</Typography>
        <Typography variant='h1' component='h4' align='center'>h1</Typography>
        
        <Typography variant='subtitle1'>alt baslik 1</Typography>
        <Typography variant='subtitle2'>alt baslik 2</Typography>
    </div>
  )
}

export default LessonTypography