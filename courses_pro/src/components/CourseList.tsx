import React from 'react'
import { UseSelector, useSelector,useDispatch } from 'react-redux'
import { CourseItem } from './CourseItem';
import { stateType } from '../control/cartSlice';
import courseItems from '../CourseItems.js';
import { Button, Grid } from '@mui/material';
import {clearCart} from '../control/cartSlice.js';



export const CourseList = () => {
    const dispatch = useDispatch();
    const {quantity,cartItems,total} = useSelector((store) => store.cart);
  return (
    <>
    {quantity < 1 ? (
        <section>
            <header>
                <h2>Cart</h2>
                <h4>Empty</h4>
            </header>
        </section>
    ) : 
    (
        <section>
            <header style={{textAlign:'center',marginBottom:'10px'}}>
                <h2>Cart</h2>
            </header>
            <Grid container spacing={4}>
                {/* tum proplari aldi */}
                {cartItems.map((item:stateType,index:number) => {
                    return <CourseItem key={index} {...item} />
                })}
            </Grid>
            <footer style={{textAlign:'center',marginTop:'1.4rem'}}>
                <hr />
                <div>
                    <h4>Total: {total} TL</h4>
                </div>
                <Button color='error' variant='outlined' size='large' onClick={() => dispatch(clearCart())}>Clear</Button>
            </footer>
        </section>
    )}
</>
  )
}
