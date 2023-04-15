import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import Companie from './components/Companie';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class="row row-cols-1 row-cols-md-3 g-4">
    <Companie /> 
    <Companie /> 
    <Companie /> 
    <Companie /> 
    <Companie /> 
    <Companie /> 
    </div>
    
    
    {/* <Navbar /> */}

    {/* <Reviews /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

