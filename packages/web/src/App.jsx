import { useState } from 'react'
import { Routes, Route, HashRouter, Outlet, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import '/public/assets/css/theme.min.css';

import './App.css'
import RouterLink from './router'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'

function App() {

  return (
    <>
      <div className='App'>
        <Navbar/>
        <Home/>
        <Footer/>
      </div>
    </>
  )
}

export default App
