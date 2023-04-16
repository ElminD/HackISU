import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Companie from './components/Companie';
import Reviews from './components/Reviews';
import Salary from './components/Salary';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path='/Salary' element={<Salary />} />
        <Route path='/companie' element={<Companie />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/reviews/:company' element={<Reviews />} />
      </Routes>

    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
