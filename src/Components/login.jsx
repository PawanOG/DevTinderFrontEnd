import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";



const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("C@gmail.com");
    const [password,setPassword] = useState("Forgotten@123");
    const dispatch = useDispatch();
    
    const handleLogin = async () =>{
        try{
            const res = await axios.post(BASE_URL + "login", {
                email,
                password
            },{withCredentials: true});
            console.log(res);
            dispatch(addUser(res.data));
            return navigate("/");

            }catch(err){
            console.log(err);
        }
    }
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="card bg-base-100 image-full w-96 shadow-sm">
                <figure>
                    <img
                        src="https://s.yimg.com/fz/api/res/1.2/WdRPtixjwjTBwLIV442NPA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00MTI7cHhvZmY9NTA7cHlvZmY9MTAwO3E9ODA7c3M9MTt3PTM4OA--/https://i.pinimg.com/736x/5b/03/96/5b03962cf9b1c97636e4dca12c68d8ff.jpg"
                        alt="Shoes" />
                </figure>
                <div className="card-body m-y-10">
                    <h2 className="card-title">Login</h2>
                    <fieldset className="fieldset mx-10">
                        <legend className="fieldset-legend">Email ID</legend>
                        <input type="text" 
                        value = {email}
                        className="input"
                        onChange={(e) => setEmail(e.target.value)}
                        />

                    </fieldset>
                    <fieldset className="fieldset mx-10">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="text"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="input" />

                    </fieldset>
                    <div className="card-actions flex justify-center my-5">
                        <button className="btn btn-primary " onClick={handleLogin}>Login</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login;