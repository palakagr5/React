import './App.css';
import Navbar from './components/Navbar';
import Textgame from './components/Textgame';
import React, {useState} from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from './components/About'

function App() {

  const [mode, setmode]= useState('light');
  const togglemode=()=>{

    if(mode==='light'){
      setmode('dark');
      
      document.body.style.backgroundColor='#042743';
    }
    else{
      setmode('light');
      
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextGame" mode={mode} togglemode={togglemode}/>
      <Routes>


      <Route exact path="/home" element={<Textgame heading="Enter text to change" mode={mode} togglemode={togglemode}/>}>
        </Route>
      <Route exact path="/about" element={<About mode={mode}/>}>
        </Route>
      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
