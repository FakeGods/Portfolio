import React from "react";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h1>Hello there, I'm Wiktor Leszkowicz 👋</h1>
              <p>A beginner Full Stack Developer from Wrocław, Poland.</p>
              <ul>
                <img
                  src="https://skillicons.dev/icons?i=react,javascript,html,css,docker,github"
                  alt="skill-icon"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
