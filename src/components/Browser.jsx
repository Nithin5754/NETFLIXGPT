
// import { useEffect } from 'react';
import { useNowPlaying } from '../Hooks/useNowPlayingHook';
import { usePopularMovies } from "../Hooks/usePoplularMovies";
import { useTopRatedMovies } from '../Hooks/useTopRatedMovies';
import { MainContainer,SecondaryContainer } from "./index";
import {GptSearch} from './index';
import {  useSelector } from 'react-redux';


const Browser = () => {
  const gptData=useSelector((store)=>store.gpt.isOpen)

  useNowPlaying()
  usePopularMovies()
  useTopRatedMovies()
  return (
    <div className='relative' >
    { gptData && <GptSearch/>}
{ !gptData&&( <>
  <MainContainer/>
 <SecondaryContainer/>
</>)}
    </div>
  )
}
export default Browser