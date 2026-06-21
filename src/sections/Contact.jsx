import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/contact.css';

const Contact = () => {
    const [sectionRef, isVisible] = useScrollReveal();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:shubhamv9546@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
        window.open(mailtoLink, '_blank');
    };

    return (
        <section id="contact" className="section contact">
            <div className="container" ref={sectionRef}>
                <h2 className={`section-title reveal-fade ${isVisible ? 'revealed' : ''}`}>Get In Touch</h2>
                <p className={`contact-subtitle reveal-fade ${isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.1s' }}>
                    Have a project in mind or want to collaborate? Feel free to reach out!
                </p>

                <div className={`contact-grid reveal-slide-up ${isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.2s' }}>
                    <div className="contact-info">
                        <div className="contact-card">
                            <div className="contact-item">
                                <div className="contact-icon-wrap">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:shubhamv9546@gmail.com">shubhamv9546@gmail.com</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon-wrap">
                                    <FaPhone />
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tel:+919341027533">+91 9341027533</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon-wrap">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <span>Muzaffarpur, Bihar, India</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact-socials">
                            <a href="https://www.linkedin.com/in/shubham11114" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                                <FaLinkedinIn />
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/Shubham11114" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                                <FaGithub />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="contact-name">Name</label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-email">Email</label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    name="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-subject">Subject</label>
                            <input
                                type="text"
                                id="contact-subject"
                                name="subject"
                                placeholder="What's this about?"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-message">Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                placeholder="Your message..."
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn">
                            <span>Send Message</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"/></svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
