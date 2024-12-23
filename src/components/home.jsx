import React, { useState } from 'react';
import '../asset/component/home.css';
import { FaFacebook, FaYoutube, FaInstagramSquare } from 'react-icons/fa';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';


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
                    <ul>
                        <li>Communication</li>
                        <li>Teamwork</li>
                        <li>Problem-solving</li>
                    </ul>
                </div>
                <div className="card-hard-skill">
                    <h2>Hard Skills</h2>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Data Analysis</li>
                    </ul>
                </div>
            </div>

            <div className="footer-contact">
                <p>© 2024 Khajornsa Suksila. Computer Engineering </p>
                <div className="contact-icons">
                    <FaFacebook className="facebook-icon" onClick={() => window.open("https://www.facebook.com/aaon.khajornsak.7", "_blank")} />
                    <FaInstagramSquare className="instagram-icon" onClick={() => window.open("https://www.instagram.com/aon_er2002/", "_blank")} />  
                    <FaYoutube className="youtube-icon" onClick={() => window.open("https://www.youtube.com/channel/UCkDFnlvcIB1ofHnNl6B2tUQ", "_blank")} />  
                </div>
            </div>

        </div>
        
    );
}

export default Home;

