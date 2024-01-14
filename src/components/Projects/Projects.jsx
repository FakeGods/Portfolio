import Budget from "./Budget.png";
import Currency from "./Currency Convertor.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="project-content">
          <p>portfolio</p>
          <h3 className="smart">
            "A creative project is a moving target. You never end up where you
            start" ~Evangeline Lily
          </h3>
          <div className="projects-grid">
            <div className="pro pro__1 undefined">
              <div className="pro__img">
                <img src={Budget} alt="pro__im"></img>
                </div>
              <div className="pro__text">
                <h3>Tytuł </h3>
                <p>Co to kurwa jest</p>
              <div className="stack"></div>
              <div className="links"></div>
            </div>
            </div>
            <div className="pro pro__1 reserved-proj">
              <img src={Currency} alt="pro__img"></img>
              <div className="pro__text">
                <h3>Tytuł</h3>
                <p>Co to kurwa jest</p>
              <div className="stack"></div>
              <div className="links"></div>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
