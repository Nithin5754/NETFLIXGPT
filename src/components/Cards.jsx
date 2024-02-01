import { imageUrl } from "../utils/constant"


const Cards = ({original_title,poster_path}) => {
  return (
    <div className="flex flex-col relative">
      <div className="w-[200px]">
      <img className="w-full h-full object-contain" src={imageUrl+poster_path} alt="" />

      </div>
      <div className=" absolute top-36 text-center  ">
         <h4 className="font-bold ">{original_title}</h4>
      </div>
    

    </div>
  )
}
export default Cards