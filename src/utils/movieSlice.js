

import { createSlice } from "@reduxjs/toolkit";



const movieSLice=createSlice({
  name:'movies',
  initialState:{
    nowPlaying:null,
    trailer:null,
    popularmovies:null,
    topRated:null

   
  },
  reducers:{
    addMovies:(state,action)=>{
      state.nowPlaying=action.payload
    },
    addPopularmovies:(state,action)=>{
      state.popularmovies=action.payload
    },
    addTopRatedmovies:(state,action)=>{
      state.topRated=action.payload
    },
    addTrailer:(state,action)=>{
      state.trailer=action.payload
    }
  }
})


export const {addMovies,addTrailer,addPopularmovies,addTopRatedmovies}=movieSLice.actions


export default movieSLice.reducer

