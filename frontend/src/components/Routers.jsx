import React from "react";
import { Routes,Route } from "react-router-dom";
import SignUp from "./Signup";
import Login from "./Login";
import Meditation from "./Meditation";
import Meditationform from "./Medatationform";
import AboutDoctor from "./AboutDoctor";
import Product from "./Product";
import Home from "./Home";
import Home2 from "./Home2";

const Routers = ()=>{
    return(
        <>
                <Routes>
                <Route exact path="/" Component={Home}></Route> 
                <Route exact path="/signup" Component={SignUp}></Route> 
                <Route exact path="/login" Component={Login}></Route> 
                <Route exact path="/product" Component={Product}></Route> 
                <Route exact path="/meditation/:id" Component={Home2}></Route> 
                <Route exact path="/meditationform/:id" Component={Meditationform}></Route> 
                <Route exact path="/aboutdoctor/:id" Component={AboutDoctor}></Route> 
                </Routes>
        </>
    )
}

export default Routers;