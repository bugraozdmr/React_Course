import { Stack, TextField, Tooltip, styled } from '@mui/material';
import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs,{Dayjs} from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


export const LessonDatePicker2 = () => {
    const [value, setValue] = React.useState<Dayjs | null>(null);

    console.log(value);
  return (
    <Stack direction={'row'} sx={{width:'100%'}}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
            value={value}
            onChange={(newValue:any) => {
                setValue(newValue);
            }}
            label = 'tarih'
            renderInput={(params:any) => <TextField {...params} />} 
            />

            <TimePicker
            label='Time'
            value={value}
            onChange={(newValue:any) => {
                setValue(newValue);
            }}
            renderInput={(params:any) => <TextField {...params} />}
             />
        </LocalizationProvider>
    </Stack>
  )
}
