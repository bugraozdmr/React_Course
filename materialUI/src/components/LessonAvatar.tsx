import { Avatar, AvatarGroup, Stack } from '@mui/material'
import { blue, deepPurple } from '@mui/material/colors'
import React from 'react'

export const LessonAvatar = () => {
  return (
    <Stack sx={{justifyContent:'center'}}>
        <AvatarGroup total={24}>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
            <Avatar alt="Remy Sharp" src="https://random-image-pepebigotes.vercel.app/api/random-image" />
            <Avatar alt="Travis Howard" src="https://random-image-pepebigotes.vercel.app/api/random-image" />
            <Avatar alt="Agnes Walker" src="https://random-image-pepebigotes.vercel.app/api/random-image" />
            <Avatar alt="Trevor Henderson" src="https://random-image-pepebigotes.vercel.app/api/random-image" />
        </AvatarGroup>
        <AvatarGroup total={24} spacing={2} variant='rounded'>
            <Avatar sx={{ bgcolor: blue[500],width:'50px' }}>W2</Avatar>
        </AvatarGroup>
    </Stack>
  )
}
