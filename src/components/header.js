import React from 'react';
import './header.css'
import Background from '../components/images/help.png';
import BackgroundP from '../components/images/profile.jpg';


function Header(){

  return (
    
    <div className='header'>
        <div className='headerin'>
          <span class="headertitle">Introduction to Machine Learning</span>
          <div className="right">
            <ul className='header-right'>
              <button className='help-btn'>
                <img className='help-img' src={Background} alt="" />
                <span>Get Help</span>
              </button>
              <button className='drop-bt'>
                <img className='help-img profile-img' src={BackgroundP} alt="" />
                <div class="dropdown">
  <button class="btn  dropdown-toggle drop-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   <span className='profile-name'>Jatin</span>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Edit Profile</a>
    <a class="dropdown-item" href="#">My Application</a>
    <a class="dropdown-item" href="#">Log Out</a>
  </div>
</div>
              </button>
            </ul>
          </div>

        </div>
      </div>
  );
}

export default Header;
