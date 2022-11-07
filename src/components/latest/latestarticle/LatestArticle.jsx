import "./latestarticle.css"
import Heading from '../thelatest/Heading'
import BigGallery from "./BigGallery"
import SmallGallery from "./SmallGallery"
import SmallGalleryPart from "./SmallGalleryPart"

export default function LatestArticle() {
    return (
        <div className="latestarticle">
            <h1 className="latestheading">Latest Articles</h1>
            <hr  className="line"></hr>


            <div className="LAdiv1">
                <div className="LAorganized">
                   <BigGallery />
                   <BigGallery />
                   <BigGallery />
                   <BigGallery />
                
                    <i className="downward fa-solid fa-down-long"></i>
                    <span className="travelDate" style={{ fontSize: "13px" }}>
                        LOAD MORE
                    </span>

                    <div className="LAbottom">
                        <div className="LAbottomImg">
                            <img src="https://i.pinimg.com/originals/58/75/95/58759592cba2251c438129301fb7c6d7.jpg" alt=""></img>
                        </div>
                        <div className="LAbottomText">
                            <h1 style={{ color: "white", paddingBottom: "3em" }}>Title of vertical gallery</h1>
                            <p style={{ color: "white" }}>Travel / August 21 2017</p>
                        </div>
                    </div>
                </div>





                <div className="LAunorganized">
                    <div className="LAadver">
                        <div className="LAadverText">
                            <h1>Advertisement</h1>
                        </div>
                    </div>
                    <div className="LAtopPost">
                        <h1 className="latestheading">Top Post</h1>
                        <hr className="line" />
                        <SmallGallery />
                        <SmallGalleryPart/>
                        <SmallGalleryPart />
                        <SmallGalleryPart />

                        

                    </div>
                </div>

            </div>
        </div>
    )
}
