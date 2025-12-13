import React from 'react';
import Robot from '../components/Robot';
import '../styles/hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero section">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="greeting">Hi, I'm Shubham</span>
                    <h1 className="title">
                        Full Stack <br />
                        <span className="gradient-text">MERN Developer</span>
                    </h1>
                    <p className="description">
                        I’m Shubham, a passionate Full Stack MERN Developer who loves building scalable, user-friendly web applications. I specialize in crafting modern web experiences using clean architecture, performance-driven code, and elegant UI.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>

                <div className="hero-visual">
                    <Robot />
                    <div className="glass-card">
                        <div className="code-block">
                            <span className="code-line"><span className="keyword">const</span> <span className="variable">developer</span> = <span className="bracket">{`{`}</span></span>
                            <span className="code-line indent">  name: <span className="string">'Shubham'</span>,</span>
                            <span className="code-line indent">  skills: [<span className="string">'React'</span>, <span className="string">'Node'</span>, <span className="string">'MongoDB'</span>],</span>
                            <span className="code-line indent">  hardWorker: <span className="keyword">true</span></span>
                            <span className="code-line"><span className="bracket">{`}`}</span>;</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
