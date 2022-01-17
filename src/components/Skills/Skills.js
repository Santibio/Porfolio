import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import bootstrap from "../../images/bootstrap.png";
import nodejs from "../../images/nodejs.png";
import express from "../../images/express.png";
import react from "../../images/react.png";
import redux from "../../images/redux.png";
import postgres from "../../images/postgres.png";
import sequelize from "../../images/sequelize.png";
import git from "../../images/git.png";
import github from "../../images/github.png";

const Skills = () => {
  return (
    <Container id="Skills">
      <Row className="mt-3">
        <h2>Skills</h2>
      </Row>
      <Row xs={2} md={4} className="g-4 mt-3">
        <Col className="mt-3 d-flex justify-content-center  align-items-center ">
          <img src={html} alt="" height="120px" />
        </Col>
        <Col className="mt-3 d-flex justify-content-center  align-items-center ">
          <img src={css} alt="" height="120px" />
        </Col>
        <Col className="mt-3 d-flex justify-content-center  align-items-center ">
          <img src={js} alt="" height="120px" />
        </Col>
        <Col className="mt-3 d-flex justify-content-center  align-items-center ">
          <img src={bootstrap} alt="" height="120px" />
        </Col>
      </Row>
      <Row xs={2} md={4} className="g-4 mt-3">
        <Col className="mt-3 d-flex justify-content-center  align-items-center ">
          <img src={react} alt="" height="120px" />
        </Col>
        <Col className="mt-3 d-flex justify-content-center  align-items-center ">
          <img src={redux} alt="" width="150px" />
        </Col>
        <Col className="mt-3 d-flex justify-content-center  align-items-center ">
          <img src={express} alt="" width="150px" />
        </Col>
        <Col className="mt-3 d-flex justify-content-center  align-items-center ">
          <img src={nodejs} alt="" height="120px" />
        </Col>
      </Row>
      <Row xs={2} md={4} className="g-4 mt-3">
        <Col className="mt-3 d-flex justify-content-center  align-items-center ">
          <img src={postgres} alt="" height="120px" />
        </Col>
        <Col className="mt-3 d-flex justify-content-center  align-items-center ">
          <img src={sequelize} alt="" width="150px" />
        </Col>
        <Col className="mt-3 d-flex justify-content-center  align-items-center ">
          <img src={git} alt="" width="150px" />
        </Col>
        <Col className="mt-3 d-flex justify-content-center  align-items-center ">
          <img src={github} alt="" width="150px" />
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
