import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaToggleOn, FaToggleOff, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../../UserContext/UserContext";

const Header = () => {
  const [on, setOn] = useState(false);
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/home" className="text-light text-decoration-none">
              MERN LEARNING
              <small className="ms-3 fs-3" onClick={() => setOn(!on)}>
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
              <Nav>
                <Link to="/login">
                  <Button variant="secondary" className="me-2">
                    Log in
                  </Button>
                </Link>
                <Link to="/regester">
                  <Button variant="primary">Register</Button>
                </Link>
              </Nav>
              <Nav.Link eventKey={2} href="#memes">
                <FaUserCircle className="fs-5 text" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
