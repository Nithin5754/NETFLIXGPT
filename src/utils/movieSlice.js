

import { createSlice } from "@reduxjs/toolkit";



const movieSLice=createSlice({
  name:'movies',
  initialState:{
    nowPlaying:null,
    trailer:null

   
  },
  reducers:{
    addMovies:(state,action)=>{
      state.nowPlaying=action.payload
    },
    addTrailer:(state,action)=>{
      state.trailer=action.payload
    }
  }
})


export const {addMovies,addTrailer}=movieSLice.actions


export default movieSLice.reducer

