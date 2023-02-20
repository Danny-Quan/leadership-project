import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ScrollToTop from './components/ScrollToTop';
import WhoWeAre from './pages/WhoWeAre';
import WhatWeDo from './pages/WhatWeDo';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import Action from './pages/Action';
import Error from './pages/Error';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
    <Navigation/>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/about' element={<WhoWeAre/>}/>
      <Route path='/services' element={<WhatWeDo/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/take-action' element={<Action/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
