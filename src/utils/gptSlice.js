
import { createSlice } from "@reduxjs/toolkit";




const gptSlice=createSlice({
  name:'gpt',
  initialState:{
    isOpen:false
  },
  reducers:{
    clickOpenGpt:(state,action)=>{
      state.isOpen=!state.isOpen

    }
  }
})



export const {clickOpenGpt}=gptSlice.actions

export default gptSlice.reducer