import React from "react"
//import Login from "../../pages/login/login"
//import logo from "./135330869_padded_logo.png"
import "./Header.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate=useNavigate();
    const loggedInUser=localStorage.getItem("userName");
    console.log('loggedInUser'+loggedInUser)
    loginUsername=localStorage.getItem('userName');
    function logout()
    {
        localStorage.setItem("userName","");
        navigate("/");
    }
    function login()
    {
        navigate("/login");
        
    }
    var loginUsername;
    var   loginStatus=false;


    return (

        <div className="header">
            <div className="headerLeft">
                {/* <Link to="/"><img className="header__icon" src={logo} alt="logo" /></Link> */}
                <Link to="/" style={{textDecoration: "none"}}><h1 className="header__icon">MoView</h1></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
            <div className="headerRight">

            {loginStatus ? <span>{loggedInUser}</span>: <Link to="/login"><span onClick={login}>Login</span></Link>}         
          

                {
                   loggedInUser && loggedInUser ?  <Link to="/"><span onClick={logout}>Logout</span></Link>  :<Link to="/register"><span>Register</span></Link>                   

                } 
               

               
            </div>

        </div>
    )
}

export default Header