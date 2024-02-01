

import {options} from '../utils/constant'
import { useDispatch } from 'react-redux';
import { addTopRatedmovies } from '../utils/movieSlice';
import { useEffect } from 'react';




export const useTopRatedMovies=()=>{
  const dispatch=useDispatch()
  const fetchNowPlaying=async()=>{
     try {
      const response=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)

      let data= await response.json();


      dispatch(addTopRatedmovies(data.results))

     } catch (error) {
      console.log(error,"error fetching-poplar movies data from TMDB database api");
     }
       
     } 


     useEffect(()=>{
      fetchNowPlaying()
     },[])
}

