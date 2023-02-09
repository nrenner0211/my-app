import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import headerImg from "../assets/img/header-img2.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Virtual Assistant" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [index])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* <span className="tagline">Welcome to my Portfolio</span> */}
                <h1>{`Hi, I'm Nicolette!`} <br/> 
                  <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Virtual Assistant" ]'>
                    <span className="wrap">
                      {text}
                    </span>
                  </span>
                </h1>
                  <p>
                    Front-end Developer with over a year of experience in developing, testing, and deploying web applications. <br/>
                    <span>Let's collaborate</span>!
                  </p>
                  <Row className="align-items-center">
                    <Col size={6} sm={4}>
                      <button>
                        <a href="https://docs.google.com/document/d/1DcumNcxWQ4piU0pmyhQcVcIc5guyQ-cl5WpNBM5FcEw/edit?usp=sharing">View Resumé <ArrowRightCircle size={25} /></a>
                      </button>
                    </Col>
                    <Col size={6} sm={4}>
                      <button>
                        <a href="https://calendly.com/nrennercodes">Skip the emails, schedule a Zoom meeting with one click <ArrowRightCircle size={25} /></a>
                      </button>
                    </Col>
                  </Row>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="icon"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
