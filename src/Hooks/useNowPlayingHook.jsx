

import {options} from '../utils/constant'
import { useDispatch } from 'react-redux';
import { addMovies } from '../utils/movieSlice';
import { useEffect } from 'react';




export const useNowPlaying=()=>{
  const dispatch=useDispatch()
  const fetchNowPlaying=async()=>{
     try {
      const response=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      let data= await response.json();
      console.log(data.results);
      dispatch(addMovies(data.results))

     } catch (error) {
      console.log(error,"error fetching-now playing data from TMDB database api");
     }
       
     } 


     useEffect(()=>{
      fetchNowPlaying()
     },[])
}

