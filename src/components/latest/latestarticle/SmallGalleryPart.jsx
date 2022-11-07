import './smallgallerypart.css'

export default function SmallGalleryPart() {
  return (
    <div>
        <hr className="begin"></hr>

    <div className="LATsidecontainer">
        <div className="LATimg">
            <img src="https://i.pinimg.com/originals/58/75/95/58759592cba2251c438129301fb7c6d7.jpg" alt=""></img>
        </div>
        <div className="LATtext">
            <div className="LAunImgnum2">
            <h1 className="LATtexth1">Catch waves with <br></br> an adventure guide</h1>
            <h1 id='num' style={{fontSize: "3em", opacity: "0.3"}}></h1>
            </div>
            <span style={{fontSize: "15px" ,paddingRight:"1em"}} className="travel">Travel</span>
            <span style={{fontSize: "15px"}} className="travelDate">/ August 21 2017</span>
        </div>
    </div>
    </div>
  )
}
