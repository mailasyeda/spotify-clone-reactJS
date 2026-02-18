import React, { useState, useRef, useEffect } from "react";
import "./index.css";

const songs = [
  {
    id: 1,
    title: "No one noticed",
    artist: " song byEd Sheeran",
    img: "src/images/1.jpg",
    src: "Audio/1.mp3",
    category: "Popular songs",
  },
  {
    id: 2,
    title: "Shivers",
    artist: "Ed Sheeran",
    img: "src/images/2.png",
    src: "Audio/2.mp3",
    category: "popular",
  },
  {
    id: 3,
    title: "Runaway",
    artist: "Aurora",
    img: "src/images/3.png",
    src: "Audio/3.flac",
    category: "Popular songs",
  },
  {
    id: 4,
    title: "Daylight",
    artist: "David Kushner",
    img: "src/images/4.png",
    src: "Audio/4.mp3",
    category: "Popular songs",
  },
  {
    id: 5,
    title: "Die With A Smile",
    artist: "Bruno Mars, Lady Gaga",
    img: "src/images/5.png",
    src: "Audio/5.mp3",
    category: "Popular songs",
  },
  {
    id: 6,
    title: "Mystical Magical",
    artist: "Benson Boone",
    img: "src/images/6.png",
    src: "Audio/6.mp3",
    category: "Popular songs",
  },
  {
    id: 7,
    title: "A Thousand Years",
    artist: "Christina Perri",
    img: "src/Images/7.png",
    src: "Audio/7.flac",
    category: "popular",
  },
  {
    id: 8,
    title: "I Don't Care",
    artist: "Ed Sheeran & Justin Bieber",
    img: "src/Images/8.png",
    src: "Audio/8.flac",
    category: "popular",
  },
  {
    id: 9,
    title: "Beautiful Things",
    artist: "Benson Boone",
    img: "src/Images/9.png",
    src: "Audio/9.flac",
    category: "popular",
  },
  {
    id: 10,
    title: "The Rest",
    artist: "Dean Lewis, Sasha Alex Sloan",
    img: "src/Images/10.png",
    src: "Audio/10.flac",
    category: "recommended",
  },
  {
    id: 11,
    title: "More Than You Know",
    artist: "Axwell / Ingrosso",
    img: "src/Images/11.png",
    src: "Audio/11.flac",
    category: "recommended",
  },
  {
    id: 12,
    title: "All That We Could Have Been",
    artist: "Alex Sampson",
    img: "src/Images/12.png",
    src: "Audio/12.flac",
    category: "recommended",
  },
  {
    id: 13,
    title: "Hurts So Good",
    artist: "Astrid S",
    img: "src/Images/13.png",
    src: "Audio/13.flac",
    category: "recommended",
  },
  {
    id: 14,
    title: "On My Way",
    artist: "Alan Walker",
    img: "src/Images/14.png",
    src: "Audio/14.flac",
    category: "recommended",
  },
  {
    id: 15,
    title: "I Do",
    artist: "Astrid S",
    img: "src/Images/15.png",
    src: "Audio/15.flac",
    category: "recommended",
  },
  {
    id: 16,
    title: "Control",
    artist: "Alan Walker",
    img: "src/Images/16.png",
    src: "Audio/16.flac",
    category: "recommended",
  },
  {
    id: 17,
    title: "Ordinary",
    artist: "Alex Warren",
    img: "src/Images/17.png",
    src: "Audio/17.flac",
    category: "recommended",
  },
  ];

function App() {
  const [currentSong, setCurrentSong] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [songOnShuffle, setSongOnShuffle] = useState(false);
  const [songOnRepeat, setSongOnRepeat] = useState(false);

  const audioRef = useRef(new Audio(songs[0].src));

  useEffect(() => {
    const audio = audioRef.current;
    const updateTime = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };
    const handleEnded = () => {
      if (songOnRepeat) {
        audio.currentTime = 0;
        audio.play();
      } else {
        playNextSong();
      }
    };
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [songOnRepeat, currentSong, songOnShuffle]);

  const playPause = () => {
    const audio = audioRef.current;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  const playSong = (id) => {
    setCurrentSong(id);
    const audio = audioRef.current;
    audio.src = songs[id - 1].src;
    audio.currentTime = 0;
    audio.play();
    setIsPlaying(true);
  };

  const getRandomSong = () => Math.floor(Math.random() * songs.length) + 1;

  const playNextSong = () => {
    const next = songOnShuffle
      ? getRandomSong()
      : currentSong >= songs.length
        ? 1
        : currentSong + 1;
    playSong(next);
  };

  const playPrevSong = () => {
    const prev = songOnShuffle
      ? getRandomSong()
      : currentSong <= 1
        ? songs.length
        : currentSong - 1;
    playSong(prev);
  };

  const onProgressChange = (e) => {
    const value = e.target.value;
    setProgress(value);
    audioRef.current.currentTime = (value * audioRef.current.duration) / 100;
  };

  const toggleShuffle = () => {
    setSongOnShuffle((s) => !s);
    if (!songOnShuffle) setSongOnRepeat(false);
  };
  const toggleRepeat = () => {
    setSongOnRepeat((r) => !r);
    if (!songOnRepeat) setSongOnShuffle(false);
  };

  const current = songs[currentSong - 1];


  return (
    <>
  
      <div>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
        integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"></link>
         <nav>
        <div className="left-half">
            <div className="logo"><i className="fa-brands fa-spotify"></i></div>
            <div className="home-icon"><i className="fa-solid fa-house"></i></div>
            <div className="search-bar">
                <div className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></div>
                <input type="text" className="input-box" placeholder="What do you want to play?"/>
                <div className="browse"><i className="fa-solid fa-folder-open"></i></div>
            </div>
        </div>
        <div className="right-half">
            <div className="right-half-p1">
                <p className="nav-text">Premium</p>
                <p className="nav-text">Support</p>
                <p className="nav-text">Download</p>
            </div>
            <div className="right-half-p2">
                <div className="nav-text"><i className="fa-regular fa-circle-down"></i> Install App</div>
                <div className="nav-text">Sign up</div>
                <button className="login-btn">Log in</button>
            </div>
        </div>
    </nav>


    <div className="main">
        <div className="main-left-part">
            <div className="library">
                <p>Your Library</p>
                <div>+</div>
            </div>

            <div className="box-container">
                <div className="box">
                    <h4>Create your first playlist</h4>
                    <p>It's easy we'll help you</p>
                    <button>Create playlist</button>
                </div>
                <div className="box">
                    <div className="box">
                        <h4>Let's find some podcast to follow</h4>
                        <p>We'll keep you updated on new updates</p>
                        <button>Browse podcasts</button>
                    </div>
                </div>
            </div>
        </div>



        <div className="main-right-part">
            <div className="music-section">
                <h2>Popular songs</h2>
                <div className="songs">
                   {songs
                .filter((s) => s.category === "Popular songs")
                .map((song) => (
                  <div key={song.id} className="music-card">
                    <img src={song.img} alt="" />
                    <div className="music-play-btn">
                      <i
                        onClick={() => playSong(song.id)}
                        className={`playMusic fa-solid ${
                          isPlaying && currentSong === song.id
                            ? "fa-circle-pause"
                            : "fa-circle-play"
                        }`}
                      />
                    </div>
                    <div className="img-title">{song.title}</div>
                    <div className="img-description">{song.artist}</div>
                  </div>
                ))}
            </div>
          </div>
          </div>

            <div className="music-section">
                <h2>Recomended songs</h2>
                <div className="songs">
                    <div className="music-card">
                        <img src="images/7.jpg"/>
                        <div className="music-play-btn"><i id="7" className="playMusic fa-solid fa-circle-play"></i></div>
                        <div className="img-title">Star Boy</div>
                        <div className="img-description">Song by the Weekend</div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="music-section">
                <h2>Recently played</h2>
                <div className="songs">
                    <div className="music-card">
                        <img src="images/13.jpg"/>
                        <div className="music-play-btn"><i id="13" className="playMusic fa-solid fa-circle-play"></i></div>
                        <div className="img-title">aint' like us</div>
                        <div className="img-description">Song by The Kendrick Lamar</div>
                </div>
            </div>
        </div>
    </div>



    <div className="player-bar">
        <div className="now-bar">
            <img src="Images/1.jpg" alt=""/>
            <div>
                <div className="img-title-info">Title 1</div>
                <div className="img-des-info">this is description for title 1 song</div>
            </div>
        </div>
        <div className="music-controller">
            <div className="player">
                <div><i id="shuffle" className="player-btns fa-solid fa-shuffle"></i></div>
                <div><i id="backward" className="player-btns fa-solid fa-backward-step"></i></div>
                <div><i id="play" className="player-btns fa-solid fa-circle-play"></i></div>
                <div><i id="forward" className="player-btns fa-solid fa-forward-step"></i></div>
                <div><i id="repeat" className="player-btns fa-solid fa-repeat"></i></div>
            </div>

            <div>
                <input type="range" id="progressBar" value="0"/>
            </div>
        </div>
        <div></div>
    </div>
    </>
  )
}

export default App
