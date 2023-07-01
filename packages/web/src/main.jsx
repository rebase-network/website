import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from "react-router-dom";

import * as bootstrap from 'bootstrap';
import '/public/assets/js/font-awesome.min.js'

import RouterLink from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterLink/>
)
