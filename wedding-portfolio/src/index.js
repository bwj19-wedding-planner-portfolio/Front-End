import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"


///import BrowserRouter - wrap App
///import Semantic UI CSS

ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>
, document.getElementById('root'));


