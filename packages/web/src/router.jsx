import React from 'react';
import { Navigate, Routes, Route , BrowserRouter as Router } from "react-router-dom";
import App from './App.jsx'

import Home from './pages/home/Home';
import Signin from './pages/signin/Signin';
import Profile from './pages/user/Profile.jsx';
import GeekDaily from './pages/geekdaily/GeekDaily';

const RouterLink = ()=>{
  return (
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/geekdaily" element={<GeekDaily />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </App>
    </Router>
  );
}

export default RouterLink;
