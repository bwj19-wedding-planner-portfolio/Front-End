import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './App';
import { BrowserRouter, withRouter } from "react-router-dom"

const AppWithRouter = withRouter(App);


ReactDOM.render(
<BrowserRouter>
  <AppWithRouter />
</BrowserRouter>
, document.getElementById('root'));


