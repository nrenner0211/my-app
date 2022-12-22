import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "3D Galaxy Resume",
      description: "A 3d space-themed resume, because why not? Tech stack includes Vite and Three.js",
      imgUrl: projImg1,
      siteUrl: "https://nrenner0211.github.io/intergalactic-3d-resume/"
    },
    {
      title: "Dolla Virtual Banking",
      description: "A smooth, responsive online banking experience with scroll animations. Tech stack includes React and styled components",
      imgUrl: projImg2,
      siteUrl: "https://nrenner0211.github.io/smooth-scroll/"
    },
    {
      title: "Dad-app",
      description: "Ever wonder if it's a good day to mow? Do you wish to lighten the mood with a silly joke? We made an API for that!",
      imgUrl: projImg3,
      siteUrl: "https://nrenner0211.github.io/dad_app/"
    },
    {
      title: "Landing Page",
      description: "A simple landing page featuring HTML & Sass",
      imgUrl: projImg4,
      siteUrl: "https://nrenner0211.github.io/sass-landing/"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Featured projects</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Front-End</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Full Stack</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Mobile</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Coming soon!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming soon!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" alt="" src={colorSharp2}></img> */}
    </section>
  )
}
