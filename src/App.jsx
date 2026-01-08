import NavBar from "./navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Profile from "./profile";
import Body from "./body";


function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path = "/" element ={<Body/>}>
           <Route path = "/login" element ={<Login/>}/>
           <Route path ="/profile" element ={<Profile/>} />
          </Route>
         </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
