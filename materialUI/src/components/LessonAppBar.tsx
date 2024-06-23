import { AppBar, Box, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

import React, { useState } from 'react'

export const LessonAppBar = () => {
  const [anchorEl,setAnchorEl] = useState<null | HTMLElement>(null);
  const openControl = Boolean(anchorEl);


  const handleNotClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }


  const handleClose = () => {
    setAnchorEl(null);
  }
  


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Stack direction={'row'} spacing={3}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit" onClick={handleNotClick}>Notification</Button>
            <Button color="inherit">Login</Button>
          </Stack>
          <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Persons</MenuItem>
            <MenuItem onClick={handleClose}>System</MenuItem>
            <MenuItem onClick={handleClose}>Aliens</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
