import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaPython, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiC, SiMongodb, SiMysql, SiFlask, SiJsonwebtokens, SiPassport, SiCloudinary, SiMapbox } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/skills.css';

const skillsData = {
    Languages: [
        { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
        { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'Python', icon: <FaPython color="#3776AB" /> },
        { name: 'Java', icon: <FaJava color="#007396" /> },
        { name: 'C', icon: <SiC color="#A8B9CC" /> },
    ],
    Frameworks: [
        { name: 'React.js', icon: <FaReact color="#61DAFB" /> },
        { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
        { name: 'Express.js', icon: <SiExpress color="var(--text-primary)" /> },
        { name: 'JWT', icon: <SiJsonwebtokens color="#fb015b" /> },
        { name: 'Passport.js', icon: <SiPassport color="#34E27A" /> },
    ],
    Databases: [
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
        { name: 'SQL', icon: <SiMysql color="#4479A1" /> },
    ],
    'Developer Tools': [
        { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
        { name: 'GitHub', icon: <FaGithub color="var(--text-primary)" /> },
        { name: 'VS Code', icon: <VscVscode color="#007ACC" /> },
        { name: 'Cloudinary', icon: <SiCloudinary color="#3448C5" /> },
        { name: 'Mapbox', icon: <SiMapbox color="#000000" /> },
    ],
};

const coreConceptsList = [
    'REST APIs',
    'OOP',
    'Data Structures & Algorithms',
    'DBMS',
    'Operating Systems',
    'Responsive Web Design',
    'Full Stack Development',
    'Computer Networking',
    'TCP/IP',
    'Cybersecurity',
];

const Skills = () => {
    const [sectionRef, isVisible] = useScrollReveal();

    return (
        <section id="skills" className="section skills">
            <div className="container" ref={sectionRef}>
                <h2 className={`section-title reveal-fade ${isVisible ? 'revealed' : ''}`}>Technical Skills</h2>

                <div className={`skills-grid reveal-slide-up ${isVisible ? 'revealed' : ''}`}>
                    {Object.entries(skillsData).map(([category, items], index) => (
                        <div key={category} className="skill-category-card" style={{ transitionDelay: `${index * 0.1}s` }}>
                            <h3 className="skill-category-title">{category}</h3>
                            <div className="skill-icons-grid">
                                {items.map((skill) => (
                                    <div key={skill.name} className="skill-icon-item" title={skill.name}>
                                        <div className="icon-wrapper">
                                            {skill.icon}
                                        </div>
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`core-concepts reveal-slide-up ${isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.3s' }}>
                    <h3 className="concepts-title">Core Concepts</h3>
                    <div className="concepts-tags">
                        {coreConceptsList.map((concept) => (
                            <span key={concept} className="concept-tag">{concept}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
