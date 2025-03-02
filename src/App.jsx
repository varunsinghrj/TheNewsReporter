import React from 'react'
import Navbar from './components/Navbar'
import Newsbox from './components/Newsbox'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
export default function App() {
  return (
    <>
       <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Newsbox />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
       
      </Routes>
    </Router>
    </>
  )
}
