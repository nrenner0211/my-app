import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo2.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/nicolette-renner/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/nrenner0211"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.facebook.com/niiiiiiiiiiiiiiiiiiiiiiiik/"><img src={navIcon3} alt="Facebook Icon" /></a>
            </div>
            <p>Copyright 2022 Nicolette Renner. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
