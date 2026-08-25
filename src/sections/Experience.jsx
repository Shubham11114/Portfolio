import React from 'react';
import { FaBriefcase, FaRocket, FaLaptopCode, FaChartLine, FaUserGraduate } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/experience.css';

const experienceData = [
    {
        role: 'Full Stack Developer',
        company: 'AcademIQ',
        type: 'Self-employed',
        period: 'Jun 2026 – Present',
        description: 'Building a full-stack academic intelligence platform with role-based dashboards for students, faculty, and admins. Features real-time attendance tracking, automated at-risk student flagging, and JWT authentication.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
        icon: <FaRocket />,
        current: true,
    },
    {
        role: 'Full Stack Developer Intern',
        company: 'Ranjan Technovate Pvt. Ltd.',
        type: 'Internship',
        period: 'Jun – Jul 2026',
        description: 'Worked on production MERN stack applications at a DPIIT-recognised, MSME-registered company. Contributed to real-world full-stack development projects and gained industry experience.',
        tech: ['React.js', 'Node.js', 'MongoDB', 'MERN'],
        icon: <FaBriefcase />,
        current: false,
    },
    {
        role: 'Software Engineering Virtual Experience',
        company: 'JPMorgan Chase & Co.',
        type: 'via Forage',
        period: 'Jan 2026',
        description: 'Completed a software engineering job simulation working with Kafka, REST APIs, and H2 databases. Gained exposure to enterprise-scale engineering practices.',
        tech: ['Kafka', 'REST APIs', 'H2 Database', 'Java'],
        icon: <FaChartLine />,
        current: false,
    },
    {
        role: 'Web Development Intern',
        company: 'VaultofCodes',
        type: 'Summer Internship',
        period: 'Jun – Jul 2025',
        description: 'Completed a summer internship focused on web development, building real-world projects and strengthening frontend and backend skills.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
        icon: <FaLaptopCode />,
        current: false,
    },
    {
        role: 'Internship Trainee',
        company: 'Internshala',
        type: 'Training',
        period: 'Apr – Jun 2025',
        description: 'Completed an internship training program, working on practical web development assignments and building portfolio-ready projects.',
        tech: ['Web Development', 'JavaScript', 'React.js'],
        icon: <FaUserGraduate />,
        current: false,
    },
];

const Experience = () => {
    const [sectionRef, isVisible] = useScrollReveal();

    return (
        <section id="experience" className="section experience">
            <div className="container" ref={sectionRef}>
                <h2 className={`section-title reveal-fade ${isVisible ? 'revealed' : ''}`}>Experience</h2>

                <div className={`experience-timeline reveal-slide-up ${isVisible ? 'revealed' : ''}`}>
                    {experienceData.map((exp, index) => (
                        <div
                            key={exp.company}
                            className={`exp-card ${exp.current ? 'exp-current' : ''}`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="exp-icon-wrap">
                                {exp.icon}
                            </div>
                            <div className="exp-content">
                                <div className="exp-header">
                                    <div>
                                        <h3 className="exp-role">{exp.role}</h3>
                                        <p className="exp-company">
                                            {exp.company}
                                            <span className="exp-type">{exp.type}</span>
                                        </p>
                                    </div>
                                    <div className="exp-meta">
                                        <span className="exp-period">{exp.period}</span>
                                        {exp.current && <span className="exp-status-badge">Current</span>}
                                    </div>
                                </div>
                                <p className="exp-description">{exp.description}</p>
                                <div className="exp-tech">
                                    {exp.tech.map((t) => (
                                        <span key={t} className="exp-tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
