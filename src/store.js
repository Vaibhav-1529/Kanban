import { configureStore } from "@reduxjs/toolkit";
import appReducer from './Slices/taskSlice'
const store =configureStore({
    reducer:{
        app:appReducer
    }
})
export default store;