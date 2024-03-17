import React, { useState } from "react";
// import "./AboutDoctor.css"
import Sidebar from "./Sidebar";
import Navbar from "./Home2Navbar";
import Fotter from "./Fotter";
import m1 from "../assets/img/m1.jpg";
import m2 from "../assets/img/m2.jpeg";
import m3 from "../assets/img/m3.avif";
import m4 from "../assets/img/m4.webp";
import m5 from "../assets/img/m5.jpeg";
import m6 from "../assets/img/m6.jpg";
import m7 from "../assets/img/m7.webp";
import m8 from "../assets/img/m8.jpg";
import f1 from "../assets/img/f1.jpeg";
import f2 from "../assets/img/f2.jpeg";
import f3 from "../assets/img/f3.avif";
import f4 from "../assets/img/f4.jpg";
import f5 from "../assets/img/f5.avif";
import f6 from "../assets/img/f6.jpg";
import f7 from "../assets/img/f7.avif";
import f8 from "../assets/img/f8.jpg";


const AboutDoctor = () => {
    const [inisearch, finsearch] = useState("");
    const indianDoctors = [
        {
            id: 1,
            name: "Dr. Rajesh Sharma",
            experience: 12,
            speciality: "Psychiatrist",
            age: 45,
            consultationCharges: 1000,
            city: "Delhi",
            averageRating: 4.5,
            img: m1,
        },
        {
            id: 2,
            name: "Dr. Priya Patel",
            experience: 10,
            speciality: "Pediatrician",
            age: 38,
            consultationCharges: 800,
            city: "Mumbai",
            averageRating: 4.7,
img:f1,
        },
        {
            id: 3,
            name: "Dr. Anjali Gupta",
            experience: 15,
            speciality: "Nutritionist",
            age: 42,
            consultationCharges: 1200,
            city: "Kolkata",
            averageRating: 4.9,
            img:f2,
        },
        {
            id: 4,
            name: "Dr. Sanjay Kumar",
            experience: 18,
            speciality: "Cardiologist",
            age: 50,
            consultationCharges: 1500,
            city: "Chennai",
            averageRating: 4.6,
            img: m2,
            img: "data:image/jpeg;base64,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",
        },
        {
            id: 5,
            name: "Dr. Pooja Reddy",
            experience: 10,
            speciality: "Dermatologist",
            age: 35,
            consultationCharges: 900,
            city: "Bangalore",
            averageRating: 4.8,
            img: f3,
        },
        {
            id: 6,
            name: "Dr. Manoj Singh",
            experience: 20,
            speciality: "Orthopedic Surgeon",
            age: 55,
            consultationCharges: 1800,
            city: "Hyderabad",
            averageRating: 4.7,
            img:m3,
        },
        {
            id: 7,
            name: "Dr. Shalini Mishra",
            experience: 13,
            speciality: "Neurologist",
            age: 40,
            consultationCharges: 1100,
            city: "Ahmedabad",
            averageRating: 4.5,
            img:f4,
        },
        {
            id: 8,
            name: "Dr. Deepak Verma",
            experience: 14,
            speciality: "ENT Specialist",
            age: 45,
            consultationCharges: 1000,
            city: "Pune",
            averageRating: 4.6,
            img:m4,
        },
        {
            id: 9,
            name: "Dr. Meera Joshi",
            experience: 11,
            speciality: "Ophthalmologist",
            age: 40,
            consultationCharges: 1200,
            city: "Jaipur",
            averageRating: 4.9,
            img:f5,
        },
        {
            id: 10,
            name: "Dr. Vikram Singhania",
            experience: 17,
            speciality: "Endocrinologist",
            age: 48,
            consultationCharges: 1300,
            city: "Lucknow",
            averageRating: 4.8,
            img:m5,
        },
        {
            id: 11,
            name: "Dr. Nandini Desai",
            experience: 16,
            speciality: "Psychiatrist",
            age: 42,
            consultationCharges: 1100,
            city: "Indore",
            averageRating: 4.7,
            img:f6,
        },
        {
            id: 12,
            name: "Dr. Ajay Khanna",
            experience: 19,
            speciality: "General Physician",
            age: 52,
            consultationCharges: 900,
            city: "Varanasi",
            averageRating: 4.6,
            img:m6,
        },
        
        {
            id: 14,
            name: "Dr. Rohan Gupta",
            experience: 15,
            speciality: "Nutritionist",
            age: 42,
            consultationCharges: 1200,
            city: "Patna",
            averageRating: 4.7,
            img:m7,
        },
        {
            id: 15,
            name: "Dr. Divya Sharma",
            experience: 18,
            speciality: "Cardiologist",
            age: 50,
            consultationCharges: 1500,
            city: "Nagpur",
            averageRating: 4.8,
            img:f7,
        },
        {
            id: 16,
            name: "Dr. Arjun Singh",
            experience: 11,
            speciality: "Pediatrician",
            age: 36,
            consultationCharges: 900,
            city: "Kochi",
            averageRating: 4.6,
            img: m8,
        },
        {
            id: 17,
            name: "Dr. Kavita Reddy",
            experience: 14,
            speciality: "Orthopedic Surgeon",
            age: 45,
            consultationCharges: 1800,
            city: "Amritsar",
            averageRating: 4.9,
            img:f8,
        }]
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState([     {
        id: 3,
        name: "Dr. Anjali Gupta",
        experience: 15,
        speciality: "Nutritionist",
        age: 42,
        consultationCharges: 1200,
        city: "Kolkata",
        averageRating: 4.9,
        img:f2,
    },
    {
        id: 4,
        name: "Dr. Sanjay Kumar",
        experience: 18,
        speciality: "Cardiologist",
        age: 50,
        consultationCharges: 1500,
        city: "Chennai",
        averageRating: 4.6,
        img: m2,
        img: "data:image/jpeg;base64,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",
    },]);
    // const [inicharge, fincharge] = useState([]);
    const [inifilter, finfilter] = useState([])


    const setsearch = (e) => {
        try {
            const value = e.target.value;
            setQuery(value);
            if(value !== ""){
            const filtered = indianDoctors.filter((item) => {
                if(value === "AverageRating" ){
                    if(item.consultationCharges<=1500){
                        // setFilteredData((data1) => [])
                        setFilteredData((data1) => [
                            ...data1, item
                        ])
                        console.log(filteredData)
                    }
                }
                if(value === "consultationCharges" ){
                    if(item.consultationCharges<=1000){
                        // setFilteredData((data1) => [])
                        setFilteredData((data1) => [
                            ...data1, item
                        ])
                        console.log(filteredData)
                    }
                }
                if (item.city.toLowerCase() === value.toLowerCase() ) {
                    // setFilteredData((data1) => [])
                    setFilteredData((data) => [
                        ...data, 
                            item
                    ])
                }
            })}
            else{
                 setFilteredData((data1) => [])
            }
            console.log(filteredData)
            finfilter(filteredData)
        } catch (error) {
            console.log(error);
        }
    }

    console.log(query)
    console.log(inifilter)
    return (
        <>
  
            <Navbar></Navbar>
            <div className="flex pt-10 mb-10 w-full mt-4 sm:mt-16 justify-center items-center  ">
                <div className="flex flex-col lg:flex-row md:gap-2  justify-center items-center">
                    <input  onChange={setsearch} className="w-[200px] outline-none border-none px-4 sm:w-[300px] md:[w-400px] lg:w-[500px] h-10" placeholder="Search query here ..." type="text" />
                    <div className="flex gap-x-4 mt-2 lg:mt-0">
                    <button className="bg-gradient-to-r from-blue-500 to-red-600 px-4 py-1 rounded text-white" > Search</button>
                    <select
                                            onChange={setsearch}
                                            name="CoreSkill"
                                            class="px-2 inline-flex items-center py-2 text-sm font-medium text-center text-gray-900  border border-gray-300  hover:bg-gray-200 bg-pink-700 dark:hover:bg-pink-800  dark:text-white dark:border-gray-600 "
                                        >
                                            <option className=" " value="" >
                                                Filter Here
                                            </option>
                                            <option className=" " value="Experience">
                                                Experience
                                            </option>
                                            <option className=" " value="AverageRating">
                                                Average Rating
                                            </option>
                                            <option className=" " value="consultationCharges">
                                                Under 1000 Rs /-
                                            </option>
                                            <option className=" " value="city">
                                                Location
                                            </option>
                                            
                                        </select>
                    </div>
                    
                </div>

            </div>
            <section className="text-gray-600  body-font">
      <div className="container  px-5 pb-10 mx-auto">
        <div className="flex justify-center flex-wrap -m-4">
            {inifilter.length<=0?(<>
                {indianDoctors.map((doctor) => (
            <div key={doctor.id} className="xl:w-1/4  md:w-1/2 p-4">
              <div className="bg-white border border-gray-400 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={doctor.img} alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">MBBS / MD: {doctor.speciality}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{doctor.name}</h2>
                <p className="leading-relaxed text-base">Experience: {doctor.experience} years</p>
                <p className="leading-relaxed text-base">Consultation charges: ₹{doctor.consultationCharges}</p>
                <p className="leading-relaxed text-base">Avg Rating: {doctor.averageRating}</p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-4">Chat Now!</button>
              </div>
            </div>
          ))}
            </>):(<>
          {inifilter.map((doctor) => (
            <div key={doctor.id} className="xl:w-1/4  md:w-1/2 p-4">
              <div className="bg-white border border-gray-400 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={doctor.img} alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">MBBS / MD: {doctor.speciality}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{doctor.name}</h2>
                <p className="leading-relaxed text-base">Experience: {doctor.experience} years</p>
                <p className="leading-relaxed text-base">Consultation charges: ₹{doctor.consultationCharges}</p>
                <p className="leading-relaxed text-base">Avg Rating: {doctor.averageRating}</p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-4">Chat Now!</button>
              </div>
            </div>
          ))}
          </>)}
        </div>
      </div>
    </section>
    <Fotter></Fotter>
        </>
    )
}

export default AboutDoctor;