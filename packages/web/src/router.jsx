import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import Home from './components/home/Home';
import Signin from './components/signin/Signin';
import GeekDaily from './components/geekdaily/GeekDaily';


const RouterLink = ()=>{
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/" />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/geekdaily" element={<GeekDaily />}/>
    </Routes>
  );
}

export default RouterLink;
