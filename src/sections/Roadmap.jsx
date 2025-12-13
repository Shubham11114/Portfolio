import React, { useEffect, useRef } from 'react';
import '../styles/roadmap.css';

const roadmapData = [
    {
        year: '2026',
        title: 'Senior Developer Goal',
        description: 'Aiming to lead major projects and mentor junior developers while mastering cloud architecture.',
        side: 'left'
    },
    {
        year: '2025',
        title: 'Full Stack Proficiency',
        description: 'Mastered the MERN stack and built complex applications like WanderHub. Explored Advanced React patterns.',
        side: 'right'
    },
    {
        year: '2025',
        title: 'Backend Dive',
        description: 'Delved deep into Node.js, Express, and Databases. Learned about APIs, authentication, and server-side logic.',
        side: 'left'
    },
    {
        year: '2024',
        title: 'Frontend Foundations',
        description: 'Started the journey with HTML, CSS, and JavaScript. Built first responsive websites and learned React basics.',
        side: 'right'
    }
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
                                <span className="roadmap-year">{item.year}</span>
                                <h3 className="roadmap-title">{item.title}</h3>
                                <p className="roadmap-desc">{item.description}</p>
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
