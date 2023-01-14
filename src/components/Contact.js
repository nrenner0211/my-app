import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

import contactImg from "../assets/img/contact-img2.svg";
import contactImg2 from "../assets/img/icon.svg";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
      <h2>Get In Touch</h2>
        <Row className="align-items-center">
        <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <img src={contactImg2} alt=""/>
                </div>}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt=""/>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
