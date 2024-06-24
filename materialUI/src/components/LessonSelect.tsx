import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

export const LessonSelect = () => {
    const [value,setValue] = useState<Array<string>>([]);

  return (
    // tam boyda olmasını sağladı
    <Box width='250px'>
        {/* 
        <TextField select label='Select Country' color='secondary' fullWidth
        value={value}
        onChange={(event) => {setValue(event.target.value)}}>
        <MenuItem selected>Select Country</MenuItem>
        <MenuItem value='TR'>Turkey</MenuItem>
        <MenuItem value='CA'>Canada</MenuItem>
        <MenuItem value='IT'>Italy</MenuItem>
        </TextField>
        */}
        <TextField 
        SelectProps={{
            multiple : true,
        }}
        select label='Select Country' color='secondary' fullWidth
        value={value}
        onChange={(event) => {
            setValue(
            typeof event.target.value === 'string' ?
            event.target.value.split(',')
            :event.target.value
        )
        console.log(value);
        }}>
        <MenuItem selected>Select Country</MenuItem>
        <MenuItem value='TR'>Turkey</MenuItem>
        <MenuItem value='CA'>Canada</MenuItem>
        <MenuItem value='IT'>Italy</MenuItem>
        </TextField>
    </Box>
  )
}
