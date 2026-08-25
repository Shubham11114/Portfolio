import React, { useEffect, useRef } from 'react';
import { FaGraduationCap, FaTrophy, FaRocket, FaCode, FaServer, FaLaptopCode, FaBriefcase } from 'react-icons/fa';
import '../styles/roadmap.css';

const roadmapData = [
    {
        year: '2026–Present',
        title: 'B.Tech CSE @ HNBGU — Lateral Entry',
        description: 'Pursuing B.Tech in Computer Science and Engineering at Hemwati Nandan Bahuguna Garhwal University, Srinagar, Uttarakhand via lateral entry into the 2nd year.',
        icon: <FaGraduationCap />,
        side: 'left',
        tags: ['B.Tech', 'CSE', 'HNBGU'],
    },
    {
        year: 'Jun–Jul 2026',
        title: 'Full Stack Developer Intern — Ranjan Technovate Pvt. Ltd.',
        description: 'Completed a full-stack developer internship at a DPIIT-recognised, MSME-registered company. Worked on production MERN stack applications and gained industry experience.',
        icon: <FaBriefcase />,
        side: 'right',
        tags: ['React.js', 'Node.js', 'MongoDB', 'MERN'],
    },
    {
        year: '2026',
        title: 'AcademIQ & Bug Hunt Bonanza',
        description: 'Built AcademIQ — a full-stack academic monitoring platform. Secured 3rd rank in Bug Hunt Bonanza hackathon among 100+ participants.',
        icon: <FaRocket />,
        side: 'left',
        tags: ['React.js', 'Node.js', 'JWT', 'MongoDB'],
    },
    {
        year: '2025–2026',
        title: 'WanderHub — Full Stack Tourism Platform',
        description: 'Built a responsive full-stack tourism platform with Passport.js auth, Mapbox maps, Cloudinary image uploads, and deployed on Render.',
        icon: <FaLaptopCode />,
        side: 'right',
        tags: ['Express.js', 'MongoDB', 'Passport.js', 'Mapbox', 'Cloudinary', 'Render'],
    },
    {
        year: '2025',
        title: 'Spotify Clone + VaultofCodes & Internshala Internships',
        description: 'Recreated the Spotify web UI with pixel-accurate responsive design. Completed internships at VaultofCodes and via Internshala, building real-world projects.',
        icon: <FaCode />,
        side: 'left',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
    },
    {
        year: '2024–2025',
        title: 'Backend Deep Dive + Cisco CCNA + Python Certs',
        description: 'Deep dive into Node.js, Express, MongoDB, and SQL. Earned Cisco CCNA and Python certifications alongside backend architecture skills.',
        icon: <FaServer />,
        side: 'right',
        tags: ['Node.js', 'Express.js', 'MongoDB', 'Cisco CCNA', 'Python'],
    },
    {
        year: '2023',
        title: 'Diploma in CSE — Govt. Polytechnic Muzaffarpur',
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
