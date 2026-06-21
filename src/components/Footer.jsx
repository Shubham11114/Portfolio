import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#" className="footer-logo">
                            Shubham<span className="dot">.</span>
                        </a>
                        <p className="footer-tagline">MERN Stack Developer building modern web experiences.</p>
                    </div>

                    <div className="footer-nav">
                        <h4>Quick Links</h4>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="footer-social-col">
                        <h4>Connect</h4>
                        <div className="footer-social-links">
                            <a href="https://www.linkedin.com/in/shubham11114" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://github.com/Shubham11114" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://x.com/Shubham_11114" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="mailto:shubhamv9546@gmail.com" aria-label="Email">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Build by Shubham Kumar. Made with <FaHeart className="heart-icon" />
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
