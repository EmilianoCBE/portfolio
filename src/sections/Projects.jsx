import { Col, Row, Card, Image } from "antd";
import { projects } from "../utils/projects";
import "./Projects.css";

const { Meta } = Card;

export const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Proyectos</h2>
      

      <Row className="row-projects" gutter={[16, 16]}>
        {projects.map((project) => (
          <Col xs={24} sm={12} md={8} lg={8} key={project.id} className="col-projects">
            {/* <Card
              style={{
                width: 250,
                fontFamily: 'Onest Variable, sans-serif',
                backgroundColor: '#FFFFFFD9',
              }}
              cover={
                <img
                  alt="example"
                  src={project.img}
                  style={{filter: 'brightness(0.9)'}}
                />
              }
            >
              <Meta
                title={project.title}
                description={project.description}
              />
            </Card> */}
            <a className="projects-card-container" href={project.url} target="_blank">
              <img className="img-projects" src={project.img} alt={project.title} />
              <h4 className="title-projects">
                {project.title}
              </h4>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
};
