import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "../components/Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftSide from "../components/OutletShaer/LeftSide/LeftSide";
import Footer from "../components/Footer/Footer";
const Main = () => {
  return (
    <div>
      <Headers></Headers>
      <Container>
        <Row>
          <Col lg="3">
            <LeftSide></LeftSide>
          </Col>
          <Col lg="9">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
