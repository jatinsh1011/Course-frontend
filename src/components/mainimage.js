import React from 'react';
import Background from '../components/images/img.jpg';
import './mainimage.css'

export default function Mainimage() {
  return (
    <div className="row box-shad mainImage " >
          <div className="courseimage col-3" style={{background: `url(${Background})` , backgroundSize : "contain"}}></div>
          <div className="col-9">
            <div className='coursename width-100 '><span className='mainimage-detail'>Introduction to machine learning</span></div>
            <div className='coursename width-100 '><span className='mainimage-batch'> 
                    Batch: Default_Batch_1625571974257_Introduction to Machine Learning
                  </span></div>
            <div className='coursename width-100 '><span className='mainimage-complete'>0% complete</span></div>
          

          </div>
        </div>

  );
}
