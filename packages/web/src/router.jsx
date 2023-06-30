import React from 'react';
import { Navigate, Routes, Route , BrowserRouter as Router } from "react-router-dom";
import App from './App.jsx'

import Home from './components/home/Home';
import Signin from './components/signin/Signin';
import GeekDaily from './components/geekdaily/GeekDaily';

const RouterLink = ()=>{
  return (
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/geekdaily" element={<GeekDaily />}/>
        </Routes>
      </App>
    </Router>
  );
}

export default RouterLink;
