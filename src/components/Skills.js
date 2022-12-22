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
                        <p>I'm a junior full stack developer seeking my first position web development. <br></br> 
                        I've earned a certificate from University of North Carolina in Full Stack Web Development to add technical expertise to my construction and engineering experience. Professionally trained to design accessible, mobile-first applications. Specializing in React styled components and developing organized, reusable code.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>React & Next.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>CSS, Sass, & Styled Components</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>JavaScript & Node.js</h5>
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
                                <h5>Front-end Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Software Quality Assurance</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Manual Testing with Postman API</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="" /> */}
    </section>
  )
}
