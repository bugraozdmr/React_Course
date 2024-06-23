import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu'

export const LessonDrawer = () => {
    const [isOpen,setIsOpen] = useState(false);

  return (
    <div style={{justifyContent:'center',textAlign:'center'}}>
    <IconButton size="large" onClick={() => {setIsOpen(true)}}>
        <MenuIcon />
    </IconButton>
      <Drawer anchor="right" open={isOpen} onClose={() => {setIsOpen(false)}}>
        <Box width={250} textAlign={'center'}>
            <Typography variant="h6" component={'div'}>
                Left Panel
            </Typography>
        </Box>
      </Drawer>
    </div>
  );
};
