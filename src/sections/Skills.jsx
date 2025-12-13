import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaJava, FaPython, FaGitAlt, FaGithub, FaNpm } from 'react-icons/fa';
import { SiVite, SiJavascript, SiExpress, SiC, SiMongodb, SiMysql, SiPostgresql, SiCanva, SiPostman } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import '../styles/skills.css';

const skillsData = {
    Frontend: [
        { name: 'React', icon: <FaReact color="#61DAFB" /> },
        { name: 'Vite', icon: <SiVite color="#646CFF" /> },
        { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
        { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> },
    ],
    Backend: [
        { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
        { name: 'Express.js', icon: <SiExpress color="var(--text-primary)" /> },
        { name: 'Java', icon: <FaJava color="#007396" /> },
        { name: 'Python', icon: <FaPython color="#3776AB" /> },
        // { name: 'C', icon: <SiC color="#A8B9CC" /> },
    ],
    Database: [
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
        { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> },
    ],
    Tools: [
        { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
        { name: 'GitHub', icon: <FaGithub color="var(--text-primary)" /> },
        { name: 'NPM', icon: <FaNpm color="#CB3837" /> },
        { name: 'VS Code', icon: <VscVscode color="#007ACC" /> },
        { name: 'Canva', icon: <SiCanva color="#00C4CC" /> },
        { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
    ],
};

const Skills = () => {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>

                <div className="skills-grid">
                    {Object.entries(skillsData).map(([category, items]) => (
                        <div key={category} className="skill-category-card">
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
            </div>
        </section>
    );
};

export default Skills;
