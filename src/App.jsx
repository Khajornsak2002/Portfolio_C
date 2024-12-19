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
  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-list">
          <li><NavLink to="/home" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none', color: isActive ? 'green' : 'black' })}>หน้าแรก</NavLink></li>
          <li><NavLink to="/about" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none', color: isActive ? 'green' : 'black' })}>ประวัติส่วนตัว</NavLink></li>
          <li><NavLink to="/portfolio" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none', color: isActive ? 'green' : 'black' })}>ผลงาน</NavLink></li>
          <li><NavLink to="/programmer-works" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none', color: isActive ? 'green' : 'black' })}>ผลงาน Programmer</NavLink></li>
          <li><NavLink to="/activities" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none', color: isActive ? 'green' : 'black' })}>กิจกรรม</NavLink></li>
          <li><NavLink to="/certificates" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none', color: isActive ? 'green' : 'black' })}>เกียรติบัตร</NavLink></li>
          <li><span style={{ color: 'gray', cursor: 'not-allowed' }}>Log in</span></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/programmer-works" element={<ProgrammerWorks />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </Router>
  );
}

export default App;
