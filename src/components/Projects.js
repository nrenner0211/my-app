import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj-img1.webp";
import projImg2 from "../assets/img/proj-img2.webp";
import projImg3 from "../assets/img/proj-img3.webp";
import projImg4 from "../assets/img/proj-img4.webp";
import projImg5 from "../assets/img/proj-img5.webp";
import projImg6 from "../assets/img/proj-img6.webp";
import projImg7 from "../assets/img/proj-img7.webp";

export const Projects = () => {

  const projects = [
    {
      title: "Codex 🤖",
      description: "This cutting-edge app interfaces with the OpenAI ChatGPT API. Codex analyzes code snippets, generates content, and can write cover letters. Go ahead, ask Codex anything!",
      imgUrl: projImg2,
      siteUrl: "https://codex-ai-lovat.vercel.app/",
      source: "https://github.com/nrenner0211/codex-ai"
    },
    {
      title: "Dad-app",
      description: "Ever wonder if it's a good day to mow? Do you like dad jokes? We made an app for that!",
      imgUrl: projImg3,
      siteUrl: "https://nrenner0211.github.io/dad_app/",
      source: "https://github.com/nrenner0211/dad_app"
    },
    {
      title: "3D Galaxy Resume 🚀",
      description: "A 3d space-themed resume, because why not? Tech stack includes Vite and Three.js",
      imgUrl: projImg1,
      siteUrl: "https://nrenner0211.github.io/intergalactic-3d-resume/",
      source: "https://github.com/nrenner0211/intergalactic-3d-resume"
    },
    {
      title: "Git it Done",
      description: "An app that interfaces with GitHub API to fetch open issues. You can search by username or topic",
      imgUrl: projImg6,
      siteUrl: "https://nrenner0211.github.io/git-it-done/",
      source: "https://github.com/nrenner0211/git-it-done"
    },
  ]

  const projects2 = [
    {
      title: "Dolla Virtual Banking",
      description: "A smooth, responsive online banking experience with scroll animations. Tech stack includes React and styled components",
      imgUrl: projImg5,
      siteUrl: "https://nrenner0211.github.io/smooth-scroll/",
      source: "https://github.com/nrenner0211/smooth-scroll"
    },
    {
      title: "NikiCodes Shop",
      description: "A front-end e-commerce app featuring shopping cart functionality",
      imgUrl: projImg7,
      siteUrl: "https://nrenner0211.github.io/ecommerce1/",
      source: "https://github.com/nrenner0211/ecommerce1"
    },
    {
      title: "Sass Landing",
      description: "A simple marketing landing page built with HTML & Sass",
      imgUrl: projImg4,
      siteUrl: "https://nrenner0211.github.io/sass-landing/",
      source: "https://github.com/nrenner0211/sass-landing"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A few of my favorite projects. Hover over the cards for more information!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Featured</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Front End</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Full Stack</Nav.Link>
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
                    <Row>
                        {
                          projects2.map((project, index) => {
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
    </section>
  )
}
