import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './SecondaryComponent/Home.jsx'
import Feature from './FeaturesComponent/Feature.jsx'
import Contact from './ContactComponent/Contact.jsx'
import Team from './TeamComponent/Team.jsx'
import About from './AboutComponent/About.jsx';
import Header from './SecondaryComponent/Header.jsx';
import Footer from './SecondaryComponent/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='feature' element={<Feature/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='team' element={<Team/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
