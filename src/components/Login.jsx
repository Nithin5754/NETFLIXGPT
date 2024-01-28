
import { useRef, useState } from "react"
import { Header } from "./index"
import { validation } from "../utils/validate"

import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/userSlice";
const Login = () => {
  const dispatch=useDispatch()
  const [isSignIn,setSignIn]=useState(true)
  const [isError,setError]=useState('')

  
const navigate=useNavigate()
const email=useRef(null)
const password=useRef(null)
const name=useRef(null)
console.log(name,"name");

const handleChange=()=>{
  setSignIn(!isSignIn)
}
const handleSubmit=()=>{
  const isValidate=validation(email.current.value,password.current.value)
  setError(isValidate)
  if(isValidate)return;
  if(!isSignIn){
    createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    updateProfile(user, {
      displayName:name.current.value
    }).then(() => {
      const {uid,email,displayName} = auth.currentUser;
      console.log(user);
      dispatch(addUsers({uid:uid,email:email,displayName:displayName}))
      navigate('/browser')
      
    }).catch((error) => {
      setError(error)
    });
  

   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    setError(errorCode+"-"+errorMessage)
  });
  }else{
    signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate('/browser')
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode+"-"+errorMessage)
  });
  }

}

  return (
    <div >
<Header/>
<div className="absolute w-full h-full  flex items-center justify-center">
<img className="w-full h-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg" alt="" />
</div>


<div className="absolute left-0 right-0 m-auto my-16 p-6 bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-xl w-96 ">
    <h1 className="text-white text-3xl mb-4 mt-10 ">{isSignIn?'Sign in':'Sign Up'}</h1>
    <form className="space-y-4 my-12" onSubmit={(e)=>e.preventDefault()}>
 {
  !isSignIn&&(
    <div className="flex gap-2">
    <input ref={name} className="block w-full p-2 border rounded bg-gray-700 text-white" placeholder="Full Name" />
  
    </div>
  )
  }
       <input ref={email} className="block w-full p-2 border rounded bg-gray-700 text-white" placeholder="Email Address" />
      <input ref={password} className="block w-full p-2 border rounded bg-gray-700 text-white" placeholder="Password" type="password" />
      <p className="text-red-800 py-3 font-3xl font-extrabold">{isError}</p>
      <button onClick={handleSubmit} className="block w-full p-2 bg-red-600 text-white rounded hover:bg-red-900">{isSignIn?'Sign in':'Sign Up'}</button>
    </form>
    <div className="text-white fex flex-col ">
      {
        isSignIn&&(<>
        <h3 className="text-center mb-4">Forgot password?</h3>
        <input type="checkbox" name="" id="" /><span>Remember me</span>
        </>
        )
      }
      <h5 onClick={handleChange} className="my-4 cursor-pointer">{!isSignIn?'Already a user':'New User'} <span className="font-bold">{ !isSignIn?'Sign in':'Sign Up'}</span></h5>
    
    </div>
</div>


    </div>
  )
}
export default Login





