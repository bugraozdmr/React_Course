import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
import React,{ChangeEvent, useState} from 'react'

export const LessonRadioExample = () => {

    const [value,setValue] = useState<string>('');
    const [helperText,sethelperText] = useState<string>('');
    const [error,setError] = useState<boolean>(false);

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (value === ''){
            sethelperText('You have to choose !');
            setError(true);
        }
        else{
            if(value === 'Leomord'){
                sethelperText(`Best answer ' ${value.toUpperCase()} '`);
                setError(false);
            }
            else{
                sethelperText(`Good : ${value}`);
                setError(false);
            }
        }
    }

    const handleRadioGroup = (event:ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <FormControl error={error}>
                <FormLabel>Who is the best character in MLBB ?</FormLabel>
                <RadioGroup onChange={handleRadioGroup}>
                    <FormControlLabel value='Bana' label='Bane' control={<Radio color='warning'/>}/>
                    <FormControlLabel value='Karina' label='Karina' control={<Radio color='warning'/>}/>
                    <FormControlLabel value='Leomord' label='Leomord' control={<Radio color='warning'/>}/>
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button type='submit' color='secondary' size='small' variant='outlined'>Send</Button>
            </FormControl>
        </form>
    </div>
  )
}
