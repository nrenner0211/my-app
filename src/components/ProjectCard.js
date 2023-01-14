import { Col } from "react-bootstrap";
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { DiGitBranch } from 'react-icons/di';

export const ProjectCard = ({ title, description, imgUrl, siteUrl, source }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt=''/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          <h6><a href={siteUrl}>Visit {title} <FaArrowAltCircleRight/> </a></h6>
          <h6><a href={source}>Source <DiGitBranch/> </a></h6> 
        </div>
      </div>
    </Col>
  )
}
