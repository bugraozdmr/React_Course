import { configureStore } from "@reduxjs/toolkit";
import { courseReducer } from "./slices/CourseSlice";
import { formReducer } from "./slices/FormSlice";

export const store = configureStore({
    reducer:{
        form:formReducer,
        courses:courseReducer,
    },
    
});