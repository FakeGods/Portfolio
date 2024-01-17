import React from "react";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h1>Hello there, I'm Wiktor Leszkowicz 👋</h1>
              <p>A beginner Front-end React Developer from Wrocław, Poland.</p>
            </div>
          </div>
          <div className="skills">
          <p>Skills</p>
            <div className="logos">
              <ul>
                <img src="https://skillicons.dev/icons?i=react,javascript,html,css,docker,github" alt="skill-icon"/>
              </ul>
            </div>
        </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
