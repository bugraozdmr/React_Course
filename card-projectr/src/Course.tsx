import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const Course = ({...props}) => {
  return (
    <Card sx={{ maxWidth: 345,marginRight:'20px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.image}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {props.desc}
        </Typography>
      </CardContent>
      
    </Card>

  )
}
