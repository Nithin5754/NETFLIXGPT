import { Login,Browser } from "./index";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import HeaderSharedLayout from "../layouts/headerSharedLayout.jsx";


const Body = () => {
 
  return (
   <Router>
      <Routes>
            <Route path="/" element={<HeaderSharedLayout/>}>
                <Route index element={<Login/>}/>
                <Route path="browser" element={<Browser/>}/>
            </Route>
      </Routes>
   </Router>
  )
}
export default Body