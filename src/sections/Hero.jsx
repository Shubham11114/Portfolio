import React, { useState, useEffect } from 'react';
import Robot from '../components/Robot';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../styles/hero.css';

const roles = [
    'MERN Stack Developer',
    'Full-Stack Web Developer',
    'React.js Enthusiast',
    'Node.js Backend Builder',
];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger entrance animation after mount
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const current = roles[roleIndex];
        let timeout;

        if (!isDeleting && displayed.length < current.length) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        } else if (!isDeleting && displayed.length === current.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
        } else if (isDeleting && displayed.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }

        return () => clearTimeout(timeout);
    }, [displayed, isDeleting, roleIndex]);

    return (
        <section id="hero" className="hero section">
            <div className="container hero-container">
                <div className={`hero-content ${isLoaded ? 'hero-loaded' : ''}`}>
                    <div className="hero-badge" style={{ animationDelay: '0.2s' }}>
                        <span className="badge-dot"></span>
                        <span>Available for opportunities</span>
                    </div>
                    <span className="greeting" style={{ animationDelay: '0.3s' }}>Hi there, I'm</span>
                    <h1 className="title" style={{ animationDelay: '0.4s' }}>
                        Shubham Kumar
                    </h1>
                    <div className="typewriter-wrapper" style={{ animationDelay: '0.5s' }}>
                        <span className="typewriter-text gradient-text">{displayed}</span>
                        <span className="typewriter-cursor">|</span>
                    </div>
                    <p className="description" style={{ animationDelay: '0.6s' }}>
                        Motivated full-stack developer with hands-on experience building end-to-end web applications using the MERN stack. I specialize in designing responsive UIs, developing RESTful APIs, and integrating databases.
                    </p>

                    <div className="hero-actions" style={{ animationDelay: '0.7s' }}>
                        <a href="#projects" className="btn btn-primary">
                            <span>View Projects</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                        </a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>

                    <div className="hero-socials" style={{ animationDelay: '0.8s' }}>
                        <a href="https://www.linkedin.com/in/shubham11114" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://github.com/Shubham11114" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="mailto:shubhamv9546@gmail.com" className="social-icon" aria-label="Email">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div className={`hero-visual ${isLoaded ? 'hero-loaded' : ''}`}>
                    <Robot />
                    <div className="glass-card">
                        <div className="code-block">
                            <span className="code-line"><span className="keyword">const</span> <span className="variable">developer</span> = <span className="bracket">{`{`}</span></span>
                            <span className="code-line indent">  name: <span className="string">'Shubham Kumar'</span>,</span>
                            <span className="code-line indent">  stack: <span className="string">'MERN'</span>,</span>
                            <span className="code-line indent">  skills: [<span className="string">'React'</span>, <span className="string">'Node'</span>, <span className="string">'MongoDB'</span>],</span>
                            <span className="code-line indent">  passionate: <span className="keyword">true</span>,</span>
                            <span className="code-line indent">  hireable: <span className="keyword">true</span></span>
                            <span className="code-line"><span className="bracket">{`}`}</span>;</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span className="scroll-text">Scroll Down</span>
            </div>
        </section>
    );
};

export default Hero;
