import React from 'react'
import { taskType } from "../proptypes";
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';


interface TaskProps {
    task: taskType;
    onDelete: (id: number|null) => void;
}

export const Task : React.FC<TaskProps> = ({task,onDelete}) => {

    const deleteClick = () => {
        console.log(task);
        onDelete(task.id);
    }

  return (
    <Grid item xs={12} md={6} lg={3}>
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography variant="h5" component="div">
            {task.title}
            </Typography>
            <Typography variant="body2">
                {task.content}
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant="outlined" color='error' onClick={deleteClick}>Delete</Button>
        </CardActions>
        </Card>
    </Grid>
    
  )
}
