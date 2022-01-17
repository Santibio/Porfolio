import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import img1 from "../../images/project1.png";
import img3 from "../../images/project3.png";
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col lg="4" className="d-flex justify-content-center mt-4">
          <Card style={{ width: "30vw" }}>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Food App</Card.Title>
              <Card.Text>
                A full stack app about food, where you can find diferent types
                of recipies and even create you own. <br />
                Technologies:
              </Card.Text>
              <div>
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Postgres</li>
                  <li>NodeJs</li>
                  <li>Express</li>
                </ul>
              </div>
              <Button variant="primary">
                <a
                  href="https://shielded-taiga-37015.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to the page
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" className="d-flex justify-content-center mt-4 ">
          <Card style={{ width: "30vw" }}>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <Card.Text>
                Application where one can check the weather of different cities.{" "}
                <br />
                Technologies:
              </Card.Text>
              <div>
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Fetch</li>
                  <li>MUI</li>
                </ul>
              </div>
              <Button variant="primary">
                <a
                  href="https://shielded-taiga-37015.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to the page
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4" className="d-flex justify-content-center mt-4 ">
          <Card style={{ width: "30vw" }}>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>Todo App</Card.Title>
              <Card.Text>
                One of my first projects, it's a simple to-do list made with
                vanilla js.
                <br />
                Technologies:
              </Card.Text>
              <div>
                <ul>
                  <li>Vanilla JS</li>
                  <li>Local Storage</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
              <Button variant="primary">
                <a
                  href="https://santibio.github.io/ToDoList/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to the page
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
