

import { Cards } from "./index";
const CardsList = ({title,nowPaylingList}) => {

 return (

   <div >
     <h1 className="font-extrabold text-2xl px-8 py-4 ">{title}</h1>
<div className="flex overflow-x-scroll  no-scrollbar">
<div className="flex  gap-4">
   {
    nowPaylingList?.map((now)=>{
      const {poster_path,original_title}=now
      return(
        <Cards poster_path={poster_path} original_title={original_title}/>
      )
    })
   }
    </div>
</div>
   </div>

  )
}
export default CardsList