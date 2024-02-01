

import {options} from '../utils/constant'
import { useDispatch } from 'react-redux';
import { addPopularmovies } from '../utils/movieSlice';
import { useEffect } from 'react';




export const usePopularMovies=()=>{
  const dispatch=useDispatch()
  const fetchNowPlaying=async()=>{
     try {
      const response=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      let data= await response.json();


      dispatch(addPopularmovies(data.results))

     } catch (error) {
      console.log(error,"error fetching-poplar movies data from TMDB database api");
     }
       
     } 


     useEffect(()=>{
      fetchNowPlaying()
     },[])
}

