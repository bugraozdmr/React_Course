import { BottomNavigation, BottomNavigationAction, Stack } from '@mui/material'
import React, { useState } from 'react'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export const LessonBottomNavigation = () => {

    const [value,setValue] = useState('');
  return (
    <BottomNavigation
      showLabels
      sx={{width:'100%',position:'absolute',bottom:0}}
      value={value}
      onChange={(event, newValue) => {
        // 0 1 2 gibi value'leri var gibi düşünüyor
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
