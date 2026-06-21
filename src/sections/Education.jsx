import React from 'react';
import { FaGraduationCap, FaAward, FaMedal, FaTrophy } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/education.css';

const Education = () => {
    const [sectionRef, isVisible] = useScrollReveal();

    return (
        <section id="education" className="section education">
            <div className="container" ref={sectionRef}>
                <h2 className={`section-title reveal-fade ${isVisible ? 'revealed' : ''}`}>Education & Achievements</h2>

                <div className={`education-grid reveal-slide-up ${isVisible ? 'revealed' : ''}`}>
                    <div className="edu-card" style={{ transitionDelay: '0.1s' }}>
                        <div className="edu-icon-wrap">
                            <FaGraduationCap />
                        </div>
                        <div className="edu-details">
                            <h3 className="edu-degree">Diploma in Computer Science and Engineering</h3>
                            <p className="edu-institution">State Board of Technical Education, Patna</p>
                            <p className="edu-period">2023 – 2026</p>
                            <div className="edu-score">
                                <span className="score-badge">CGPA: 8.68</span>
                            </div>
                            <div className="edu-coursework">
                                <h4>Relevant Coursework</h4>
                                <div className="coursework-tags">
                                    <span>Data Structures</span>
                                    <span>Algorithm Analysis</span>
                                    <span>DBMS</span>
                                    <span>Internet Technology</span>
                                    <span>Operating Systems</span>
                                    <span>OOP in Java</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="achievement-card" style={{ transitionDelay: '0.2s' }}>
                        <div className="achievement-header">
                            <FaTrophy className="trophy-icon" />
                            <h3>Hackathons & Competitions</h3>
                        </div>
                        <div className="achievement-item">
                            <div className="achievement-badge">
                                <FaMedal />
                                <span className="rank">3rd Rank</span>
                            </div>
                            <div className="achievement-info">
                                <h4>Bug Hunt Bonanza</h4>
                                <p className="achievement-org">Government Polytechnic Muzaffarpur — April 2026</p>
                                <ul className="achievement-details">
                                    <li>Secured 3rd rank among 100+ participants</li>
                                    <li>Identified C programming syntax errors and logic bugs under time constraints</li>
                                    <li>Demonstrated debugging, analytical thinking, and team collaboration</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
