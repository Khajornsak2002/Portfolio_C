import React, { useState } from 'react';
import '../asset/component/home.css';
import { FaFacebook, FaYoutube, FaInstagramSquare } from 'react-icons/fa';
import { FaUsers, FaLightbulb, FaBrain, FaComments } from 'react-icons/fa';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import { SiC, SiCplusplus, SiPython, SiPhp, SiJavascript, SiHtml5, SiCss3, SiTableau, SiFigma } from 'react-icons/si';
import '../asset/footer';
import Footer from '../asset/footer';



function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleClick = () => {
        alert('Welcome to the application!');
    };

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={`home-container ${isDarkMode ? 'dark-mode' : ''}`}>
            <label className="switch">
                <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                <span className="slider">
                    {isDarkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
                </span>
            </label>
            <div className="card">
                <div className="text-content">
                    <h1>About Me</h1>
                    
                    <h3>I possess a strong background in data science, with foundational skills in data analysis and problem-solving. During my internship in web development at a government agency, I worked on designing, coding, and maintaining responsive websites, collaborating with teams to optimize performance and ensure user-friendly interfaces. This experience enhanced my expertise in web development, UX/UI design, and utilizing frameworks like Bootstrap and JavaScript libraries. I am adaptable, work well under pressure, and am committed to continuous learning, enabling me to contribute to the development of innovative solutions.</h3>
                </div>
                <img src={require('../asset/images/image_spa.png')} alt="Description" className="image-frame custom-image rounded-circle" style={{ width: '300px', height: '400px' }} />
                <h2>Khajornsak Suksila</h2>
                <h2>Computer Engineering</h2>
            </div>

            <div className="card-skill">
                <div className="text-content">
                    <h1>Skill</h1>
                </div>
                <div className="card-soft-skill">
                    <h2>Soft Skills</h2>
                    <ul className="soft-skill-list">
                        <li><FaUsers className="soft-skill-icon" /> Team Leadership</li>
                        <li><FaLightbulb className="soft-skill-icon" /> Problem Solving</li>
                        <li><FaBrain className="soft-skill-icon" /> Analyze Complex Problems</li>
                        <li><FaComments className="soft-skill-icon" /> Communication</li>
                    </ul>
                </div>
                <div className="card-hard-skill">
                    <h2>Hard Skills</h2>
                    <ul className="skill-grid">
                        <li><SiC className="skill-icon" /> Program C</li>
                        <li><SiCplusplus className="skill-icon" /> Program C++</li>
                        <li><SiPython className="skill-icon" /> Program Python</li>
                        <li><SiPhp className="skill-icon" /> Program PHP</li>
                        <li><SiJavascript className="skill-icon" /> JavaScript</li>
                        <li><SiHtml5 className="skill-icon" /> HTML</li>
                        <li><SiCss3 className="skill-icon" /> CSS</li>
                        <li><SiFigma className="skill-icon" /> UX/UI</li>
                    </ul>
                </div>
            </div>

            <div className="footer-contact">
                {/* <p>© 2024 Khajornsa Suksila. Computer Engineering </p> */}
                <Footer></Footer>
            </div>

        </div>
        
    );
}

export default Home;

