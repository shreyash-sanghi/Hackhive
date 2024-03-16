import React,{useState,useEffect,useRef} from 'react'
import './home.css'
import circleimg from '../assets/img/circle-img.svg'
import ellipse from '../assets/img/ellipse-img.svg'
import Yoga from '../assets/img/YOGA.gif'
import followyoga1 from '../assets/img/follow-yoga-1.png'
import followyoga2 from '../assets/img/follow-yoga-2.png'
import followyoga3 from '../assets/img/follow-yoga-3.png'
import followyoga4 from '../assets/img/follow-yoga-4.png'
import healthfitness from '../assets/img/health-fitness.png'
import homeyoga from '../assets/img/home-yoga.png'
import listyoga from '../assets/img/list-yoga.png'
import routineyoga1 from '../assets/img/routine-yoga-1.png'
import routineyoga2 from '../assets/img/routine-yoga-2.png'
import starimg from '../assets/img/star-img.svg'
import star2img from '../assets/img/star-2-img.svg'
import music from '../assets/img/music.png'
import goal from '../assets/img/goal2.gif'
import Video from './Video'
import emailjs from '@emailjs/browser';
import HomeNavbar from './HomeNavbar'
import Fotter from './Fotter'
import { Link } from 'react-router-dom'

const Home = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [iniEmail,finEmail] = useState("");
    const form = useRef();
    const toggleMenu = () => {
        setShowMenu(prevState => !prevState);
    };

    const toggleDarkMode = () => {
        setDarkMode(prevState => !prevState);
    };
    
    const sendemail = (e)=>{
       e.preventDefault();
       try {
         emailjs.sendForm("service_edl04xe","template_nok8by1", form.current,"fA8kcfAFIvcziEYcA")
         alert("Thanks...")

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
  return (
    <>
   {/* <header class="header" id="header">
      <nav class="nav container2">
         <a href="#" class="nav__logo">Yoga</a>

         <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
 
            <ul class="nav__list">
               <li class="nav__item">
                  <a href="#home" class="nav__link active-link">Home</a>
               </li>

               <li class="nav__item">
                  <a href="#health" class="nav__link">Health</a>
               </li>

               <li class="nav__item">
                  <a href="#routine" class="nav__link">Routine</a>
               </li>

               <li class="nav__item">
                  <a href="#follow" class="nav__link">Follow</a>
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
   </header> */}
   <HomeNavbar/>
  
   <main class="main">
     
      <section class="home section" id="home">
         <div class="home__container container2 grid">
            <div class="home__data">
               <h1 class="home__title">
                  Choose Your
                  <div class="home__title-box">
                     Best <div>Yoga</div>
                  </div>
                  Teacher

                  <img src={starimg} alt="home image"/>
               </h1>

               <p class="home__description">
                  Calm your mind and body with the best
                  yoga teachers available, relax your day
                  and stay positive.

                  <img src={circleimg} alt="home image"/>
               </p>

               <Link to={"/signup"}  class="button">
                  Get Started Free <i class="ri-arrow-right-line"></i>
               </Link>

               <div class="home__box">
                  <div>
                     <h3>300+</h3>
                     <span>Yoga Class</span>
                  </div>

                  <div>
                     <h3>40+</h3>
                     <span>Participants</span>
                  </div>
               </div>
            </div>

            <img src="https://assets-v2.lottiefiles.com/a/77d60888-1170-11ee-bda2-eb18eac93d30/VnTjL8fHwr.gif" alt="home image" className="home__img h-100"/>
         </div>
      </section>

     
      <section class="list section">
         <div class="list__container container2 grid">
            <div class="list__content">
               <h1 class="list__number">#01</h1>

               <div class="list__blob">
                  <img src={music} alt="list image"/>
               </div>
            </div>

            <div class="list__data">
               <p class="list__description">
                  Get a list of specific binural beats to calm your mind and get calm & relax. 
                  Binural beats are scientifically proven.   

                  <img src={star2img} alt="list image"/>
               </p>

               <a href="#" class="button list__button">
                  Next <i class="ri-arrow-right-line"></i>

                  <img src={ellipse} alt="button image"/>
               </a>
            </div>
         </div>
      </section>

      
      <section class="health section" id="health">
         <div class="health__container container2 grid">
            <div class="health__data">
               <h2 class="section__title">
                  Bring Happiness To
                  Good Health!
               </h2>

               <p class="health__description">
                  If you take care of your good health, take
                  care of your mentality and lead a healthy
                  life with positive thoughts every day.
               </p>

               <a href="#" class="button">
                  Let’s Start <i class="ri-arrow-right-line"></i>
               </a>
            </div>

            <div class="health__image">
               <img className="health__img rounded-xl" src="https://vegan.org/wp-content/uploads/2019/10/Meditation-Stock.jpg" alt="health image"/>

               <div class="health__rate">
                  <div class="health__icon">
                     <i class="ri-heart-3-fill"></i>
                  </div>

                  <div class="health__group">
                     <span class="health__title">
                        Heart Rate
                     </span>

                     <span class="health__number">
                        168 bpm
                     </span>
                  </div>
               </div>

               <div class="health__course">
                  <div class="health__group">
                     <span class="health__number">
                        500+
                     </span>

                     <span class="health__title">
                        Free Courses
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </section>

 
      <section class="routine section" id="routine">
         <div class="routine__container container2 grid">
            <div class="routine__data">
               <h2 class="section__title">
                  Anytime, Any Place,
                  Any Workout
               </h2>

               <p class="routine__description">
                  Take your routine at any time of your day,
                  with the new videos and with the teachers
                  who will guide you.
               </p>

               <a href="#" class="button">
                  Get Started Free <i class="ri-arrow-right-line"></i>
               </a>
            </div>

            <div class="routine__images">
               <img src={routineyoga1} alt="routine image" class="routine__img-1"/>
               <img src={routineyoga2} alt="routine image" class="routine__img-2"/>

               <div class="routine__box-1">
                  <i class="ri-play-circle-fill routine__icon"></i>
                  <span class="routine__title">High Quality Video</span>
               </div>

               <div class="routine__box-2">
                  <i class="ri-run-fill routine__icon"></i>
                  <span class="routine__title">Professional Trainer</span>
               </div>
            </div>
         </div>
      </section>

      

      

      <section class="follow section" id="follow">
         <div class="follow__container container2 grid">
            <div class="follow__content-1">
               <div class="follow__data">
                  <h2 class="section__title follow__title">
                     Follow Us On
                     Instagram
                     <div>#YOGA</div>
                  </h2>

                  <a href="#" class="button follow__button">
                     Follow <i class="ri-arrow-right-line"></i>
                  </a>
               </div>

               <img src={followyoga1} alt="follow image" class="follow__img-1"/>
               <img src={followyoga2} alt="follow image" class="follow__img-2"/>
            </div>

            <div class="follow__content-2">
               <img src={followyoga3} alt="follow image" class="follow__img-3"/>
               <img src={followyoga4} alt="follow image" class="follow__img-4"/>
            </div>
         </div>
      </section>
    
      
      <section class="join section">
         <div class="join__container container2 grid">
            <div class="join__content">
               <div>
                  <h2 class="join__title">
                     Join our newsletter
                  </h2>

                  <p class="join__description">
                     Subscribe to our newsletter to be aware of
                     many things on discounts, gifts, training
                     and much more. Just enter your email.
                  </p>
               </div>

               <form action="" onSubmit={sendemail} ref={form} class="join__form">
                  <input type="email" name='Email' placeholder="For latest update send mail" class="join__input"/>

                  <input type='submit'  value={`Subscribe`} class="button text-black join__button"/>
                
               </form>
            </div>
         </div>
      </section>
   </main>


 


   <a href="#" class="scrollup" id="scroll-up">
      <i class="ri-arrow-up-line"></i>
   </a>
<Fotter/>
    </>
  )
}

export default Home