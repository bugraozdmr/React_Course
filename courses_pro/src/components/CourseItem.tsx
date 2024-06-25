import React from 'react'
import { stateType } from '../control/cartSlice'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const CourseItem = ({id,title,price,img,quantity}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {title}
        </Typography>
        <Typography variant="body4" color="text.danger">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><KeyboardArrowLeftIcon /></Button>
        <p>{quantity}</p>
        <Button size="small"><KeyboardArrowRightIcon /></Button>
        <Button variant='outlined' color='error' size='medium'>Delete</Button>
      </CardActions>
    </Card>

  )
}
