
// import { useEffect } from 'react';
import { useNowPlaying } from '../Hooks/useNowPlayingHook';
import { MainContainer,SecondaryContainer } from "./index";



const Browser = () => {

  useNowPlaying()
  return (
    <div >
 <MainContainer/>
 <SecondaryContainer/>
    </div>
  )
}
export default Browser