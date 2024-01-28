import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice";

const VideoContainer = ({id}) => {
  const getTrailer=useSelector((store)=>store.movies?.trailer)
  const dispatch=useDispatch()
  const fetchMovieVideo = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);

    const data = await response.json();


    const filterTrailer=data.results.filter((data)=>data?.type==="Trailer")

    const trailer=filterTrailer?filterTrailer[0]:data?.results[0]
    dispatch(addTrailer(trailer))


 };

 useEffect(() => {
    fetchMovieVideo();
 }, [])

  return (
    <div>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+getTrailer?.key} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}
export default VideoContainer