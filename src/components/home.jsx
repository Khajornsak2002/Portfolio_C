import React from 'react';
import '../asset/component/home.css';

function Home() {
    const handleClick = () => {
        alert('Welcome to the application!');
    };

    return (
        <div className="home-container">
            <div className="card">
                <div className="text-content">
                    <h1>About Me</h1>
                    
                    <h3>I possess a strong background in data science, with foundational skills in data analysis and problem-solving. During my internship in web development at a government agency, I worked on designing, coding, and maintaining responsive websites, collaborating with teams to optimize performance and ensure user-friendly interfaces. This experience enhanced my expertise in web development, UX/UI design, and utilizing frameworks like Bootstrap and JavaScript libraries. I am adaptable, work well under pressure, and am committed to continuous learning, enabling me to contribute to the development of innovative solutions.</h3>
                </div>
                <img src={require('../asset/images/image_spa.png')} alt="Description" className="image-frame custom-image" />
                <h2>Khajornsak Suksila</h2>
                <h2>Computer Engineering</h2>
            </div>
            <footer className="footer">
                <p>© 2024 Khajornsa Suksila. Computer Engineering </p>
                <div className="contact-icons">
                    <a href="https://www.facebook.com/aaon.khajornsak.7" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="Facebook" className="facebook-icon"  />
                    </a>
                    {/* <a href="https://line.me/yourprofile" target="_blank" rel="noopener noreferrer">
                        <img src="path/to/line-logo.png" alt="Line" />
                    </a> */}
                    <a href="https://www.youtube.com/channel/UCkDFnlvcIB1ofHnNl6B2tUQ" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="YouTube" className="youtube-icon" />  
                    </a>
                    <strong> : Khajornsak Suksila</strong>
                </div>
            </footer>
        </div>
        
    );
}

export default Home;

