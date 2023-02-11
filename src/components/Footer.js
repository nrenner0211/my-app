import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo2.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.webp";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={6} sm={6}>
              <ul>
                <li>
                  <h4>See My Progress</h4>
                </li>
                <li>
                  <a href="https://docs.google.com/document/d/1DcumNcxWQ4piU0pmyhQcVcIc5guyQ-cl5WpNBM5FcEw/edit?usp=sharing">Resumé</a>
                </li>
                <li>
                  <a href="https://nrenner0211.github.io/my-first-portfolio/">Portfolio v1.0</a> 
                </li>
                <li>
                  <a href="https://nrenner0211.github.io/super-react-portfolio/">Portfolio v2.0</a> 
                </li>
              </ul>
          </Col>
          <Col size={6} sm={6} className="text-center text-sm-end">
              <ul>
                <li>
                  <h4>Contact</h4>
                </li>
                <li>
                  <a href="https://calendly.com/nrennercodes">Calendly</a>
                </li>
                <li>
                  <a href="mailto:nrenner@nrennercodes.com">Email</a>
                </li>
                <li>
                  <a href="https://github.com/nrenner0211">GitHub</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/nicolette-renner/">LinkedIn</a>
                </li>
              </ul>
          </Col>
          <Col size={6} sm={6}>
              <ul>
                <li>
                  <h4>Causes</h4>
                </li>
                <li>
                  <a href="https://www.greenpeace.org/usa/sustainable-agriculture/save-the-bees/">Save the Bees</a>
                </li>
                <li>
                  <a href="https://www.nwf.org/nativeplantfinder/plants">Native Plant Finder</a>
                </li>
                <li>
                  <a href="https://www.who.int/health-topics/mental-health#tab=tab_1">Mental Health Resources</a>
                </li>
              </ul>
          </Col>
          <Col size={6} sm={6} className="text-center text-sm-end">
              <ul>
                <li>
                  <h4>Directory</h4>
                </li>
                <li>
                  <a href='#home'>Home</a>
                </li>
                <li>
                  <a href='#skills'>Skills</a>
                </li>
                <li>  
                  <a href='#projects'>Projects</a>
                </li>
              </ul>
          </Col>
        </Row>
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
            <p>Copyright 2022 Nicolette Renner. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
