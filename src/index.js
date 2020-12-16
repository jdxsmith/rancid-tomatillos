import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const router = <BrowserRouter basename='/rancid-tomatillos'> <App /> </BrowserRouter>;

ReactDOM.render(
  router,
  document.getElementById('root')
);

reportWebVitals();