import { useSelector } from "react-redux";

import { VideoContainer, VideoTitle } from "./index";

const MainContainer = () => {
 const dataTitle = useSelector((store) => store.movies?.nowPlaying);

 if (!dataTitle) return null;

 const { original_title, overview, id } = dataTitle[10];

;

 return (
    <div>
      <VideoTitle original_title={original_title} overview={overview} id={id} />
      <VideoContainer id={id} />
    </div>
 );
};

export default MainContainer;
