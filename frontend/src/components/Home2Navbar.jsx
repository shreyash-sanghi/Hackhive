import {React ,useState,useEffect}from "react";
import './home.css';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = ()=>{
    const navigate = useNavigate();
    const {id} = useParams();
    const [showMenu, setShowMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [iniEmail,finEmail] = useState("");
    const toggleMenu = () => {
        setShowMenu(prevState => !prevState);
    };

    const toggleDarkMode = () => {
        setDarkMode(prevState => !prevState);
    };
    
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

    const sendemail = (e)=>{
       e.preventDefault();
       try {
         emailjs.sendForm("service_edl04xe","template_nok8by1", form.current,"fA8kcfAFIvcziEYcA")
       } catch (error) {
         toast(error)
       }
    }
    
    useEffect(() => {
        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');

        const handleToggleMenu = () => {
            setShowMenu(prevState => !prevState);
        };

        const handleCloseMenu = () => {
            setShowMenu(false);
        };

        navToggle.addEventListener('click', handleToggleMenu);
        navClose.addEventListener('click', handleCloseMenu);

        return () => {
            navToggle.removeEventListener('click', handleToggleMenu);
            navClose.removeEventListener('click', handleCloseMenu);
        };
    }, []);

    useEffect(() => {
        const themeButton = document.getElementById('theme-button');
        themeButton.addEventListener('click', toggleDarkMode);
        return () => {
            themeButton.removeEventListener('click', toggleDarkMode);
        };
    }, []);
   
    useEffect(() => {
        const body = document.body;
        if (darkMode) {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
    }, [darkMode]);

    const activity = (e)=>{
        const value = e.target.value;
        if(value === "Activities1"){
            navigate(`/activity1/${id}`)
        }
        else if(value === "Activities2"){
            navigate(`/activity2/${id}`)
        }
        else if(value === "Activities3"){
            navigate(`/activity3/${id}`)
        }
       else if(value === "Activities4"){
            navigate(`/activity4/${id}`)
        }
        else{
            navigate(`/activity/${id}`)
        }
    }
    return(
        <>
   <header class="header" id="header">
      <nav class="nav container2">
         <a href="#" class="nav__logo">MediGuide</a>

         <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
 
            <ul class="nav__list">
            <li class="nav__item">
                  <a  class="nav__link active-link"><Link to={`/meditation/${id}`}>Home</Link></a>
               </li>

               {/* <li class="nav__item">
                  <a  class=""><Link to={`/activity/${id}`} >Activities</Link></a>
               </li> */}
               <li class="nav__item">
                                <select
                                            onChange={activity}
                                            name="CoreSkill"
                                            
                                            className="nav__link bg-none bg-transparent"
                                        >
                                            <option className=" "  value="Activities" >
                                            Activities
                                            </option>
                                            <option className=" " value="Activities1">
                                            Activities1
                                            </option>
                                            <option className=" " value="Activities2">
                                            Activities2
                                            </option>
                                            <option className=" " value="Activities3">
                                            Activities3
                                            </option>
                                            <option className=" " value="Activities4">
                                            Activities4
                                            </option>
                           
                                        </select>
               </li>
     

               <li class="nav__item">
                  <a href="#health" class="nav__link"><Link to={`/musicplayer/${id}`} >Binural Beats</Link></a>
               </li>

               <li class="nav__item">
                  <button onClick={getuserdata} href="#routine" class="nav__link">Find Experts</button>
               </li>

               <li class="nav__item">
                  <Link to={`/product/${id}`} href="#follow" class="nav__link">Product</Link>
               </li>
            </ul>


            <div class="nav__close" id="nav-close">
               <i class="ri-close-line"></i>
            </div>
         </div>
         

         <div class="nav__buttons">
        
      
            <i class="ri-moon-line change-theme" id="theme-button"></i>

          
            <div class="nav__toggle" id="nav-toggle">
               <i class="ri-apps-2-line"></i>
            </div>
         </div>
         
      </nav>
   </header>
        </>
    )
}
export default Navbar;