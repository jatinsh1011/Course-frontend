import React from 'react';
import { useEffect, useState } from 'react';
import Mainimage from './mainimage';
import Maindetails from './maindetails';
import Axios from 'axios';


export default function Main(props) {

  const [data , setData]=useState("");
 

  const getData = async()=>{
    const response = await Axios.get("http://localhost:5000/getMainNames")
    setData(response.data)
  }

  useEffect(()=>{
    getData()
  },[]);
 
  
  

  return (
    
  <div className="main container">
  <Mainimage/>
  <Maindetails id="coll1" name={data.name1}/>
  <Maindetails id="coll2" name={data.name2}/>
  <Maindetails id="coll3" name={data.name3}/>
  <Maindetails id="coll4" name={data.name4}/>
  <Maindetails id="coll4" name={data.name5}/>
      
    </div>
  );
}
