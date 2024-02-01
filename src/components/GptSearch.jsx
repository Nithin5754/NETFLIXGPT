
import { GptMovieSuggestion,GptSearchBar } from "./index";
import { backGroundImage } from "../utils/constant";
const GptSearch = () => {
  return (
    <div>
         <div className="absolute">
        <img
          className="w-full h-full"
          src={backGroundImage}
          alt="background image"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}
export default GptSearch