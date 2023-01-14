import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Professionally trained to design accessible, mobile-first applications and to produce excellent documentation. I've earned a certificate from University of North Carolina in Full Stack Web Development to add technical expertise to my construction and engineering experience.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>JavaScript Frameworks</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>API Integration</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Mobile-First Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Web Accessibilty Standards</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Front-end Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Postman API, Selenium</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Logo Design</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
