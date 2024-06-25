import React from 'react'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export const Header = () => {
  return (
    <header className='HeaderSec'>
        <FormatListBulletedIcon style={{fontSize:'1.8rem',marginTop:'0.8rem',marginRight:'1.1rem'}}/>
        <h1>To Do</h1>
    </header>
  )
}
