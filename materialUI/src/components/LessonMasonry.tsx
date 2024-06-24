import { Masonry } from '@mui/lab';
import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Typography, styled } from '@mui/material';
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  color: theme.palette.text.secondary,
}));


export const LessonMasonry = () => {
  return (
    
    <Box sx={{ width: 500, minHeight: 377 }}>
        <Masonry columns={3} spacing={2}>
        {heights.map((height, index) => (
            <Paper key={index}>
            <StyledAccordion sx={{ minHeight: height }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion {index + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails>Contents</AccordionDetails>
            </StyledAccordion>
            </Paper>
        ))}
        </Masonry>
    </Box>
    
    
  )
}
