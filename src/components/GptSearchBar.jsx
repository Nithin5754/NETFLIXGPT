import { useRef } from "react";
import { lang } from "../utils/langConstant"
import {  useSelector } from "react-redux";
import { openai } from "../utils/gptconfig";
import { options } from "../utils/constant";
import { useEffect } from "react";
import { gptSearchMovies } from "../utils/gptSlice";
import { useDispatch } from "react-redux";




const GptSearchBar = () => {
const getLang=useSelector((store)=>store.config.lang)
const searchRef=useRef(null)
const dispatch=useDispatch()

const handleSearchGPT=async ()=>{
  const gptQuery="Act as a Movie Recommedation system and suggest some movies for the query :"+searchRef.current.value+".Only give me 5 movies,comma seperated like the example : Don,fast,lucifer,jilla,CID Moosa";

 const chatResult= await openai.chat.completions.create({
  messages: [{ role: 'user', content: gptQuery }],
  model: 'gpt-3.5-turbo',
});

console.log(chatResult?.choices?.[0]?.message?.content);
let gptResult=chatResult?.choices?.[0]?.message?.content.split(',')
console.log(gptResult);
   
let resultPromise=gptResult.map((gpt)=>fetchData(gpt))
let result=await Promise.all(resultPromise)
if(result){
  console.log(result);
  dispatch(gptSearchMovies({gptResult:gptResult,tmdbResult:result}))
}



  
}




const fetchData=async(query)=>{
  const response =await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,options) ;
  const data=await response.json()

  return data.results
  
}



  return (
    <div className="pt-[10%] flex justify-center relative z-20">
      <form onSubmit={(e)=>e.preventDefault()}  className=" bg-black w-1/2 grid grid-cols-12 p-3 rounded-md ">
        <input ref={searchRef} type="text" className=" border px-4 py-2 col-span-9" placeholder={lang[getLang].searchPlaceHolder} />
        <button onClick={handleSearchGPT} className="px-4 py-2 bg-blue-800 text-white  col-span-3">{lang[getLang].searchBtn}</button>
      </form>
    </div>
  )
}
export default GptSearchBar