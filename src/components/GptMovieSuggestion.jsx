
import {  useSelector } from "react-redux"
import {CardsList} from './index'

const GptMovieSuggestion = () => {
  const {gptResult,tmdbResult}=useSelector((store)=>store.gpt)
  console.log(gptResult,"hello");
  if(!gptResult||!tmdbResult)return
  return (
    <div className=" mt-5  relative z-20 bg-black bg-opacity-70 text-white">
      {
       gptResult&&gptResult.map((result,index)=>{
   
      return(
        <CardsList title={result} nowPaylingList={tmdbResult[index]}/>
      )
    
      
       })
      }
    </div>
  )
}
export default GptMovieSuggestion