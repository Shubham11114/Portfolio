import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import projectImg from '../images/project1.png';
import academiqImg from '../images/academiq.png';
import spotifyImg from '../images/spotify.png';
import '../styles/projects.css';

const projectsData = [
    {
        title: 'AcademIQ',
        subtitle: 'Academic Intelligence Platform',
        description: 'Building a full-stack academic monitoring platform to track student attendance and test scores in real time, serving 3 distinct user roles: student, faculty, and administrator. Features automated at-risk student flagging and actionable analytics dashboards.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
        github: '#',
        live: '#',
        period: '2026 – Present',
        status: 'In Progress',
        image: academiqImg,
        highlights: [
            'Real-time attendance & test score tracking',
            'Automated at-risk student flagging',
            'Role-based access control with JWT',
        ],
    },
    {
        title: 'WanderHub',
        subtitle: 'Tourism Web Application',
        description: 'Built a responsive full-stack tourism platform featuring 10+ travel destinations across Bihar, with dynamic content delivery via Node.js REST APIs and MongoDB. Designed a mobile-first, cross-browser compatible UI with interactive components.',
        tech: ['Node.js', 'Express.js', 'MongoDB', 'Passport.js', 'Cloudinary', 'Mapbox'],
        github: 'https://github.com/Shubham11114/Major-Projects',
        live: 'https://wanderhub-mxi3.onrender.com/listings',
        period: 'Jan 2026 – Jun 2026',
        status: 'Completed',
        image: projectImg,
        highlights: [
            'Secure auth with Passport.js & session management',
            'Interactive maps via Mapbox API',
            'Cloudinary image uploads & reviews system',
        ],
    },
    {
        title: 'Spotify Frontend Clone',
        subtitle: 'UI Recreation Project',
        description: 'Recreated the Spotify web UI with pixel-accurate, fully responsive design, replicating core layout components including the sidebar, player bar, and content grid.',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        github: '#',
        live: '#',
        period: 'Jun 2025',
        status: 'Completed',
        image: spotifyImg,
        highlights: [
            'Pixel-accurate UI recreation',
            'Responsive sidebar, player bar & content grid',
            'Pure HTML/CSS/JS implementation',
        ],
    },
];

const Projects = () => {
    const [sectionRef, isVisible] = useScrollReveal();

    return (
        <section id="projects" className="section projects">
            <div className="container" ref={sectionRef}>
                <h2 className={`section-title reveal-fade ${isVisible ? 'revealed' : ''}`}>Featured Projects</h2>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div
                            key={project.title}
                            className={`project-card reveal-slide-up ${isVisible ? 'revealed' : ''}`}
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={`${project.title} Preview`} />
                                <div className="image-overlay"></div>
                            </div>

                            <div className="project-content">
                                <div className="project-header">
                                    <div>
                                        <div className="project-meta">
                                            <span className={`project-status ${project.status === 'In Progress' ? 'status-active' : 'status-done'}`}>
                                                <span className="status-dot"></span>
                                                {project.status}
                                            </span>
                                            <span className="project-period">{project.period}</span>
                                        </div>
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-subtitle">{project.subtitle}</p>
                                    </div>
                                </div>

                                <p className="project-description">{project.description}</p>

                                <ul className="project-highlights">
                                    {project.highlights.map((h) => (
                                        <li key={h}>{h}</li>
                                    ))}
                                </ul>

                                <div className="project-tech">
                                    {project.tech.map((t) => (
                                        <span key={t}>{t}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    {project.github && project.github !== '#' && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                            <FaGithub /> Source Code
                                        </a>
                                    )}
                                    {project.live && project.live !== '#' && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link-btn primary">
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
                                    {project.github && project.github !== '#' && (!project.live || project.live === '#') && null}
                                    {(!project.github || project.github === '#') && (!project.live || project.live === '#') && (
                                        <span className="project-link-btn disabled">Coming Soon</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
