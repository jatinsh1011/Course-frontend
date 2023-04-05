import React from 'react';
import "./certificate.css"
import Background from '../components/images/download.jpeg';




function Certificate() {
  return (
    <div className="  certificate  " >
    <div className="certificate-image " style={{background: `url(${Background})` , backgroundSize : "contain"}}>
      <div className='certificate-details'>Certificate  </div>
      <div><hr className='hori'/></div>
      
    </div>
      <div><span className='certi-line'>Complete Course to download certificate </span>
      <button className='btn btn-secondary certi-btn'>Get Certificate</button>
      </div>
     
    </div>
          
         
          

          
    
  );
}


export default Certificate;
