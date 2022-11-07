import React from 'react'
import './page2.css'
import Header from '../../components/page1/header/Header'
import BigGallery from '../../components/latest/latestarticle/BigGallery'
import SmallGallery from '../../components/latest/latestarticle/SmallGallery'
import SmallGalleryPart from '../../components/latest/latestarticle/SmallGalleryPart'
export default function page2() {
  return (
    <div className='page2start'>
      
   
     <Header />
   
        
      
    <div className='page2main'>
      <div className='page2div1'>
        <div className='insider1'>
          <h1 className='latestheading'>Bollywood</h1>
          <hr className='line'></hr>
          <BigGallery />
          <BigGallery />
          <BigGallery />
          <BigGallery />
          <BigGallery />
          <BigGallery />
          <BigGallery />
          
          <i className="downward fa-solid fa-down-long"></i>
                    <span className="travelDate" style={{ fontSize: "13px" }}>
                        LOAD MORE
                    </span>
        </div>
      </div>

      <div className='page2div2'>
        <div className='insider2'>
          <h1 className='latestheading'>Top Posts</h1>
          <hr className='line'></hr>
          <SmallGallery />
          <SmallGalleryPart />
          <SmallGalleryPart />
          <SmallGalleryPart />
        </div>
        <div className="insider2ad">
                        <div className="insider2adv">
                            <h1>Advertisement</h1>
                        </div>
                    </div>
      </div>
    </div>

    </div>
  )
}
