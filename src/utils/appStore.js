import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieSlice from "./movieSlice";
import sampleSlice from "./sampleSlice";



const appStore=configureStore({
  reducer:{
    user:userReducer,
    movies:movieSlice,
    sample:sampleSlice
  }
})





export default appStore