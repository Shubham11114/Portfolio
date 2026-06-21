import React, { useEffect, useRef } from 'react';
import { FaGraduationCap, FaTrophy, FaRocket, FaCode, FaServer, FaLaptopCode } from 'react-icons/fa';
import '../styles/roadmap.css';

const roadmapData = [
    {
        year: '2026',
        title: 'AcademIQ & Hackathon Win',
        description: 'Building AcademIQ — a full-stack academic monitoring platform. Secured 3rd rank in Bug Hunt Bonanza hackathon among 100+ participants.',
        icon: <FaRocket />,
        side: 'left',
        tags: ['React.js', 'Node.js', 'JWT', 'MongoDB'],
    },
    {
        year: '2025–2026',
        title: 'WanderHub — Full Stack Tourism Platform',
        description: 'Built a responsive full-stack tourism platform with 10+ destinations, dynamic REST APIs, MongoDB backend, and mobile-first UI.',
        icon: <FaLaptopCode />,
        side: 'right',
        tags: ['Express.js', 'MongoDB', 'REST APIs'],
    },
    {
        year: '2025',
        title: 'Frontend Mastery & Spotify Clone',
        description: 'Recreated the Spotify web UI with pixel-accurate responsive design. Mastered React.js, advanced CSS, and JavaScript patterns.',
        icon: <FaCode />,
        side: 'left',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
    },
    {
        year: '2024–2025',
        title: 'Backend & Database Deep Dive',
        description: 'Delved into Node.js, Express, MongoDB, and SQL. Learned about RESTful APIs, authentication patterns, and server-side architecture.',
        icon: <FaServer />,
        side: 'right',
        tags: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
    },
    {
        year: '2023',
        title: 'Diploma in Computer Science',
        description: 'Started Diploma in CSE at Government Polytechnic Muzaffarpur under SBTE, Patna. Began learning HTML, CSS, JavaScript, and C programming.',
        icon: <FaGraduationCap />,
        side: 'left',
        tags: ['HTML', 'CSS', 'C', 'Java'],
    },
];

const Roadmap = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const items = document.querySelectorAll('.roadmap-item');
        items.forEach((item) => observerRef.current.observe(item));

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, []);

    return (
        <section id="roadmap" className="section roadmap">
            <div className="container">
                <h2 className="section-title">My Journey</h2>

                <div className="roadmap-timeline">
                    <div className="timeline-line"></div>

                    {roadmapData.map((item, index) => (
                        <div key={index} className={`roadmap-item ${item.side}`}>
                            <div className="roadmap-content">
                                <div className="roadmap-icon-wrapper">
                                    {item.icon}
                                </div>
                                <span className="roadmap-year">{item.year}</span>
                                <h3 className="roadmap-title">{item.title}</h3>
                                <p className="roadmap-desc">{item.description}</p>
                                {item.tags && (
                                    <div className="roadmap-tags">
                                        {item.tags.map((tag) => (
                                            <span key={tag} className="roadmap-tag">{tag}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="roadmap-dot"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
