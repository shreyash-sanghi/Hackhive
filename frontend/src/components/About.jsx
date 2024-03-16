import React from 'react'
// import logo from '../assets/logo.png'
import Razor from './Razor'
// import Footer from './Footer'

const About = () => {
  return (
      <>
      <div className='h-[86vh] w-full content-div flex flex-col justify-center items-center'>
      <h1 className='text-center text-[4vw] mb-10'>About <span className='span-feedback text-[4vw]'> Us</span></h1>
      <div className='flex justify-around items-center gap-12'>
          <img src="https://storage.needpix.com/rsynced_images/red-2327058_1280.jpg" className='video-img h-[60vh] w-[40vw] rounded-3xl' alt="" />
          <div className='flex-col content-box w-1/2'>
          {/* <img className='vibeslogo w-[12vw]' src={logo} alt="" /> */}
              <p>Vibes Verse is a Vibefull Instagram community dedicated to creating high-quality media and content. We pride ourselves on providing enriching and informative material to our followers on a daily basis, covering a wide range of topics such as education, news, and entertainment. Our team at Vibes Verse is passionate about producing engaging and meaningful content that resonates with our target audience. Currently, we are working on building our community. Our mission is to spread knowledge and entertainment to our valued audience, and we strive to achieve this goal with every piece of content we create</p>
              <Razor></Razor>
          </div>
      </div> 
      </div>
      {/* <Footer></Footer> */}
      </>
  )
}

export default About