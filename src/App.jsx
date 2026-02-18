import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
        <nav>
          <div className="left-half">
            <div className="logo">
              <i className="fa-brands fa-spotify"></i>
            </div>
            <div className="home-icon">
              <i className="fa-solid fa-house"></i>
            </div>
            <div className="search-bar">
              <div className="search-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <input
                type="text"
                className="input-box"
                placeholder="What do you want to play?"
              ></input>
              <div className="browse">
                <i className="fa-solid fa-folder-open"></i>
              </div>
            </div>
          </div>
          <div className="right-half">
            <div className="right-half-p1">
              <p className="nav-text">Premium</p>
              <p className="nav-text">Support</p>
              <p className="nav-text">Download</p>
            </div>
            <div className="right-half-p2">
              <div className="nav-text">
                <i className="fa-regular fa-circle-down"></i> Install App
              </div>
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
                <div className="music-card">
                  <img src="/images/1.jpg"/>
                  <div className="music-play-btn">
                    <i id="1" className="playMusic fa-solid fa-circle-play"></i>
                  </div>
                  <div className="img-title">No one Noticed</div>
                  <div className="img-description">Song by The Marias</div>
                </div>
                <div className="music-card">
                  <img src="/images/2.jpg"></img>
                  <div className="music-play-btn">
                    <i id="2" className="playMusic fa-solid fa-circle-play"></i>
                  </div>
                  <div className="img-title">The Night WE Met</div>
                  <div className="img-description">song by The Lord Huron</div>
                </div>
                <div className="music-card">
                  <img src="/images/3.jpg"></img>
                  <div className="music-play-btn">
                    <i id="3" className="playMusic fa-solid fa-circle-play"></i>
                  </div>
                  <div className="img-title">Sailor</div>
                  <div className="img-description">Song by The Gigi Perez</div>
                </div>
                <div className="music-card">
                  <img src="/images/4.jpg"></img>
                  <div className="music-play-btn">
                    <i id="4" className="playMusic fa-solid fa-circle-play"></i>
                  </div>
                  <div className="img-title">Heat Waves</div>
                  <div className="img-description">
                    Song by The Glass Animals
                  </div>
                </div>
                <div className="music-card">
                  <img src="/images/5.jpg"></img>
                  <div className="music-play-btn">
                    <i id="5" className="playMusic fa-solid fa-circle-play"></i>
                  </div>
                  <div className="img-title">Dandelions</div>
                  <div className="img-description">song by The Ruth B</div>
                </div>
                <div className="music-card">
                  <img src="/images/6.jpg"></img>
                  <div className="music-play-btn">
                    <i id="6" className="playMusic fa-solid fa-circle-play"></i>
                  </div>
                  <div className="img-title">Lovely</div>
                  <div className="img-description">
                    song by The Billie Elliesh
                  </div>
                </div>
              </div>
            </div>

            <div className="music-section">
              <h2>Recomended songs</h2>
              <div className="songs">
                <div className="music-card">
                  <img src="/images/7.jpg"></img>
                  <div className="music-play-btn">
                    <i id="7" className="playMusic fa-solid fa-circle-play"></i>
                  </div>
                  <div className="img-title">Star Boy</div>
                  <div className="img-description">Song by the Weekend</div>
                </div>
                <div className="music-card">
                  <img src="/images/8.jpg"></img>
                  <div className="music-play-btn">
                    <i id="8" className="playMusic fa-solid fa-circle-play"></i>
                  </div>
                  <div className="img-title">Night Changes</div>
                  <div className="img-description">
                    Song by The One Direction
                  </div>
                </div>
                <div className="music-card">
                  <img src="/images/9.jpg"></img>
                  <div className="music-play-btn">
                    <i id="9" className="playMusic fa-solid fa-circle-play"></i>
                  </div>
                  <div className="img-title">Another love</div>
                  <div className="img-description">Song by The Tom Odell</div>
                </div>
                <div className="music-card">
                  <img src="/images/10.jpg"></img>
                  <div className="music-play-btn">
                    <i
                      id="10"
                      className="playMusic fa-solid fa-circle-play"
                    ></i>
                  </div>
                  <div className="img-title">Open Arms</div>
                  <div className="img-description">
                    Song by The SZA,Traviss Scout
                  </div>
                </div>
                <div className="music-card">
                  <img src="/images/11.jpg"></img>
                  <div className="music-play-btn">
                    <i
                      id="11"
                      className="playMusic fa-solid fa-circle-play"
                    ></i>
                  </div>
                  <div className="img-title">Perfect</div>
                  <div className="img-description">Song by the Ed Sheeran</div>
                </div>
                <div className="music-card">
                  <img src="/images/12.jpg"></img>
                  <div className="music-play-btn">
                    <i
                      id="12"
                      className="playMusic fa-solid fa-circle-play"
                    ></i>
                  </div>
                  <div className="img-title">Shape of you</div>
                  <div className="img-description">Song by the Ed Sheeran</div>
                </div>
              </div>
            </div>

            <div className="music-section">
              <h2>Rescently played</h2>
              <div className="songs">
                <div className="music-card">
                  <img src="/images/13.jpg"></img>
                  <div className="music-play-btn">
                    <i
                      id="13"
                      className="playMusic fa-solid fa-circle-play"
                    ></i>
                  </div>
                  <div className="img-title">aint' like us</div>
                  <div className="img-description">
                    Song by The Kendrick Lamar
                  </div>
                </div>
                <div className="music-card">
                  <img src="/images/14.jpg"></img>
                  <div className="music-play-btn">
                    <i
                      id="14"
                      className="playMusic fa-solid fa-circle-play"
                    ></i>
                  </div>
                  <div className="img-title">Savage</div>
                  <div className="img-description">Song by The SABR</div>
                </div>
                <div className="music-card">
                  <img src="/images/15.jpg"></img>
                  <div className="music-play-btn">
                    <i
                      id="15"
                      className="playMusic fa-solid fa-circle-play"
                    ></i>
                  </div>
                  <div className="img-title">High on you</div>
                  <div className="img-description">
                    Song by The Jind Universe
                  </div>
                </div>
                <div className="music-card">
                  <img src="/images/16.jpg"></img>
                  <div className="music-play-btn">
                    <i
                      id="16"
                      className="playMusic fa-solid fa-circle-play"
                    ></i>
                  </div>
                  <div className="img-title">Birds of a Feather</div>
                  <div className="img-description">
                    Song by The Billie Eilliesh
                  </div>
                </div>
                <div className="music-card">
                  <img src="/images/17.jpg"></img>
                  <div className="music-play-btn">
                    <i
                      id="17"
                      className="playMusic fa-solid fa-circle-play"
                    ></i>
                  </div>
                  <div className="img-title">KK</div>
                  <div className="img-description">Song by The Pritam</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="player-bar">
          <div className="now-bar">
            <img src="Images/.jpg" alt=""></img>
            <div>
              <div className="img-title-info">Title 1</div>
              <div className="img-des-info">
                this is description for title 1 song
              </div>
            </div>
          </div>
          <div className="music-controller">
            <div className="player">
              <div>
                <i id="shuffle" className="player-btns fa-solid fa-shuffle"></i>
              </div>
              <div>
                <i
                  id="backward"
                  className="player-btns fa-solid fa-backward-step"
                ></i>
              </div>
              <div>
                <i
                  id="play"
                  className="player-btns fa-solid fa-circle-play"
                ></i>
              </div>
              <div>
                <i
                  id="forward"
                  className="player-btns fa-solid fa-forward-step"
                ></i>
              </div>
              <div>
                <i id="repeat" className="player-btns fa-solid fa-repeat"></i>
              </div>
            </div>

            <div>
              <input type="range" id="progressBar" value="0"></input>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
