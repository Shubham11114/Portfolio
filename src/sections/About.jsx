// Import image
import profileImg from '../images/profile.jpeg';
import { FaMapMarkerAlt, FaGraduationCap, FaCode, FaTrophy } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import resumePdf from '../../public/resume/resume.pdf';
import '../styles/about.css';

const About = () => {
    const [sectionRef, isVisible] = useScrollReveal();

    return (
        <section id="about" className="section about">
            <div className="container about-container" ref={sectionRef}>
                <h2 className={`section-title reveal-fade ${isVisible ? 'revealed' : ''}`}>About Me</h2>
                <div className={`about-content reveal-slide-up ${isVisible ? 'revealed' : ''}`}>
                    <div className="about-text">
                        <p className="lead">
                            I'm Shubham Kumar, a passionate <span className="highlight">MERN Stack Developer</span> based in Muzaffarpur, Bihar, India.
                        </p>
                        <p>
                            My journey in web development started with a curiosity for how things work on the internet, which quickly turned into a passion for building scalable, user-friendly web applications. I have hands-on experience building end-to-end web applications — from designing responsive UIs to developing RESTful APIs and integrating databases.
                        </p>
                        <p>
                            Strong foundations in Data Structures, OOP, and modern JavaScript. Eager to contribute as a Junior MERN Stack Developer and grow within a collaborative, product-focused team.
                        </p>

                        <div className="info-chips">
                            <div className="info-chip">
                                <FaMapMarkerAlt className="chip-icon" />
                                <span>Muzaffarpur, Bihar, India</span>
                            </div>
                            <div className="info-chip">
                                <FaGraduationCap className="chip-icon" />
                                <span>Diploma in CSE — CGPA: 8.68</span>
                            </div>
                            <div className="info-chip">
                                <FaCode className="chip-icon" />
                                <span>MERN Stack Specialist</span>
                            </div>
                            <div className="info-chip">
                                <FaTrophy className="chip-icon" />
                                <span>3rd Rank — Bug Hunt Bonanza</span>
                            </div>
                        </div>

                        <div className="stats-grid">
                            <div className="stat-card">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Projects Built</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">8.68</span>
                                <span className="stat-label">CGPA Score</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Technologies</span>
                            </div>
                        </div>

                        <div className="about-cta">
                            <a href="#contact" className="btn btn-primary">Let's Talk</a>
                            <a href={resumePdf} download="resume.pdf" className="btn btn-outline" style={{ marginLeft: '15px' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px', verticalAlign: 'middle' }}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="about-visual">
                        <div className="profile-card">
                            <img src={profileImg} alt="Shubham Kumar" className="profile-img" style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
                        </div>
                        <div className="floating-badge badge-1">
                            <span className="badge-emoji">⚡</span>
                            <span>MERN Stack</span>
                        </div>
                        <div className="floating-badge badge-2">
                            <span className="badge-emoji">🎯</span>
                            <span>Problem Solver</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
