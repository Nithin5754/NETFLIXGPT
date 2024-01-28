import { Login,Browser } from "./index";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUsers, removeUsers } from "../utils/userSlice";


const Body = () => {
  const dispatch=useDispatch()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName} = user;
      console.log(user);
      dispatch(addUsers({uid:uid,email:email,displayName:displayName}))
    } else {
     dispatch(removeUsers())
    }
  });
  return (
   <Router>
      <Routes>
            <Route path="/">
                <Route index element={<Login/>}/>
                <Route path="browser" element={<Browser/>}/>
            </Route>
      </Routes>
   </Router>
  )
}
export default Body