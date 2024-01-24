import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rachit Saxena </span>
            from <span className="purple"> Chandigarh, India.</span>
            I have completed my B.Tech  in Computer Science and Engineering at VIT
            Vellore .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar 
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Non-Fiction Books (philosophy)
            </li>
            <li className="about-activity">
              <ImPointRight /> Meditation 
            </li>
            <li className="about-activity">
              <ImPointRight /> FootBall
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The core of man's spirit comes from new experiences and learning "{" "}
          </p>
          <footer className="blockquote-footer">Rachit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
