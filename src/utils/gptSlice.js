
import { createSlice } from "@reduxjs/toolkit";




const gptSlice=createSlice({
  name:'gpt',
  initialState:{
    isOpen:false,
    gptResult:null,
    tmdbResult:null
  },
  reducers:{
    clickOpenGpt:(state)=>{
      state.isOpen=!state.isOpen

    },
    gptSearchMovies:(state,action)=>{
    const  {gptResult,tmdbResult}=action.payload
        state.gptResult=gptResult,
        state.tmdbResult=tmdbResult
    }
  }
})



export const {clickOpenGpt,gptSearchMovies}=gptSlice.actions

export default gptSlice.reducer