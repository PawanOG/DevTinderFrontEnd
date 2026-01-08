import { Outlet } from "react-router-dom";
import NavBar from "./navbar";
import Footer from "./footer";

const body = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default body;