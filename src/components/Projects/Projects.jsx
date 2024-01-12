import Budget from "./Budget.png";
import Currency from "./Currency Convertor.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="project-content">
          <p className="port">portfolio</p>
          <h3 className="smart">
            "A creative project is a moving target. You never end up where you
            start" ~Evangeline Lily
          </h3>
          <div className="projects-grid">
            <div className="project"></div>
            <img src={Budget} className="project_img"></img>
            <div className="project_text"></div>
            <div className="project"></div>
            <img src={Currency} className="project_img2"></img>
            <div className="project_text"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
