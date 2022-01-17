import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Navegation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className="sticky-top">
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="ms-auto"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Tecnologies">Skills</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegation;
