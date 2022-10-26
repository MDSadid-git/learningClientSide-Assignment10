import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Header = () => {
  const [on, setOn] = useState(false);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="text-light text-decoration-none">
              MERN LEARNING{" "}
              <small className="ms-1 fs-3" onClick={() => setOn(!on)}>
                {on ? <FaToggleOff /> : <FaToggleOn />}
              </small>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav>
                <Link
                  className="text-light text-decoration-none mt-2 me-2"
                  to="/home"
                >
                  Home
                </Link>
                <Link
                  className="text-light text-decoration-none mt-2 me-2"
                  to="/about"
                >
                  About
                </Link>
              </Nav>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <Button variant="secondary" className="me-2">
                  Log in
                </Button>
                <Button variant="primary">Register</Button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
