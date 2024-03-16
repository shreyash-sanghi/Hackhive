import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";



const Meditation = ()=>{
    const {id} = useParams();
    const navigate  = useNavigate();
  const token = localStorage.getItem("token");

  const getuserdata = async()=>{
    try {
        const result = await axios.get(`https://mediguidebackend-chi.vercel.app/userDetail/${id}`);
        const response  = result.data.response;
        if(response===null||response===undefined){
            navigate(`/meditationform/${id}`)
        }
        else{
            navigate(`/aboutdoctor/${id}`)
        }
    } catch (error) {
        alert(error);
        console.log(error);
    }
  }

    const getdata  = async()=>{
        try {
            const response = await axios.get("https://mediguidebackend-chi.vercel.app/meditation")
        } catch (error) {
            alert(error)
            console.log(error);
            navigate("/");
        }
    }
    useEffect(()=>{
        localStorage.setItem('token', token);
        axios.defaults.headers.common["Authorization"] = token;
        getdata();
    },[])
    return(
        <>
        <h1>Page2</h1>
        <button onClick={getuserdata} className="border-2 border-black p-5 ">Doctor</button>
        </>
    )
}

export default Meditation;