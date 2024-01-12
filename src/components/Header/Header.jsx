import React from "react";


const Header = () => {
  return (
    <section id="home">
      <div className="headerContent">
        
        <span className="hello">Hi there, I'm Wiktor Leszkowicz 👋</span>
        <p className="headerText"> A beginner Front-end React Developer basen in Wrocław, Poland.</p>
        <div className="skill">
          <p>Tech Stack</p>
          <div className="logos">
            <ul>
             <img src="https://skillicons.dev/icons?i=react,javascript,html,css,docker,github" />
            </ul>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Header;