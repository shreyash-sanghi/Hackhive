import {React,useEffect,useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const Medatatioform = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id);
    const [ini_auth,fin_auth] = useState({
        FName:"",
        LName:"",
        Email:"",
        Number:""
    })
    const [ini_authSave,fin_authSave]= useState("");
    const [initial,final] = useState({
        Age:"",
        Bio:"",
    })
    
    const setdata = (event)=>{
        const {name,value} = event.target;
        final((info)=>{
            return{
            ...info,
            [name] : value
            }
        })
    }

      
    const savedata = async(event)=>{
        event.preventDefault();
        try {
        const {Age,Bio,} = initial;
        const Email = ini_authSave.Email;
        const FName = ini_authSave.FName;
        const LName = ini_authSave.LName;
        const Number = ini_authSave.Number;
        console.log(FName);
             const response = await axios.post(`http://localhost:2345/userDetailForm/${id}`,{
                Age,Bio,Email,FName,LName,Number
               })
                alert("Successfully Save ...")
                navigate(`/aboutdoctor/${id}`)
    } catch (error) {
            alert(error);
            console.log(error);
    }
    }
    
    const getuserprofile = async()=>{
      try {
          let userdata = await axios.get(`http://localhost:2345/user_auth_data/${id}`);
          userdata = userdata.data.userdata;
         fin_auth((info)=>{
          info.FName = userdata.FName;
          info.LName = userdata.LName;
          info.Email = userdata.Email;
          info.Number = userdata.Number;
         })
         fin_authSave(ini_auth);
      } catch (error) {
          console.log(error);
          alert(error);
      }
    }



    useEffect(()=>{
        getuserprofile();
     },[])
  return (
    <>
<div className='profile-div bg-center bg-no-repeat bg-cover w-full h-[100vh] pt-4'>
<section class="max-w-6xl p-6 mx-auto rounded-md shadow-md backdrop-blur-lg">
    <h1 class="text-3xl font-bold  capitalize dark:">Please complete your profile ✌️</h1>
    <form>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class=" dark:text-gray-200" for="username">Full Name</label>
                <input id="username" type="text" value={ini_authSave.FName+" "+ini_authSave.LName} class="block  w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600  dark:focus:border-red-600  "/>
            </div>

            <div>
                <label class=" dark:text-gray-200" for="emailAddress">Email Address</label>
                <input id="emailAddress" type="email" value={ini_authSave.Email} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border border-gray-300 rounded-md bg-transparent dark:text-gray-300 dark:border-gray-600  dark:focus:border-red-600 "/>
            </div>

            <div>
                <label class=" dark:text-gray-200" for="password">Phone Number</label>
                <input id="password" type="number" value={ini_authSave.Number} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border border-gray-300 rounded-md bg-transparent dark:text-gray-300 dark:border-gray-600  dark:focus:border-red-600 "/>
            </div> 
            <div>
                <label class=" dark:text-gray-200">Age(in year)</label>
                <input onChange={setdata} name="Age" id="date" type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border border-gray-300 rounded-md bg-transparent dark:text-gray-300 dark:border-gray-600  dark:focus:border-red-600 "/>
            </div>
            <div>
                <label  class=" dark:text-gray-200" for="passwordConfirmation">Additonal Bio</label>
                <textarea onChange={setdata} name="Bio" onResize={false} id="textarea" type="textarea" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border border-gray-300 rounded-md bg-transparent dark:text-gray-300 dark:border-gray-600  dark:focus:border-red-600 "></textarea>
            </div>
            {/* <div>
                <label class="block text-sm font-medium ">
                Upload Your Profile Photo
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 " stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-transparent rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span class="text-[15px]">Upload a file</span>
                      <input onChange={(ev) => { finalfile(ev.target.files[0]) }} id="file-upload" name="file-upload" type="file" class="sr-only"/>
                    </label>
                    <p class="pl-1 ">or drag and drop</p>
                  </div>
                  <p class="text-xs ">
                    PNG, JPG, GIF up to 2MB
                  </p>
                </div>
              </div>
            </div> */}
        </div>

        <div class="flex justify-end mt-6">
            <button onClick={savedata} class="px-6 py-2 leading-5  transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>
</div>


 
    </>
  )
}

export default Medatatioform;