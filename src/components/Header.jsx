import { FaUserCircle } from 'react-icons/fa';
import {  useDispatch, useSelector } from 'react-redux';
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { removeUsers } from '../utils/userSlice';

const Header = () => {
  const user=useSelector((store)=>store.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  console.log(user);
const handleLogout=()=>{
  console.log("hello");
  signOut(auth).then(() => {
    navigate('/')
  }).catch((error) => {
    console.log(error);
  });
}

  return (
<div className="absolute z-50 w-[100vw] bg-gradient-to-br from-black p-2 flex justify-between">
<div className="w-[100px] ">
<img className="w-full h-full " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
    </div>
{ user&& <div className='flex my-auto items-center gap-4 text-xl'>
    <h1><FaUserCircle/> </h1>
    <button onClick={handleLogout} className='text-sm bg-red-800 rounded-md text-white p-1 text-bold'>sign-out</button>

  </div>}
</div>
  )
}
export default Header