import {createSlice} from '@reduxjs/toolkit'
import { addCourse } from './CourseSlice';

const FormSlice = createSlice({
    name:'form',
    initialState:{
        name: '',
        description:'',
        cost:0
    },
    reducers:{
        changeName(state,action){
            state.name = action.payload;
        },
        changeDesc(state,action){
            state.description = action.payload;
        },
        changeCost(state,action){
            state.cost = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addCourse, (state, action) => {
            state.name = '';
            state.description = '';
            state.cost = 0;
        });
    },
});

export const formReducer = FormSlice.reducer;

// reducers actions sonucta
export const {changeName,changeDesc,changeCost} = FormSlice.actions;