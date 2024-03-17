/* eslint-disable no-unused-vars */
import { useState,useEffect } from 'react'
import { Progress } from "@material-tailwind/react";
import soundFile from '../assets/whistle_referee.mp3' // Import the sound file
import { Input } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import Navbar from './Home2Navbar';
import Fotter from './Fotter';
import gif1 from '../assets/goal-levitating-during-meditation-ahqaz1p74isjjpna.gif'
function Activity2() {
  const [inputMinutes, setInputMinutes] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [strokeColor, setStrokeColor] = useState('#0088cc'); // Initial color

  const handleChange = (e) => {
    setInputMinutes(parseInt(e.target.value, 10)); // Parse the input value as an integer
  };
  
  // const storet
 
  // ...
  
  useEffect(() => {
    if (timerOn) {
      const timer = setTimeout(() => {
        if (timeLeft > 0) {
          setTimeLeft(prevTime => prevTime - 1);
          // Adjust the stroke color based on time remaining
          if (timeLeft <= (inputMinutes * 60) / 2) {
            setStrokeColor('#f5a623'); // Change color halfway through the timer
          }
        } else {
          setTimerOn(false);
          const audio = new Audio(soundFile); // Create a new Audio object
          audio.play(); // Play the sound
        }
      }, 1000);
  
      return () => clearTimeout(timer);
    }
  }, [timerOn, timeLeft, inputMinutes]);
  const startTimer = () => {
    if (timeLeft === 0) {
      setTimeLeft(inputMinutes * 60); // Convert minutes to seconds only if timeLeft is 0
    }
    setStrokeColor('#0088cc'); // Reset stroke color
    setTimerOn(true);
  };

  const pauseTimer = () => {
    setTimerOn(false);
  };

  const resetTimer = () => {
    setTimeLeft(0);
    setStrokeColor('#0088cc'); // Reset stroke color
    setTimerOn(false);
  };


  return (
   <>



    <Navbar></Navbar>



{/* <div className=" bg-[url('https://img.freepik.com/premium-vector/person-lotus-pose-seated-by-serene-lake-vector-illustration_660230-49.jpg?w=1380')] bg-cover  bg-opacity-35  h-[100vh] ">
   <div className=' <div className="h-14 bg-gradient-to-b  "></div> h-[100vh] w-full'>
   <div className=' <div className="h-14 bg-gradient-to-b  "></div> h-[100vh] w-full'>
   <div className=' <div className="h-14 bg-gradient-to-b  "></div> h-[100vh] w-full'>
   <div className=' <div className="h-14 bg-white bg-opacity-60  "></div> h-[100vh] w-full'>
    <div>
  <div className='h-[50%] relative -top-20 md:w-[40%] md:h-full'>
    <img className=' opacity-45 w-full' src={gif1} alt="loading..." /> */}
  {/* </div>
  <Progress value={(timeLeft / (inputMinutes * 60)) * 100} />;

  <div>
<div className="relative  w-full -top-20 ">
    <div className=''>
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 absolute rotate-45 -translate-x-1/2 left-1/2 bottom-0.5 -mb-3 transform  text-white text-opacity-60 fill-current" stroke="currentColor" viewBox="0 0 24 24" >
            <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
        </svg>
    <div className="absolute flex gap-7 flex-col align-middle items-center justify-center w-full h-[50vh] p-3 text-gray-600 -translate-x-1/2 bg-white rounded-lg shadow-lg bg-opacity-60  left-1/2 dark:shadow-none shadow-gray-200">
        <p className="text-3xl text-black ">Name of exercise</p>
        <div>
        <div className="countdown text-3xl text-center">{`${Math.floor(timeLeft / 60)}:${('0' + (timeLeft % 60)).slice(-2)}`}</div> */}
      
        {/* <Input  value={inputMinutes} onChange={handleChange} type='number' size="lg" label="Timing" /> */}
        {/* </div> */}
    {/* <button type="button" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
  Hover me
</button> */}
       {/* <div className="flex gap-4"> */}
      
    
      
        
    
     

      {/* {!timerOn ? (
       <IconButton onClick={startTimer}>
       <i className="fa-solid fa-play"></i>
       </IconButton>
      ) : (
        <IconButton variant="" onClick={pauseTimer}>
        <i className="fa-solid fa-pause"></i>
        </IconButton>
      )}
       <IconButton variant="outlined" onClick={resetTimer}>
      <i className="fa-solid fa-stop"></i>
      </IconButton> */}

      {/* <div className="progress-bar">
        <div className="progress" style={{ strokeDashoffset: `${((inputMinutes * 60 - timeLeft) / (inputMinutes * 60)) * 283}%`, stroke: strokeColor }}>
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
          </svg>
        </div>
        <div className="countdown">{`${Math.floor(timeLeft / 60)}:${('0' + (timeLeft % 60)).slice(-2)}`}</div>
      </div> */}
    {/* </div>
    
    </div>
    </div>
</div>
 
  </div>
</div>
</div>
</div>
</div>
</div>
   </div> */}

  



   {/* <div className="bg-[url('https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/leg-exercsies-2x1-aw-220329-42d511.gif')] bg-cover bg-opacity-35 h-screen"> */}


   <div className="">
  
  <div className="relative text-center bg-white mt-8 lg:mt-20 pt-4 flex justify-center ">
    <img className="md:w-[20%] w-[35%]" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/7471e64bf36dd74cb4c52b2dec40690b-1605191302/5%20workout%20gif/create-workout-exercise-gif-animation-in-photoshop.gif" alt="loading..." />
  </div>
  <div className="relative w-full ">
    <div className=" flex flex-col gap-7 items-center justify-center w-full  p-3 0 text-gray-600 bg-white rounded-lg shadow-lg bg-opacity-60 dark:shadow-none shadow-gray-200">
      <p className="text-3xl text-black">5 Step Pushup Streatch</p>
      <div>
        <div className="text-5xl text-center">{`${Math.floor(timeLeft / 60)}:${('0' + (timeLeft % 60)).slice(-2)}`}</div>
        <input value={inputMinutes} onChange={handleChange} type="number" className="w-full mt-2 p-2 bg-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-500" placeholder="Enter Minutes ..." />
      </div>
      <div className="flex gap-4">
        {!timerOn ? (
          <button onClick={startTimer} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
            <i className="fa-solid fa-play"></i>
          </button>
        ) : (
          <button onClick={pauseTimer} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
            <i className="fa-solid fa-pause"></i>
          </button>
        )}
        <button onClick={resetTimer} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none">
          <i className="fa-solid fa-stop"></i>
        </button>
      </div>
    </div>
  </div>
</div>


   {/* <div className='w-full h-screen flex justify-center items-center'>
    <div className=' border w-[60%] border-gray-600 flex justify-center text-center items-center'>
        <div>
            <img className='lg:h-64' src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/leg-exercsies-2x1-aw-220329-42d511.gif" alt="" />
            <div>
                <input value={inputMinutes} onChange={handleChange} type='number' size="lg" label="Timing" className='border-none outline-none h-8 pl-4 bg-purple-100' type="text" />
            </div>
            
      {!timerOn ? (
       <IconButton onClick={startTimer}>
       <i className="fa-solid fa-play"></i>
       </IconButton>
      ) : (
        <IconButton variant="" onClick={pauseTimer}>
        <i className="fa-solid fa-pause"></i>
        </IconButton>
      )}
       <IconButton variant="outlined" onClick={resetTimer}>
      <i className="fa-solid fa-stop"></i>
      </IconButton> */}

      {/* <div className="progress-bar">
        <div className="progress" style={{ strokeDashoffset: `${((inputMinutes * 60 - timeLeft) / (inputMinutes * 60)) * 283}%`, stroke: strokeColor }}>
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
          </svg>
        </div>
        <div className="countdown">{`${Math.floor(timeLeft / 60)}:${('0' + (timeLeft % 60)).slice(-2)}`}</div>
      </div> */}
      {/* <Progress value={(timeLeft / (inputMinutes * 60)) * 100} />;
        </div>
        

    </div>
   </div> */}


  
   <Fotter></Fotter>
   
   </>
  )
}

export default Activity2
