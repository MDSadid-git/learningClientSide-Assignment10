import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaToggleOn, FaToggleOff, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../../UserContext/UserContext";
import "./Header.css";

const Header = () => {
  const [on, setOn] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/home" className="text-light text-decoration-none">
              MERN LEARNING
            </Link>
            <small className="ms-3 fs-3" onClick={() => setOn(!on)}>
              {on ? <FaToggleOff /> : <FaToggleOn />}
            </small>
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
                  FAQ
                </Link>
                <Link
                  className="text-light text-decoration-none mt-2 me-2"
                  to="/blog"
                >
                  Blog
                </Link>
                <Link
                  className="text-light text-decoration-none mt-2 me-2"
                  to="/courses"
                >
                  All Courses
                </Link>
              </Nav>
            </Nav>
            <Nav>
              <Nav className="loginArea">
                {user?.uid ? (
                  <Button
                    onClick={handleLogOut}
                    variant="secondary"
                    className="me-2"
                  >
                    Log Out
                  </Button>
                ) : (
                  <>
                    <Link to="/login">
                      <Button variant="secondary" className="me-2">
                        Log in
                      </Button>
                    </Link>
                    <Link to="/regester">
                      <Button variant="primary">Register</Button>
                    </Link>
                  </>
                )}
              </Nav>
              <Nav.Link eventKey={2} href="#memes">
                {user?.uid ? (
                  <Image
                    src={user?.photoURL}
                    style={{ height: "33px" }}
                    roundedCircle
                    title={user?.displayName}
                  ></Image>
                ) : (
                  <FaUserCircle className="fs-5 text" />
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
