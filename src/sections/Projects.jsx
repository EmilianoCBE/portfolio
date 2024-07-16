import { Col, Row } from 'antd'
import { projects } from '../utils/projects'
import './Projects.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200
    })
  })

  return (
    <div className="container-projects">
      <h2>Proyectos</h2>

      <div data-aos='fade-up'>
        <Row className="row-projects" gutter={[0, 16]}>
          {projects.map((project) => (
            <Col xs={24} sm={24} md={24} lg={24} key={project.id} className="col-projects">
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
              <article className="content-projects">
                <div className="img-container-projects">
                  <a href={project.url} target="_blank">
                    <img className="img-projects" src={project.img} alt={project.title} />
                  </a>
                </div>
                <div className="description-projects">
                  <h3 className="title-projects">
                    {project.title}
                  </h3>
                  <p>{project.description}</p>
                  <a className="url-projects" href={project.url} target="_blank">
                    <strong>Visitar página</strong>
                  </a>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}
