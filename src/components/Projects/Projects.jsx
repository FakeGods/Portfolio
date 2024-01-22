import Budget from "./Budget.png";
import Currency from "./Currency Convertor1.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="project-content">
          <p>portfolio</p>
          <h3>
            "A creative project is a moving target. You never end up where you
            start" ~Evangeline Lily
          </h3>
          </div>
          <div className="projects-grid">
            <div className="pro pro__1 undefined">
              <div className="pro__img">
                <img src={Budget} alt="pro__img"></img>
                </div>
              <div className="pro__text">
                <h3>Budget</h3>
                <p>Dynamic budgeting application, made using HTML, CSS and JavaScript to deliver a intuitive financial management  experience.This application empowers users to take control of their finances, offering a user-friendly interface for effective planning and tracking.
                </p>
            </div>
            </div>
            <div className="pro pro__1 reversed-proj">
            <div className="pro__img">
              <img src={Currency} alt="pro__img"></img>
              </div>
              <div className="pro__text">
                <h3>Currency Converter</h3>
                <p>Advanced application built using React enabling users to quickly and accurately convert currencies based on the latest exchange rates using a financial API.</p>
            </div>
            
            </div>
          </div>
        
      </div>
    </section>
  );
};

export default Projects;
