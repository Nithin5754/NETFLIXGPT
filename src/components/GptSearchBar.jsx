import { lang } from "../utils/langConstant"
import {  useSelector } from "react-redux";




const GptSearchBar = () => {
const getLang=useSelector((store)=>store.config.lang)
  return (
    <div className="pt-[10%] flex justify-center relative z-20">
      <form  className=" bg-black w-1/2 grid grid-cols-12 p-3 rounded-md ">
        <input type="text" className=" border px-4 py-2 col-span-9" placeholder={lang[getLang].searchPlaceHolder} />
        <button className="px-4 py-2 bg-blue-800 text-white  col-span-3">{lang[getLang].searchBtn}</button>
      </form>
    </div>
  )
}
export default GptSearchBar