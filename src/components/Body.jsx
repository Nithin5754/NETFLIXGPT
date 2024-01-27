import { Login,Browser } from "./index";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";


const Body = () => {
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