import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieSlice from "./movieSlice";
import sampleSlice from "./sampleSlice";
import gptSlice from "./gptSlice";
import appConfigSlice from "./appConfigSlice";



const appStore=configureStore({
  reducer:{
    user:userReducer,
    movies:movieSlice,
    sample:sampleSlice,
    gpt:gptSlice,
    config:appConfigSlice
  }
})





export default appStore