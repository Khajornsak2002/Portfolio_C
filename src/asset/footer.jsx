import React from "react"
import { FaFacebook, FaYoutube, FaInstagramSquare } from 'react-icons/fa';
import '../asset/footer.css';

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contact</h5>
                <ul className="list-unstyled">
                    <li>
                        <a href="https://www.facebook.com/aaon.khajornsak.7" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="facebook-icon" /> Facebook
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/aon_er2002/" target="_blank" rel="noopener noreferrer">
                            <FaInstagramSquare className="instagram-icon" /> Instagram
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCkDFnlvcIB1ofHnNl6B2tUQ" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="youtube-icon" /> YouTube
                        </a>
                    </li>
                </ul>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>

        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2024 Khajornsa Suksila Computer Engineering</div>

</footer>

export default Footer