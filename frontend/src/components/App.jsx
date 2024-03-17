
  import { useParams } from 'react-router-dom';
import a from '../assets/a.mp3';
  import b from "../assets/b.mp3"
  import c from "../assets/c.mp3"
  import d from "../assets/d.mp3"
  import e from "../assets/e.mp3"
  import f from "../assets/f.mp3"
  import g from "../assets/g.mp3"
  // import { songsdata } from './Player/audios';
  import Player from './player/Player';
  import { useRef, useState, useEffect } from 'react';

  const App = () => {
    const {id,pid} = useParams();
  const  songsdata = [
    {
      "id":1,
      "title": "Deep Sleep Hypnosis",
      "url": a,
      "bannerImg": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fe-learning-banner&psig=AOvVaw2i1eUzoeF-cYN1yWK4KHHT&ust=1710709299114000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMC65fTW-YQDFQAAAAAdAAAAABAI",
    },
      { 
        "id":2,
          "title": "Deep-sleep",
          "url": b,
      },
      {
        "id":3,
          "title": "Memory Sharpner",
          "url": c,
      },
      {
        "id":4,
          "title": "Relaxing-Era",
          "url": d,
      },
      {  "id":5,
          "title": "Recharge-your-Brain",
          "url": e,
      },
      {    "id":6,
          "title": "Asrtral Dreams",
          "url": f,
      },
      {    "id":7,
          "title": "Subconscious Elixir",
          "url": g,
      }
    ]
    const [songs, setSongs] = useState(songsdata);
    const [isplaying, setisplaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(songsdata[0]); // Start with the first song

    const audioElem = useRef();

    useEffect(() => {
      if (isplaying) {
        audioElem.current.play();
      } else {
        audioElem.current.pause();
      }
    }, [isplaying, currentSong]);

    const onPlaying = () => {
      const duration = audioElem.current.duration;
      const ct = audioElem.current.currentTime;
      // Assuming 'duration' is not changing frequently, you might only set it once when the song changes
      if (!currentSong.duration) {
        setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration, "duration": duration });
      } else {
        setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration });
      }
    };

    return (
      <>
      <div className='w-full text-black h-scren my-bg'>
      <div className="App" >
        <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} className='' />
        <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
      </div>
      </div>
       
      </>
     
    );
  }

  export default App;