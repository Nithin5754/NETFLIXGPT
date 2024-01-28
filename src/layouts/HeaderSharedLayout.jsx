import { Outlet} from "react-router-dom"
import { useNavigate } from 'react-router-dom';


import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUsers, removeUsers } from "../utils/userSlice";

import { Header } from "../components/index";
import { useEffect } from "react";

const HeaderSharedLayout = () => {


  const dispatch=useDispatch()
const navigate=useNavigate()

useEffect(()=>{
 const unSubscribe= onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName} = user;
      console.log(user);
      dispatch(addUsers({uid:uid,email:email,displayName:displayName}))
      navigate('/browser')

    } else {
      dispatch(removeUsers())
      navigate('/')

    }
  });
  return ()=>unSubscribe()
},[])

  return (
    <>
<Header/>
<Outlet/>
    </>
  )
}
export default HeaderSharedLayout