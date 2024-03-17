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
import musicplayer from "./musicplayer"
import Activity1 from "./Activity1";
import Activity2 from "./Activity2";
import Activity3 from "./Activity3";
import Activity4 from "./Activity4";
import App from "./App";
const Routers = ()=>{
    return(
        <>
                <Routes>
                <Route exact path="/" Component={Home}></Route> 
                <Route exact path="/signup" Component={SignUp}></Route> 
                <Route exact path="/login" Component={Login}></Route> 
                <Route exact path="/product/:id" Component={Product}></Route> 
                <Route exact path="/meditation/:id" Component={Home2}></Route> 
                <Route exact path="/meditationform/:id" Component={Meditationform}></Route> 
                <Route exact path="/aboutdoctor/:id" Component={AboutDoctor}></Route> 
                <Route exact path="/activity/:id" Component={Activity3}></Route> 
                <Route exact path="/activity1/:id" Component={Activity1}></Route> 
                <Route exact path="/activity2/:id" Component={Activity2}></Route> 
                <Route exact path="/activity3/:id" Component={Activity3}></Route> 
                <Route exact path="/activity4/:id" Component={Activity4}></Route> 
                <Route exact path="/sound/:pid/:id" Component={App}></Route> 
                <Route exact path="/musicplayer/:id" Component={musicplayer}></Route> 
                </Routes>
        </>
    )
}

export default Routers;