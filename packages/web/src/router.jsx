import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import Home from './components/home/Home';
import Signin from './components/signin/Signin';

const RouterLink = ()=>{
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/" />}/>
      <Route path="/signin" element={<Signin />}/>
    </Routes>
  );
}

export default RouterLink;
