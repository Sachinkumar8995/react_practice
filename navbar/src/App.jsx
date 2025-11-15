import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'   
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './router/Home.jsx'
import About from './router/About.jsx'
import Feature from './router/Feature.jsx'
import Product from './router/Product.jsx'
const App = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme?current_theme:'light');

  useEffect(() =>{
    localStorage.setItem('current_theme', theme);
  },[theme])
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/feature' element={<Feature />} />
        <Route path='/product' element={<Product />} />
      </Routes>
      
    </div>
  )
}

export default App
