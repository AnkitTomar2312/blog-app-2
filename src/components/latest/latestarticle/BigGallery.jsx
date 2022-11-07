import './biggallery.css'

export default function BigGallery() {
  return (
    <div>
        <hr className="begin"></hr>
        <div className="LAcontainer">
            <div className="LAimg">
                <img src="https://i.pinimg.com/originals/58/75/95/58759592cba2251c438129301fb7c6d7.jpg" alt=""></img>
            </div>
            <div className="LAtext">
                <h1 className="LAtexth1">Catch waves with an adventure guide</h1>
                <p className="LAtextp">Gujarat is vastly underrated and it’s a mystery to us <span className='MobileGujju'> why the region isn’t more well-</span></p>
                <span className="travel">Travel</span>
                <span className="travelDate">/ August 21 2017</span>
            </div>
        </div>
    </div>
  )
}
