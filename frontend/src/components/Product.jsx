import React from "react";
import mat from "../assets/mat.webp"
import Razor from "./Razor";
import Home2Navbar from "./Home2Navbar";
import { Link, useParams } from "react-router-dom";
import Fotter from "./Fotter";

const Product  = ()=>{
    const {id} = useParams();
    const data = [
        {
        id:1,
        image:"https://bombaytrooper.com/wp-content/uploads/2021/04/YogaMat-Ads-8-scaled-800x800.jpg",
        name:"Meditation Mat",
        rating:4.5,
        price:800,
        desc: "Grounding Comfort, Wherever You Meditate. Softness Beneath, Serenity Within",
    },
        {
        id:2,
        image:"https://m.media-amazon.com/images/I/61pmSVY95dS._AC_UF894,1000_QL80_.jpg",
        name:"Cushion For Yoga",
        rating:4,
        price:200,
        desc: "Made with cotton and natural materials, soft and comfortable",
    },
        {
        id:3,
        image:"https://images.unsplash.com/photo-1570823635306-250abb06d4b3?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
        name:"Candles for meditation",
        rating:4.8,
        price:300,
        desc: "Made with cotton and natural materials, soft and comfortable",
    },
]
    return(
        <>
        <Home2Navbar/>
        <section class="text-gray-800 mt-20 md:mt-24 body-font">
  <div class="container px-5 pb-10 lg:px-16 mx-auto">
    <div class="flex flex-wrap w-full ">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our latest products</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quasi minima explicabo aliquam! Omnis animi odio hic, voluptates cupiditate et veniam nisi saepe, amet rem id adipisci temporibus voluptatum modi?</p>
    </div>
    
  </div>
</section>
      
<section class=" flex items-center">
  <div class="container px-5  mx-auto">
    <div class="flex flex-wrap -m-4">
      
{data.map((info) => {
    return (
        <>
        <div class="p-4 md:w-1/3 lg:px-10">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={info.image} alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY : Wellness Products</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{info.name}</h1>
            <p class="leading-relaxed mb-3">{info.desc}</p>
            <div class="flex items-center flex-wrap ">
              
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none mb-2 text-sm">
                {info.rating} ⭐
              </span>
            </div>
            <div class="flex items-center justify-between">
                      <span class="text-3xl font-bold text-gray-900 dark:text-black">₹{info.price}</span>
                      <Razor price={info.price} />
                    </div>
            </div>
            </div>
        </div>
        </>
    )
})}
          
      </div>
      
      
     
  </div>
</section>


        <Fotter></Fotter>
        </>
    )
}

export default Product;