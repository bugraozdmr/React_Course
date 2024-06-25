import { createSlice } from '@reduxjs/toolkit'
import courseItems from '../CourseItems'

export type stateType = {
    cartItems : Array<{
        id: number,
        title: string,
    }>,
    quantity:number,
    total:number
}


const initialState : stateType= {
    cartItems:[],
    quantity:22,
    total:0
};


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{

    }
});


export default cartSlice.reducer;