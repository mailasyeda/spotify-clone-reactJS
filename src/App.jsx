import React, { useState, useRef, useEffect } from "react";
import "./index.css";

const songs = [
  {
    id: 1,
    title: "No one noticed",
    artist: "song by The Maria",
    img: "src/images/1.jpg",
    src: "Audio/1.mp3",
    category: "Popular songs",
  },
  {
    id: 2,
    title: "The Night We Met",
    artist: "song by The Lord Huron",
    img: "src/images/2.jpg",
    src: "Audio/2.mp3",
    category: "Popular songs",
  },
  {
    id: 3,
    title: "Sailor",
    artist: "song by The Gigi Perez",
    img: "src/images/3.jpg",
    src: "Audio/3.mp3",
    category: "Popular songs",
  },
  {
    id: 4,
    title: "Heat Waves",
    artist: "song by The Glass Animals",
    img: "src/images/4.jpg",
    src: "Audio/4.mp3",
    category: "Popular songs",
  },
  {
    id: 5,
    title: "Dandelions",
    artist: "song by The Ruth B",
    img: "src/images/5.jpg",
    src: "Audio/5.mp3",
    category: "Popular songs",
  },
  {
    id: 6,
    title: "Lovely",
    artist: "song by The BIllie Eilliesh",
    img: "src/images/6.jpg",
    src: "Audio/6.mp3",
    category: "Recomended songs",
  },
  {
    id: 7,
    title: "Star boy",
    artist: "song by The weekend",
    img: "src/Images/7.jpg",
    src: "Audio/7.mp3",
    category: "Recomended songs",
  },
  {
    id: 8,
    title: "Night Changes",
    artist: "song by The one direction",
    img: "src/Images/8.jpg",
    src: "Audio/8.mp3",
    category: "Recomended songs",
  },
  {
    id: 9,
    title: "Another Love",
    artist: "song by The Tom Odell",
    img: "src/Images/9.jpg",
    src: "Audio/9.mp3",
    category: "Recomended songs",
  },
  {
    id: 10,
    title: "Open Arms",
    artist: "song by The SZA,Travis Scoutt",
    img: "src/Images/10.jpg",
    src: "Audio/10.mp3",
    category: "Recomended songs",
  },
  {
    id: 11,
    title: "Perfect",
    artist: "ong by The ED Sheeran",
    img: "src/Images/11.jpg",
    src: "Audio/11.mp3",
    category: "Recomended songs",
  },
  {
    id: 12,
    title: "Shape of you",
    artist: "song by The ED Sheeran",
    img: "src/Images/12.jpg",
    src: "Audio/12.mp3",
    category: "Recomended songs",
  },
  {
    id: 13,
    title: "not like us",
    artist: "song by The Kendrick Lamar",
    img: "src/Images/13.jpg",
    src: "Audio/13.mp3",
    category: "Recently played",
  },
  {
    id: 14,
    title: "savage",
    artist: "Alan Walker",
    img: "src/Images/14.jpg",
    src: "Audio/14.mp3",
    category: "Recently played",
  },
  {
    id: 15,
    title: "High on you",
    artist: "song by The Jind universe",
    img: "src/Images/15.jpg",
    src: "Audio/15.mp3",
    category: "Recently played",
  },
  {
    id: 16,
    title: "Birds of a feather",
    artist: "song by The Billie Eilliesh",
    img: "src/Images/16.jpg",
    src: "Audio/16.mp3",
    category: "Recently played",
  },
  {
    id: 17,
    title: "KK",
    artist: "song by The Pritam",
    img: "src/Images/17.jpg",
    src: "Audio/17.mp3",
    category: "Recently played",
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

            <div className="music-section">
                <h2>Recomended songs</h2>
                <div className="songs">
                     {songs
                .filter((s) => s.category === "Recomended songs")
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

            <div className="music-section">
                <h2>Recently played</h2>
                <div className="songs">
                   {songs
                .filter((s) => s.category === "Recently played")
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
      </div>

      <div className="player-bar">
        <div className="now-bar">
          <img src={current.img} alt="cover" />
          <div>
            <div className="img-title-info">{current.title}</div>
            <div className="img-des-info">{current.artist}</div>
          </div>
        </div>

        <div className="music-controller">
          <div className="player">
            <i
              id="shuffle"
              onClick={toggleShuffle}
              className={`player-btns fa-solid fa-shuffle ${
                songOnShuffle ? "active" : ""
              }`}
            />
            <i
              id="backward"
              onClick={playPrevSong}
              className="player-btns fa-solid fa-backward-step"
            />
            <i
              id="play"
              onClick={playPause}
              className={`player-btns fa-solid ${
                isPlaying ? "fa-circle-pause" : "fa-circle-play"
              }`}
            />
            <i
              id="forward"
              onClick={playNextSong}
              className="player-btns fa-solid fa-forward-step"
            />
            <i
              id="repeat"
              onClick={toggleRepeat}
              className={`player-btns fa-solid fa-repeat ${
                songOnRepeat ? "active" : ""
              }`}
            />
          </div>

          <input
            type="range"
            id="progressBar"
            value={progress}
            onChange={onProgressChange}
            style={{
              background: `linear-gradient(to right, #177200ff ${progress}% , #333 ${progress}%)`,
            }}
          />
        </div>
    </div>
    </div>
</>
  );
}

export default App;