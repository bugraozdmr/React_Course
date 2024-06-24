import { DateRange } from '@mui/lab';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react'

export const LessonDateRange = () => {
    const [value, setValue] = React.useState<DateRange<Dayjs>>([
        dayjs('2022-04-17'),
        dayjs('2022-04-21'),
      ]);
    
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
            <DemoItem label="Uncontrolled picker" component="DateRangePicker">
              <DateRangePicker
                defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
              />
            </DemoItem>
            <DemoItem label="Controlled picker" component="DateRangePicker">
              <DateRangePicker
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      );
    
}
