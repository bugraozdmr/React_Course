import { InputAdornment, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

export const LessonTextField = () => {
    const [value,setValue] = useState<string>('');

  return (
    <Stack spacing={4}>
        <Stack direction={'row'} spacing={2}>
            <TextField label="Name" color="secondary" focused variant='outlined' />
            <TextField label="Surname" color="info" variant='filled' />
            <TextField label="Surname" color="error" size='medium' variant='filled' />
            <TextField label="Surname" color="error" size='medium' variant='filled' helperText='name pls' />
            <TextField label="Password" color="error" size='medium' variant='filled' helperText='you are in safe hands' type='password'/>

            <TextField label="Name" color="warning" variant='filled' disabled/>
            <TextField label="Name" color="warning" variant='filled' InputProps={{readOnly:true}} value={'cant change this'}/>

            <TextField label="Name" color="warning" variant='filled' InputProps={{startAdornment:(
                <InputAdornment position='start'>TL</InputAdornment>
            )}}/>

            <TextField label="Name" color="warning" variant='filled' InputProps={{endAdornment:(
                <InputAdornment position='end'>TL</InputAdornment>
            )}}/>
        </Stack>
        <Stack direction={'row'} spacing={3}>
            <TextField
            onChange={(e) => {setValue(e.target.value)}}
            value={value}
            type='password'
            label='Password Area'
            variant='outlined'
            helperText={value !== '' ? value : 'just enter'}
            ></TextField>
        </Stack>
    </Stack>
  )
}
