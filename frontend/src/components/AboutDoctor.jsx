import React, { useState } from "react";
import "./AboutDoctor.css"
import Sidebar from "./Sidebar";


const AboutDoctor = ()=>{
    const [inisearch,finsearch] = useState("");
    const indianDoctors = [
        {
          id: 1,
          name: "Dr. Rajesh Sharma",
          experience: 12,
          speciality: "Psychiatrist",
          age: 45,
          consultationCharges: 1000,
          city: "Delhi",
          averageRating: 4.5
        },
        {
          id: 2,
          name: "Dr. Priya Patel",
          experience: 10,
          speciality: "Pediatrician",
          age: 38,
          consultationCharges: 800,
          city: "Mumbai",
          averageRating: 4.7
        },
        {
          id: 3,
          name: "Dr. Anjali Gupta",
          experience: 15,
          speciality: "Gynecologist",
          age: 42,
          consultationCharges: 1200,
          city: "Kolkata",
          averageRating: 4.9
        },
        {
          id: 4,
          name: "Dr. Sanjay Kumar",
          experience: 18,
          speciality: "Cardiologist",
          age: 50,
          consultationCharges: 1500,
          city: "Chennai",
          averageRating: 4.6
        },
        {
          id: 5,
          name: "Dr. Pooja Reddy",
          experience: 10,
          speciality: "Dermatologist",
          age: 35,
          consultationCharges: 900,
          city: "Bangalore",
          averageRating: 4.8
        },
        {
          id: 6,
          name: "Dr. Manoj Singh",
          experience: 20,
          speciality: "Orthopedic Surgeon",
          age: 55,
          consultationCharges: 1800,
          city: "Hyderabad",
          averageRating: 4.7
        },
        {
          id: 7,
          name: "Dr. Shalini Mishra",
          experience: 13,
          speciality: "Neurologist",
          age: 40,
          consultationCharges: 1100,
          city: "Ahmedabad",
          averageRating: 4.5
        },
        {
          id: 8,
          name: "Dr. Deepak Verma",
          experience: 14,
          speciality: "ENT Specialist",
          age: 45,
          consultationCharges: 1000,
          city: "Pune",
          averageRating: 4.6
        },
        {
          id: 9,
          name: "Dr. Meera Joshi",
          experience: 11,
          speciality: "Ophthalmologist",
          age: 40,
          consultationCharges: 1200,
          city: "Jaipur",
          averageRating: 4.9
        },
        {
          id: 10,
          name: "Dr. Vikram Singhania",
          experience: 17,
          speciality: "Endocrinologist",
          age: 48,
          consultationCharges: 1300,
          city: "Lucknow",
          averageRating: 4.8
        },
        {
          id: 11,
          name: "Dr. Nandini Desai",
          experience: 16,
          speciality: "Psychiatrist",
          age: 42,
          consultationCharges: 1100,
          city: "Indore",
          averageRating: 4.7
        },
        {
          id: 12,
          name: "Dr. Ajay Khanna",
          experience: 19,
          speciality: "General Physician",
          age: 52,
          consultationCharges: 900,
          city: "Varanasi",
          averageRating: 4.6
        },
        {
          id: 13,
          name: "Dr. Ritu Mehra",
          experience: 12,
          speciality: "Dermatologist",
          age: 38,
          consultationCharges: 1000,
          city: "Bhopal",
          averageRating: 4.9
        },
        {
          id: 14,
          name: "Dr. Rohan Gupta",
          experience: 15,
          speciality: "Gynecologist",
          age: 42,
          consultationCharges: 1200,
          city: "Patna",
          averageRating: 4.7
        },
        {
          id: 15,
          name: "Dr. Divya Sharma",
          experience: 18,
          speciality: "Cardiologist",
          age: 50,
          consultationCharges: 1500,
          city: "Nagpur",
          averageRating: 4.8
        },
        {
          id: 16,
          name: "Dr. Arjun Singh",
          experience: 11,
          speciality: "Pediatrician",
          age: 36,
          consultationCharges: 900,
          city: "Kochi",
          averageRating: 4.6
        },
        {
          id: 17,
          name: "Dr. Kavita Reddy",
          experience: 14,
          speciality: "Orthopedic Surgeon",
          age: 45,
          consultationCharges: 1800,
          city: "Amritsar",
          averageRating: 4.9
        }]
      const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]); 
  const [inifilter,finfilter] = useState([])

      const setsearch = (e)=>{
        try {
    const value = e.target.value; 
    setQuery(value);
    console.log(value);
    if(value===""){
        console.log("Hello")
    }
    if(value !==""){
        const filtered = indianDoctors.filter((item) =>{
            if(item.speciality.toLowerCase() === value.toLowerCase()) {
            setFilteredData((data)=>[
            ...data,{
                item
            }
            ])
            }
        })
    }else{
//     const filtered = indianDoctors.filter((item) =>{
//     if(item.speciality.toLowerCase() === value.toLowerCase()) {
//     setFilteredData((data)=>[
//     ...data,{
//         item
//     }
//     ])
//     }
// }
// // item.speciality.toLowerCase().includes(value.toLowerCase())}
// );
}
console.log(filteredData)
finfilter(filteredData)
        } catch (error) {
            console.log(error);
        }
      }
  

      console.log(inifilter)
    return(
        <>
        <div className="flex">
        {/* <Sidebar/> */}
        <div>
            <div className="flex items-center justify-evenly mx-auto">
<div class=" flex items-center justify-center w-full">
  <form>
    <div class="max-w-[100%]">

      <div class="flex mt-5 space-x-6">
        <div class="flex rounded-md overflow-hidden w-full">
          <input type="text" onChange={setsearch} class=" border-2 border-black rounded-r-none" />
          <button class="bg-indigo-600 text-white px-6 text-lg font-semibold py-2 rounded-r-md">Go</button>
        </div>
        <select
              onChange={setsearch}
              name="CoreSkill"
              class=" inline-flex items-center py-2 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300  hover:bg-gray-200    dark:bg-gray-700 dark:hover:bg-gray-600  dark:text-white dark:border-gray-600 "
            >
              <option className="bg-[#111111] " value="" >
             Select
              </option>
              <option className="bg-[#111111] " value=" Psychiatrist">
             Psychiatrist
              </option>
              <option className="bg-[#111111] " value="Pediatrician">
             Pediatrician
              </option>
              <option className="bg-[#111111] " value="Gynecologist">
             Gynecologist
              </option>
              <option className="bg-[#111111] " value=" Cardiologist">
              Cardiologist
              </option>
              <option className="bg-[#111111] " value=" Dermatologist">
              Dermatologist
              </option>
              <option className="bg-[#111111] " value="Neurologist">
             Neurologist
              </option>
              <option className="bg-[#111111]" value="ENT Specialis">
             ENT Specialis
              </option>
              <option className="bg-[#111111]" value="Ophthalmologist">
             Ophthalmologist             </option>
              <option className="bg-[#111111]" value="Endocrinologist ">
            Endocrinologist          </option>
              <option className="bg-[#111111]" value=" General Physician">
             General Physician            </option>
              <option className="bg-[#111111]" value=" Dermatologist ">
             Dermatologist          </option>
              <option className="bg-[#111111]" value=" Gynecologist">
              Gynecologist           </option>
              <option className="bg-[#111111]" value="Cardiologist">
            Cardiologist              </option>
              <option className="bg-[#111111]" value="Pediatrician">
           Pediatrician           </option>
              <option className="bg-[#111111]" value="Orthopedic Surgeon">
              Orthopedic Surgeon        </option>
            </select>
      </div>
    </div>
  </form>
</div>

            </div>
        <div class="flex justify-evenly flex-wrap w-full mt-5">
 

            {indianDoctors.map((info)=>{
                return(<>
  <div class="card mt-5">
  <div class="card__header">
    {/* <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600"/> */}
  </div>
  <div class="card__body">
    <span class="tag tag-blue">{info.speciality}</span>
    <h4>{info.name}</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
  </div>
  <div class="card__footer">
    <div class="user">
      {/* <img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image"/> */}
      <div class="user__info">
        <h5>Experience - {info.experience} Year</h5>
      </div>
    </div>
  </div>
</div>
</>)
            })}

            </div>
</div>
</div>
        </>
    )
}

export default AboutDoctor;