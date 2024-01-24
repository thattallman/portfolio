import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/kanbannnn.png";
import editor from "../../Assets/Projects/aws.jpg";
import chatify from "../../Assets/Projects/youtube.png";
import bitsOfCode from "../../Assets/Projects/Food.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="YouTube Clone"
              description=" Developed a full-fledged YouTube clone using React.js, Tailwind CSS, Redux and bundlers like webpack and parcel.Leveraging the YouTube API, I successfully replicated key functionalities of the platform(trending videos, usercomment section and search bar). Employed Docker for containerization .Utilized a configuration-driven UI "
              ghLink="https://github.com/thattallman/YouTube_Clone/tree/main"
              demoLink="https://you-tube-clone-wheat-beta.vercel.app/watch?v=fW1QcEAy4rg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Food and Movies Reviews"
              description=" Developed a feature-rich project utilizing Swiggy API integration and React.js,employing Java Spring Boot for thebackend for REST API’s and MongoDB for database. Employed Docker for containerization. Utilized aconfiguration-driven UI. Crafted comprehensive SRS report with UML diagrams,modelling, and use cases,demonstrated expertise inrequirements analysis and modelling"
              ghLink="https://github.com/thattallman/FoodReviews"
              demoLink="https://github.com/thattallman/FoodReviews"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AWS Project"
              description="Deployed and hosted a highly-available application using EC2, RDS, Route 53, IAM and VPC. Automateddeployment pipeline with Jenkins, leveraging GitHub web hooks to trigger seamless deployments to Apache wheneverchanges were pushed to the Git repository"
              ghLink="https://github.com/thattallman/awsTesting"
              demoLink="http://54.174.192.206:3000/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Kanban Board"
              description=" managing and categorizing work at individual and organizational level "
              ghLink="https://github.com/thattallman/KanbanBoard?tab=readme-ov-file"
              demoLink="https://kanban-board-blush-mu.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
