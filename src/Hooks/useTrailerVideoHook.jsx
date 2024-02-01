import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import { options } from "../utils/constant";
import { useEffect } from "react";

const useTrailerVideoHook = (id) => {
  const dispatch=useDispatch()
  const fetchMovieVideo = async () => {

    try {

      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
      if(!response.ok)return
  
      const data = await response.json();
  if(!data||!data.results)return 
  
      const filterTrailer=data?.results.filter((data)=>data?.type==="Trailer")
  
      const trailer=filterTrailer?filterTrailer[0]:data?.results[0]
      dispatch(addTrailer(trailer))
    } catch (error) {
      console.log(error);
    }


 };

 useEffect(() => {
    fetchMovieVideo();
 }, [])

}
export default useTrailerVideoHook