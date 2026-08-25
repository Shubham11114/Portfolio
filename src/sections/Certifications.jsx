import React from 'react';
import { FaCertificate, FaShieldAlt, FaNetworkWired, FaPython, FaLaptopCode, FaBriefcase } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/certifications.css';

const certificationsData = [
    {
        title: 'Full Stack Development Internship',
        issuer: 'Ranjan Technovate Pvt. Ltd.',
        date: 'Jul 2026',
        icon: <FaBriefcase />,
        color: '#3b82f6',
    },
    {
        title: 'Software Engineering Job Simulation',
        issuer: 'JPMorgan Chase & Co. via Forage',
        date: 'Jan 2026',
        icon: <FaLaptopCode />,
        color: '#8b5cf6',
    },
    {
        title: 'CCNA: Introduction to Networks',
        issuer: 'Cisco',
        date: 'Nov 2025',
        icon: <FaNetworkWired />,
        color: '#06b6d4',
    },
    {
        title: 'Python Essentials 1',
        issuer: 'Cisco',
        date: 'Jan 2025',
        icon: <FaPython />,
        color: '#3776AB',
    },
    {
        title: 'PCAP – Programming Essentials in Python',
        issuer: 'Cisco',
        date: '2024',
        icon: <FaPython />,
        color: '#3776AB',
    },
    {
        title: 'Cybersecurity Essentials',
        issuer: 'Cisco',
        date: '2024',
        icon: <FaShieldAlt />,
        color: '#ef4444',
    },
    {
        title: 'Introduction to Cybersecurity',
        issuer: 'Cisco',
        date: '2024',
        icon: <FaShieldAlt />,
        color: '#f59e0b',
    },
    {
        title: 'IT Essentials: PC Hardware and Software',
        issuer: 'Cisco',
        date: 'Jan 2024',
        icon: <FaCertificate />,
        color: '#10b981',
    },
];

const Certifications = () => {
    const [sectionRef, isVisible] = useScrollReveal();

    return (
        <section id="certifications" className="section certifications">
            <div className="container" ref={sectionRef}>
                <h2 className={`section-title reveal-fade ${isVisible ? 'revealed' : ''}`}>
                    Certifications
                    <span className="cert-count">{certificationsData.length}</span>
                </h2>

                <div className={`certs-grid reveal-slide-up ${isVisible ? 'revealed' : ''}`}>
                    {certificationsData.map((cert, index) => (
                        <div
                            key={cert.title}
                            className="cert-card"
                            style={{ transitionDelay: `${index * 0.08}s` }}
                        >
                            <div className="cert-icon-wrap" style={{ background: `${cert.color}20`, color: cert.color, border: `1px solid ${cert.color}30` }}>
                                {cert.icon}
                            </div>
                            <div className="cert-info">
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-issuer">{cert.issuer}</p>
                            </div>
                            <span className="cert-date">{cert.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
