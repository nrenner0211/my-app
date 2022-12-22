import { Col } from "react-bootstrap";
import { FaArrowAltCircleRight } from 'react-icons/fa';

export const ProjectCard = ({ title, description, imgUrl, siteUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt=''/>
        <div className="proj-txtx">
          <h4>{title}</h4> <br />
          <h6><a href={siteUrl}>Visit {title} <FaArrowAltCircleRight/> </a></h6> <br/>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
