
import { useState } from "react"
import { Header } from "./index"
const Login = () => {
  const [isSignIn,setSignIn]=useState(true)


const handleSubmit=()=>{
  setSignIn(!isSignIn)
}

  return (
    <div >
<Header/>
<div className="absolute w-full h-full  flex items-center justify-center">
<img className="w-full h-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg" alt="" />
</div>


<div className="absolute left-0 right-0 m-auto my-64 p-6 bg-gray-900 bg-opacity-50 p-8 rounded-lg shadow-xl w-96 ">
    <h1 className="text-white text-3xl mb-4 mt-10 ">{isSignIn?'Sign in':'Sign Up'}</h1>
    <form className="space-y-4 my-12">
 {
  isSignIn&&(
    <div className="flex gap-2">
    <input className="block w-full p-2 border rounded bg-gray-700 text-white" placeholder="First Name" />
    <input className="block w-full p-2 border rounded bg-gray-700 text-white" placeholder="Last Name" />
    </div>
  )
 }
      <input className="block w-full p-2 border rounded bg-gray-700 text-white" placeholder="Email Address" />
      <input className="block w-full p-2 border rounded bg-gray-700 text-white" placeholder="Password" type="password" />
      <button className="block w-full p-2 bg-red-600 text-white rounded hover:bg-red-900">{isSignIn?'Sign in':'Sign Up'}</button>
    </form>
    <div className="text-white fex flex-col ">
      {
        !isSignIn&&(<>
        <h3 className="text-center mb-4">Forgot password?</h3>
        <input type="checkbox" name="" id="" /><span>Remember me</span>
        </>
        )
      }
      <h5 onClick={handleSubmit} className="my-4 cursor-pointer">{isSignIn?'Already a user':'New User'} <span className="font-bold">{isSignIn?'Sign in':'Sign Up'}</span></h5>
      <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
    </div>
</div>


    </div>
  )
}
export default Login





