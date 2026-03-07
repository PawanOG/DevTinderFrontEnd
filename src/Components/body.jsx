import { Outlet } from "react-router-dom";
import NavBar from "./navbar";
import Footer from "./footer";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { use, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((store) => store.user);

    const fetchUser = async () => {
        if (userData) return;

        try {
            const res = await axios.get(BASE_URL + "profile", { withCredentials: true });
            dispatch(addUser(res.data));
        } catch (err) {
            navigate("/login");
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div>
            {userData && <NavBar />}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Body;