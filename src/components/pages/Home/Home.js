import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div className="m-5 pt-1">
      <Carousel style={{ height: "30rem" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://miro.medium.com/max/1400/0*GKIyAWHbKbANm7d9.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>MongoDB, Express, React, Node</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0JeyLTcn-kwLcHWl0gf3XzfFnot6eshV2ms8RVkEmzZst74I4X24PO8KCT7inFz46W0&usqp=CAU"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>The MERN Stack is an Efficient, Cost-Effective Solution</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
