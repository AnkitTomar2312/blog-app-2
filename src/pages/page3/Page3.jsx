import './page3.css'

export default function Page3() {
  return (
    <div className='page3'>

      <div className='headerP3' >
        <div className='headerP3Text'>
          <span className='the'>The</span>
          <span className='siren'>siren</span>
        </div>

        <div className='getStarted'>
          <span style={{ color: "#03A87C", fontWeight: "bold", fontSize: "0.7rem" }}>Get Started</span>
        </div>

      </div>


      <div className='mainP3'>
        <div className='mainP31'>
          <h1 className='ways'>5 Ways to animate a React app.</h1>
          <div className='userInfoP3'>
            <div className='userPic'>
              <img src='https://p.kindpng.com/picc/s/24-248528_internet-user-png-person-in-charge-icon-transparent.png' alt='User Image'></img>
            </div>
            <div className='userData'>
              <div className='userName'>
                <h5 className='userName1' style={{ marginBottom: "1rem" }}>Dmitry Nozhenko</h5>
                <h6 className='postdate' style={{ opacity: "0.5", marginBottom: "1rem" }}>Jan 28, 2019 · 10 min reads</h6>
              </div>
              <div className='userSocial'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>

          <div className='defi'>
            <img src='https://miro.medium.com/max/1400/1*1Z177dpTeAp7uEFc5Zx2xg.png' alt=''></img>
            <div className='defiText'>Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React. <br></br><br></br> Let’s talk about them</div>
          </div>
          <div className='screenShot'>
            <img src='https://miro.medium.com/max/1400/1*08y12Sp1d9cLSKE9nz1EaA.png' alt='' ></img>
            <div className='anno'>
              <span className='annoText'>React</span>
              <span className='annoText'>javascript</span>
              <span className='annoText'>Animation</span>
              <div className='likes'>
                <i className="icon fa-solid fa-2x fa-hands-clapping"></i>
                <span>9.3K claps</span>
              </div>

              <div className='writtenBy'>
                <div className='userPic'>
                  <img src='https://p.kindpng.com/picc/s/24-248528_internet-user-png-person-in-charge-icon-transparent.png' alt='User Image'></img>
                </div>
                <div className='userData'>
                  <div className='userName'>
                    <p style={{ opacity: "0.5", marginBottom: "1rem" }}>WRITTEN BY</p>
                    <h5 className='userName1' style={{ marginBottom: "1rem" }}>Dmitry Nozhenko</h5>
                    <h6 className='postdate' style={{ opacity: "0.5", marginBottom: "1rem" }}>Jan 28, 2019 · 10 min reads</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>

      <div className='more'>
            <div className='moreText'>
              <h3 className='moreFrom'>More From The Siren</h3>
           
            <div className='cardHolder'>
              <div className='card'>
                  <p className='tag'> Also tagged ReactJs</p>
                  <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='' ></img>
                  <h2 className="webView">Joshua Tree Overnight Adventure</h2>
                  <h3 className='mobile'>Performance Comparison for 5 JavaScript Object Iterations</h3>
                  <div className='moreUser'>
                  <div>
                    <img className='userPicmore' src='https://p.kindpng.com/picc/s/24-248528_internet-user-png-person-in-charge-icon-transparent.png' alt='User Image'></img>
                  </div>
                  <div className='userData userData1'>
                    <div className='userName userNameMob'>
                      <h5 className='writterName' style={{ marginBottom: "1rem" }}>Dmitry Nozhenko</h5>
                      <h6 className='mobileV' style={{ opacity: "0.5", marginBottom: "1rem" }}>Jan 28, 2019 · 10 min reads</h6>
                    </div>
                  </div>
                  </div>
              </div>

              <div className='card'>
                  <p className='tag'> Related reads</p>
                  <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='' ></img>
                  <h2 className="webView">Joshua Tree Overnight Adventure</h2>
                  <h3 className='mobile'>Performance Comparison for 5 JavaScript Object Iterations</h3>

                  <div className='moreUser'>
                  <div>
                    <img className='userPicmore' src='https://p.kindpng.com/picc/s/24-248528_internet-user-png-person-in-charge-icon-transparent.png' alt='User Image'></img>
                  </div>
                  <div className='userData userData1'>
                    <div className='userName userNameMob'>
                      <h5 className='writterName' style={{ marginBottom: "1rem" }}>Dmitry Nozhenko</h5>
                      <h6 className='mobileV' style={{ opacity: "0.5", marginBottom: "1rem" }}>Jan 28, 2019 · 10 min reads</h6>
                    </div>
                  </div>
                  </div>
              </div>

              <div className='card'>
                  <p className='tag' > Related reads</p>
                  <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='' ></img>
                  <h2 className="webView">Joshua Tree Overnight Adventure</h2>
                  <h3 className='mobile'>Performance Comparison for 5 JavaScript Object Iterations</h3>

                  <div className='moreUser '>
                  <div>
                    <img className='userPicmore' src='https://p.kindpng.com/picc/s/24-248528_internet-user-png-person-in-charge-icon-transparent.png' alt='User Image'></img>
                  </div>
                  <div className='userData userData1'>
                    <div className='userName userNameMob'>
                      <h5 className='writterName' style={{ marginBottom: "1rem" }}>Dmitry Nozhenko</h5>
                      <h6 className='mobileV' style={{ opacity: "0.5", marginBottom: "1rem" }}>Jan 28, 2019 · 10 min reads</h6>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
