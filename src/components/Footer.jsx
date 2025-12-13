import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <h2 className="footer-title">Let's Connect</h2>
                    <p className="footer-text">
                        Feel free to reach out for collaborations or just a friendly hello.
                    </p>

                    <div className="social-links">
                        <a href="#" className="social-btn">LinkedIn</a>
                        <a href="#" className="social-btn">GitHub</a>
                        <a href="#" className="social-btn">Twitter</a>
                        <a href="mailto:shubham@example.com" className="social-btn email-btn">Email Me</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Shubham. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
