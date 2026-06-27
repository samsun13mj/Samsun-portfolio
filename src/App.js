
import React, { useEffect, useMemo, useState } from 'react';
import Lottie from 'lottie-react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './App.css';
import homeAnimation from './assets/home_animation.json';
import educationAnimation from './assets/RemixOfEducation.json';
import resumeFile from './assets/Samsun S Resume.pdf';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2300);
    return () => clearTimeout(timer);
  }, []);

  const skills = useMemo(
    () => [
      'Angular',
      'HTML / CSS',
      'JavaScript',
      'React',
      'Node JS',
      'TypeScript',
      'SQL',
      'Tailwind CSS',
    ],
    []
  );

  const internships = useMemo(
    () => [
      'Front-End Developer (Angular / React) - Bezohminds Pvt. Ltd. - Present',
      'Verilog Trainee - Maxvy Technologies Pvt. Ltd. - July 2023',
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        title: 'Auth Login',
        description:
          'Built a secure authentication flow with login validation and protected routes. Project link will be added later.',
        link: 'https://github.com/samsun13mj/Auth0-login-authentication',
      },
      {
        title: 'Two Battery Powered Electric Bicycle - Jan 2023',
        description:
          'Published a patent of innovation by designing a dual-battery system for enhanced efficiency and sustainability in electric bicycles.',
        link: '#',
      },
    ],
    []
  );

  const socialLinks = useMemo(
    () => [
      { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/samsun13mj' },
      { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/samsun-s-24b923252/' },
      { icon: <FaEnvelope />, label: 'Gmail', href: 'samsuns80.mj@gmail.com' },
    ],
    []
  );

  if (loading) {
    return (
      <div className="loading-screen">
        <h1 className="loading-brand">
          SAMSUN<span className="dots" aria-hidden="true">...</span>
        </h1>
      </div>
    );
  }

  return (
    <div className="app">
      <nav className="navbar">
        <h2>SAMSUN</h2>
        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT ME</a>
          <a href="#education">EDUCATION & SKILLS</a>
          <a href="#experience">EXPERIENCE & PROJECT</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      <a className="resume-download" href={resumeFile} download="Samsun-Resume.pdf">
        Download Resume
      </a>

      <HomeSection />

      <section id="about">
        <div className="container about-container about-grid">
          <div className="about-animation">
            <Lottie animationData={educationAnimation} loop />
          </div>
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              Aspiring software Developer with the foundation in languages like
              Typescript, Javascript, Sql. I am proficient in IoT and some
              simulation softwares like Tinkercad and wokwi. Looking for an
              entry level positions to leverage my skills and passion focusing
              on software development.
            </p>
          </div>
        </div>
      </section>

      <section id="education">
        <div className="container">
          <h2>Education & Skills</h2>
          <div className="education-highlight">
            <h3>BE (ECE) - SCAD College of Engineering and Technology</h3>
            <p>CGPA: 7.98 | 2024</p>
          </div>
          <h3 className="skills-title">Skills</h3>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="container">
          <h2>Experience & Projects</h2>
          <h3>Internship</h3>
          <div className="info-list">
            {internships.map((item) => (
              <div className="info-card" key={item}>
                {item}
              </div>
            ))}
          </div>

          <h3>Projects</h3>
          <div className="info-list">
            {projects.map((project) => (
              <div className="project-card" key={project.title}>
                <div className="project-header">
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                  <a href={project.link} className="view-button">View</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2>Contact</h2>
          <div className="social-links">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                className="social-link"
                href={item.href}
                aria-label={item.label}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function HomeSection() {
  return (
    <section id="home" className="home-section">
      <div className="home-animation-overlay">
        <Lottie animationData={homeAnimation} loop />
      </div>
      <div className="home-copy">
        <h1 className="home-title">Hi I&apos;m SAMSUN</h1>
        <p className="home-subtitle">Welcome to my portfolio</p>
      </div>
    </section>
  );
}

export default App;
