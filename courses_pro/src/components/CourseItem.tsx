import React from "react";
import { stateType } from "../control/cartSlice";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useDispatch } from "react-redux";
import { removeItem,increase,decrease } from "../control/cartSlice";


export const CourseItem = ({ id, title, price, img, quantity }) => {
  const dispatch = useDispatch();
  return (
    <Grid xs={12} md={6} lg={3}  sx={{display:'flex',justifyContent:'center',marginTop:'1.5rem',alignItems:'center'}}>
      <Card sx={{ maxWidth: 345, gap:'1.2rem' }}>
        <CardMedia component="img" alt={title} height="140" image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body4" color="text.danger">
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => {dispatch(decrease(id))}}>
            <KeyboardArrowLeftIcon />
          </Button>
          <p>{quantity}</p>
          <Button size="small" onClick={() => {dispatch(increase(id))}}>
            <KeyboardArrowRightIcon />
          </Button>
          <Button variant="outlined" color="error" size="medium" onClick={() => {
            dispatch(removeItem(id))
          }}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
