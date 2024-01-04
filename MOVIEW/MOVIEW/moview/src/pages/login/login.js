import React, {useState} from "react";
import axios from "axios";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [ user, setUser] = useState({
        email:"",
        password:""
    });
const navigate=useNavigate();

    const handleChange = e => {
        //console.log(e.target);
        const { name, value } = e.target;
        //console.log(name,value);
        setUser({
            ...user,
            [name]:value
        })
    }

    const login = () => {
        axios.post("http://localhost:8080/userapi/login", user)
        .then(res => {
            alert(res.data)
            if(res.data!=="User does not exist please register"&&res.data!=="Incorrect password")
            {
                //localStorage.setItem("l", "Smith");
                localStorage.setItem("userName", res.data);
                localStorage.setItem("loggedin",true)
                navigate('/',);
                console.log(res.data);
                
            }
            //setLoginUser(res.data.user)
        })
    }

    return (
        <div className="login">
            {console.log(user)}
            <h1 className="log">Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            {/* <div className="button" onClick={login}>Login</div> */}
            <div className="button" onClick={login}>Login</div>
            <div className="or">Don't have an account?</div>
            <Link to="/register"><div className="button">Register</div></Link>
        </div>
    );
}

export default Login;