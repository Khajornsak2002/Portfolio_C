import React from 'react';
import '../asset/component/home.css';

function Home() {
    const handleClick = () => {
        alert('Welcome to the application!');
    };

    return (
        <div className="home-container">
            <h1>Portfolio</h1>
            <h2>Khajornsak Suksila</h2>
            <h2>Computer Engineering</h2>
            <p>Welcome to my portfolio! Here you can find my projects and skills.</p>
            {/* <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a> */}
            {/* <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a> */}
            <img src="https://www.thebangkokinsight.com/wp-content/uploads/2020/06/%E0%B8%9A%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B8%B4%E0%B8%95.jpg" alt="Description" className="image-frame custom-image" />
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

