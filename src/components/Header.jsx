import { FaUserCircle ,FaHome} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { clickOpenGpt } from '../utils/gptSlice';
import { useDispatch } from 'react-redux';
import { changeLang } from '../utils/appConfigSlice';
import { lang } from '../utils/langConstant';
import { language } from '../utils/constant';



const Header = () => {
  const dispatch=useDispatch()
  const user=useSelector((store)=>store.user)
  const gptOpen=useSelector((store)=>store.gpt.isOpen)
  const langText=useSelector((store)=>store.config.lang)

const handleLogout=()=>{

  signOut(auth).then(() => {}).catch((error) => {
   
  });
}

const handleOpen=()=>{

  dispatch(clickOpenGpt())
}

const handleChangeLang=(e)=>{
  console.log(e.target.value);
  dispatch(changeLang(e.target.value))
}

  return (
<div className="absolute z-50 w-screen pt-6  bg-gradient-to-br from-black p-2 flex justify-between px-10">
<div className="w-[100px] ">
<img className="w-full h-full " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
    </div>
{ user&& <div className='flex my-auto items-center gap-4 text-xl'>
     {
      gptOpen&&(
        <select onChange={handleChangeLang}>
      {
        language.map((lang)=>{
          return(
            <option key={lang.identifiers} value={lang.identifiers}>{lang.name}</option>
          )
        })
      }
       </select> 
      )
     }
    <h1 className='text-white'><FaUserCircle/> </h1>
    <button className='text-white text-sm bg-purple-500 py-2 px-1 font-bold rounded-md hover:bg-purple-800' onClick={handleOpen}  >{gptOpen?(<FaHome/>):( lang[langText].GPT_SEARCH)}</button>
    <button onClick={handleLogout} className='text-sm bg-red-800 rounded-md text-white p-1 text-bold'>sign-out</button>

  </div>}
</div>
  )
}
export default Header