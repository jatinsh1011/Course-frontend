import { useEffect, useState } from 'react';
import React from 'react';
import {BsPlus } from 'react-icons/bs';
import Collapse from './collapse';








export default function Maindetails(props) {


 
  const coll = '#' + props.id;
  

  return (
    <div className="row box-shad">

          <div className="col">
            <div className='coursename width-100 '>
              <h4 className='courseDetails'>{props.name}</h4>
              <span className='numberLec'>1. Lecture</span>

              <span className="button-expand"><button className='coll-btn' onClick={onchange} type="button" data-toggle="collapse" data-target={coll}  >

               <BsPlus/>
              </button></span>

              <div class="collapse" id={props.id}>

              
              <Collapse/>
              </div>

            </div>






          </div>
        </div>
  );
}
