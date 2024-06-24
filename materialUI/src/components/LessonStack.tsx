import { Divider, Stack } from '@mui/material'
import React from 'react'

export const LessonStack = () => {
  return (
    <Stack 
    justifyContent={'center'}
    alignItems={'center'}
    direction={
        {xs:'columns',sm:'row',md:'row'}
    } spacing={{xs:1,sm:2,md:5}}
    divider={<Divider orientation='vertical' flexItem /> } >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
    </Stack>
  )
}
