import React, { useEffect, useState, useRef } from "react";
import "./AboutMe.css";
import Nav from "./Nav";
import profilePic from "./Images/profile.jpg";

const AboutMe = () => {
  const [sectionHeight, setSectionHeight] = useState(window.innerHeight);
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (navRef.current) {
        const navbarHeight = navRef.current.offsetHeight;
        setSectionHeight(window.innerHeight - navbarHeight);
      }
    };
    
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div ref={navRef}>
        <Nav />
      </div>

      <section
        className="about-me"
        id="about"
        style={{ height: `${sectionHeight}px` }}
      >
        <div className="about-container">
          <img src={profilePic} alt="Renish R" className="profile-img" />

          <div className="about-content">
            <h1>Renish R</h1>
            <p className="tagline">
              Java Backend Developer | Passionate about Building Robust & Scalable Systems
            </p>

            <h2>About Me</h2>
            <p>
              Hi, I’m <strong>Renish R</strong> — a dedicated{" "}
              <strong>Java Backend Developer</strong> passionate about building
              robust and scalable systems. I specialize in designing efficient
              backend architectures with <strong>Java, Spring Boot</strong>, and
              databases like <strong>MySQL</strong> and <strong>MongoDB</strong>,
              while also working with frontend technologies such as{" "}
              <strong>HTML, CSS, and React</strong>. I thrive on solving complex
              problems, leveraging modern tools, and turning ideas into impactful
              real-world solutions.
            </p>

            <h2>Skills</h2>
            <ul className="skills-list">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>MySQL</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>MongoDB</li>
            </ul>

            <h2>Find Me On</h2>
            <div className="links">
              <a
                href="https://www.linkedin.com/in/renish-r/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Renish-R"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Portfolio (Coming Soon)
              </a>
            </div>

            <h2>Contact</h2>
            <a href="mailto:renobruez82@gmail.com" className="email-link">
              renobruez82@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
