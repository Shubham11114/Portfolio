import React from 'react';
import projectImg from '../images/project1.jpg';
import '../styles/projects.css';

const Projects = () => {
    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">Featured Project</h2>

                <div className="project-card">
                    <div className="project-image">
                        <img src={projectImg} alt="WanderHub Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    </div>

                    <div className="project-content">
                        <h3 className="project-title">WanderHub</h3>
                        <p className="project-description">
                            WanderHub is a local tourism platform designed to promote hidden and popular local destinations. It helps users explore nearby places, discover local culture, and support local tourism through a seamless and engaging web experience.
                        </p>

                        <div className="project-tech">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>MongoDB</span>
                            <span>Express</span>
                            <span>Google Maps API</span>
                        </div>

                        <div className="project-links">
                            <a href="#" className="btn btn-primary">Live Demo</a>
                            <a href="#" className="btn btn-outline">GitHub Repo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
