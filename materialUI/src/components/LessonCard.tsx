import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

export const LessonCard = () => {
  return (
    <Box>
      <Card sx={{ maxWidth: 345 ,borderRadius:'20px'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://random-image-pepebigotes.vercel.app/api/random-image"
              alt="random image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{alignItems:'center',justifyContent:'center'}}>
            <Button size="small" color="info" variant="outlined">Read</Button>
            <Button size="small" color="warning" variant="outlined">Save</Button>
          </CardActions>
        </Card>
    </Box>
  );
};
