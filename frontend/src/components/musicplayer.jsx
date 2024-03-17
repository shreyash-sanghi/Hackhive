import React, { useState } from 'react';
import astralmedia from '../assets/astralmeditation.mp3';
import Navbar from './Home2Navbar';
import Fotter from './Fotter';
import { useNavigate, useParams } from 'react-router-dom';
// MusicPlayer component code here...

const Music = () => {
  const {id} = useParams();
 const navigate = useNavigate();
  return (
   
<>
<Navbar></Navbar>
<div className="  text-white px-10 py-2 mt-20">
	<div style={{ backgroundImage: "url('https://wp.frog.co/wp-content/uploads/2020/06/HBO_designmind_2.gif')", backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundSize: "cover" }} className="container astral-bg grid grid-cols-12 mx-auto  dark:bg-gray-800">
  <div className="bg-no-repeat bg-cover col-span-full  lg:col-span-4" ></div>
		<div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
			
			<h1 className="text-3xl font-semibold text-white">Theta Dreams</h1>
			<p className="flex-1 pt-2 text-sm md:text-lg"> Theta Dreams for deep relaxation, aiding in meditation and inducing a tranquil state conducive to inner exploration and spiritual growth.</p>
			<a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-400">
				<span className='text-sm'>Read more ...</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</a>
			<div className="flex items-center justify-between pt-2">
				<div className="flex space-x-2">
					<img className='w-5 h-5 rounded-full' src="https://purepng.com/public/uploads/large/purepng.com-music-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596085b6osz.png" alt="" />
					<span className="self-center text-sm">By Mediguide-Theta Dreams</span>
				</div>
				<img onClick={()=>navigate(`/sound/1/${id}`)} className='w-10 h-10 rounded-full' src="https://img.lovepik.com/free-png/20220127/lovepik-black-gum-play-button-png-image_401907159_wh1200.png" alt="" />
			</div>
		</div>
	</div>
</div>
<div className="  text-white px-10 py-2">
	<div style={{ backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/51da2258658887.5a046f93dd282.gif')", backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundSize: "cover" }} className="container astral-bg grid grid-cols-12 mx-auto  dark:bg-gray-800">
  <div className="bg-no-repeat bg-cover col-span-full  lg:col-span-4" ></div>
		<div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
			
			<h1 className="text-3xl font-semibold text-white">Alpha Harmony</h1>
			<p className="flex-1 pt-2 text-sm md:text-lg">Alpha Harmony promoting focus and mental clarity, enhancing productivity and creativity by synchronizing brainwaves to the alpha frequency range.</p>
			<a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-400">
				<span className='text-sm'>Read more ...</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</a>
			<div className="flex items-center justify-between pt-2">
				<div className="flex space-x-2">
					<img className='w-5 h-5 rounded-full' src="https://purepng.com/public/uploads/large/purepng.com-music-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596085b6osz.png" alt="" />
					<span className="self-center text-sm">By Mediguide-Alpha Harmony</span>
				</div>
				<img onClick={()=>navigate(`/sound/2/${id}`)} className='w-10 h-10 rounded-full' src="https://img.lovepik.com/free-png/20220127/lovepik-black-gum-play-button-png-image_401907159_wh1200.png" alt="" />
			</div>
		</div>
	</div>
</div>
<div className="  text-white px-10 py-2">
	<div style={{ backgroundImage: "url('https://specialkpopfanfiction.files.wordpress.com/2011/12/blood-spots-impressions-black.gif?w=597')", backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundSize: "cover" }} className="container astral-bg grid grid-cols-12 mx-auto  dark:bg-gray-800">
  <div className="bg-no-repeat bg-cover col-span-full  lg:col-span-4" ></div>
		<div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
			
			<h1 className="text-3xl font-semibold text-white">Delta Serenity</h1>
			<p className="flex-1 pt-2 text-sm md:text-lg"> Delta Serenity designed to facilitate deep sleep and rejuvenation by entraining brainwaves to the delta frequency, promoting restorative rest and relaxation.</p>
			<a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-400">
				<span className='text-sm'>Read more ...</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</a>
			<div className="flex items-center justify-between pt-2">
				<div className="flex space-x-2">
					<img className='w-5 h-5 rounded-full' src="https://purepng.com/public/uploads/large/purepng.com-music-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596085b6osz.png" alt="" />
					<span className="self-center text-sm">By Mediguide-Delta Serenity</span>
				</div>
				<img onClick={()=>navigate(`/sound/3/${id}`)} className='w-10 h-10 rounded-full' src="https://img.lovepik.com/free-png/20220127/lovepik-black-gum-play-button-png-image_401907159_wh1200.png" alt="" />
			</div>
		</div>
	</div>
</div>
<div className="  text-white px-10 py-2">
	<div style={{ backgroundImage: "url('https://i.gifer.com/ORxr.gif')", backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundSize: "cover" }} className="container astral-bg grid grid-cols-12 mx-auto  dark:bg-gray-800">
  <div className="bg-no-repeat bg-cover col-span-full  lg:col-span-4" ></div>
		<div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
			
			<h1 className="text-3xl font-semibold text-white">Gamma Flow</h1>
			<p className="flex-1 pt-2 text-sm md:text-lg"> Stimulating cognitive function and creativity by entraining brainwaves to the gamma frequency range, enhancing mental acuity and problem-solving abilities.</p>
			<a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-400">
				<span className='text-sm'>Read more ...</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</a>
			<div className="flex items-center justify-between pt-2">
				<div className="flex space-x-2">
					<img className='w-5 h-5 rounded-full' src="https://purepng.com/public/uploads/large/purepng.com-music-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596085b6osz.png" alt="" />
					<span className="self-center text-sm">By Mediguide-Gamma Flow</span>
				</div>
				<img onClick={()=>navigate(`/sound/4/${id}`)} className='w-10 h-10 rounded-full' src="https://img.lovepik.com/free-png/20220127/lovepik-black-gum-play-button-png-image_401907159_wh1200.png" alt="" />
			</div>
		</div>
	</div>
</div>
<div className="  text-white px-10 py-2">
	<div style={{ backgroundImage: "url('https://wp.frog.co/wp-content/uploads/2020/06/thumbnail_.gif')", backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundSize: "cover" }} className="container astral-bg grid grid-cols-12 mx-auto  dark:bg-gray-800">
  <div className="bg-no-repeat bg-cover col-span-full  lg:col-span-4" ></div>
		<div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
			
			<h1 className="text-3xl font-semibold text-white">Beta Balance</h1>
			<p className="flex-1 pt-2 text-sm md:text-lg">Beta Balance aiding in stress relief and anxiety reduction by synchronizing brainwaves to the beta frequency, promoting a sense of calm and emotional balance.</p>
			<a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-400">
				<span className='text-sm'>Read more ...</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</a>
			<div className="flex items-center justify-between pt-2">
				<div className="flex space-x-2">
					<img className='w-5 h-5 rounded-full' src="https://purepng.com/public/uploads/large/purepng.com-music-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596085b6osz.png" alt="" />
					<span className="self-center text-sm">By Mediguide-Beta Balance</span>
				</div>
				<img onClick={()=>navigate(`/sound/5/${id}`)} className='w-10 h-10 rounded-full' src="https://img.lovepik.com/free-png/20220127/lovepik-black-gum-play-button-png-image_401907159_wh1200.png" alt="" />
			</div>
		</div>
	</div>
</div>
<div className="  text-white px-10 py-2">
	<div style={{ backgroundImage: "url('https://wp.frog.co/wp-content/uploads/2020/06/HBO_designmind_2.gif')", backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundSize: "cover" }} className="container astral-bg grid grid-cols-12 mx-auto  dark:bg-gray-800">
  <div className="bg-no-repeat bg-cover col-span-full  lg:col-span-4" ></div>
		<div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
			
			<h1 className="text-3xl font-semibold text-white">Oceanic Tranquility</h1>
			<p className="flex-1 pt-2 text-sm md:text-lg">Binaural beats inducing a state of deep relaxation and inner peace, mimicking the soothing sounds of the ocean to calm the mind and reduce stress.</p>
			<a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-400">
				<span className='text-sm'>Read more ...</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</a>
			<div className="flex items-center justify-between pt-2">
				<div className="flex space-x-2">
					<img className='w-5 h-5 rounded-full' src="https://purepng.com/public/uploads/large/purepng.com-music-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596085b6osz.png" alt="" />
					<span className="self-center text-sm">By Mediguide-Oceanic Tranquility</span>
				</div>
				<img onClick={()=>navigate(`/sound/6/${id}`)} className='w-10 h-10 rounded-full' src="https://img.lovepik.com/free-png/20220127/lovepik-black-gum-play-button-png-image_401907159_wh1200.png" alt="" />
			</div>
		</div>
	</div>
</div>
<Fotter></Fotter></>
  );
};

export default Music;
