import './App.css';
import Sidebar from './components/Sidebar';
import Axios from 'axios';
import Certificate from './components/certificate';
import Header from './components/header';
import Main from './components/main';
import Second from './components/second';
import { useEffect, useState } from 'react';

function App() {
  const [data , setData]=useState("");

  const getData = async()=>{
    const response = await Axios.get("http://localhost:5000/getData")
    setData(response.data)
  }
  useEffect(()=>{
    getData()
  },[]);

  
  return (
    <div>
    
    <Sidebar />
     <Header/>
     <Second/>
     <Main />
     <Certificate/>

</div>


  );
}


export default App;
