// Import image
import profileImg from '../images/profile.jpg';
import '../styles/about.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container about-container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p className="lead">
                            I’m Shubham, a passionate <span className="highlight">Full Stack MERN Developer</span> based in India.
                        </p>
                        <p>
                            My journey in web development started with a curiosity for how things work on the internet, which quickly turned into a passion for building scalable, user-friendly web applications.
                        </p>
                        <p>
                            I specialize in crafting modern web experiences using clean architecture, performance-driven code, and elegant UI. Whether it's a complex backend system or a pixel-perfect frontend, I love solving problems and bringing ideas to life.
                        </p>

                        <div className="stats-grid">
                            <div className="stat-card">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">1.5+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Happy Clients</span>
                            </div>
                        </div>

                        <div className="about-cta">
                            <a href="#contact" className="btn btn-primary">Let's Talk</a>
                            <a href="/resume/resume.pdf" download className="btn btn-outline" style={{ marginLeft: '15px' }}>Download CV</a>
                        </div>
                    </div>

                    <div className="about-visual">
                        <div className="profile-card">
                            <img src={profileImg} alt="Shubham" className="profile-img" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
