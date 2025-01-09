import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import ProgrammerWorks from './components/programmer-works';
import Activities from './components/activities';
import Certificates from './components/certificates';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('/home');

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (path) => {
    setActiveMenu(path);
    setMenuOpen(false);
  };


  return (
    <Router>
      <nav className="navbar">
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className={`bar`}></div>
          <div className={`bar`}></div>
          <div className={`bar`}></div>
        </div>
        <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
          <li><NavLink to="/home" onClick={() => handleMenuClick('/home')} className={activeMenu === '/home' ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => handleMenuClick('/about')} className={activeMenu === '/about' ? 'active' : ''}>About me</NavLink></li>
          <li><NavLink to="/portfolio" onClick={() => handleMenuClick('/portfolio')} className={activeMenu === '/portfolio' ? 'active' : ''}>Experiences</NavLink></li>
          <li><NavLink to="/programmer-works" onClick={() => handleMenuClick('/programmer-works')} className={activeMenu === '/programmer-works' ? 'active' : ''}>ผลงาน Programmer</NavLink></li>
          <li><NavLink to="/activities" onClick={() => handleMenuClick('/activities')} className={activeMenu === '/activities' ? 'active' : ''}>กิจกรรม</NavLink></li>
          <li><NavLink to="/certificates" onClick={() => handleMenuClick('/certificates')} className={activeMenu === '/certificates' ? 'active' : ''}>เกียรติบัตร</NavLink></li>
        </ul>
      </nav>
      <div style={{ paddingTop: '60px' }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* <Route path="/programmer-works" element={<ProgrammerWorks />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/certificates" element={<Certificates />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
