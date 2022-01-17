import React from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import profilPic from "../../images/profile-img.jpg";
import CV from "../../documents/CV - Bioletto Santiago .pdf";

export const About = () => {
  return (
    <section id="About">
      <Container className="mt-5">
        <Row>
          <Col lg="6">
            <h1>Hello, my name is Santiago</h1>
            <p>
              I'm a software developer and in this porfolio you could find representation
              of all that I've learned and accomplished.
            </p>
            <a href={CV} target="_blank">
              <button className="btn btn-light">Download CV</button>
            </a>
          </Col>
          <Col
            lg="6"
            className="d-flex justify-content-center  align-items-center "
          >
            <img
              src={profilPic}
              alt=""
              className="rounded-circle "
              width="200px"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
