import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Profile from "./profile";
import Body from "./body";
import { Provider } from 'react-redux';
import appStore from "../utils/appStore";

function App() {
  return (
    <>
    <Provider store = {appStore} >
      <BrowserRouter basename="/">
        <Routes>
          <Route path = "/" element ={<Body/>}>
           <Route path = "/login" element ={<Login/>}/>
           <Route path ="/profile" element ={<Profile/>} />
          </Route>
         </Routes>
        </BrowserRouter>
      </Provider>
      </>
  );
}

export default App;
