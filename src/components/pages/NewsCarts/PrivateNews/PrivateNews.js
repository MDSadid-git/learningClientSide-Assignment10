import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const PrivateNews = () => {
  const mainData = useLoaderData();
  console.log(mainData);
  return (
    <div className="mb-5 m-5 pt-1">
      <Card>
        <Card.Img
          variant="top"
          src={mainData?.img}
          style={{ width: "100%", height: "500px" }}
        />
        <Card.Body>
          <Card.Title>{mainData?.title}</Card.Title>
          <Card.Text>{mainData?.details}</Card.Text>
          {mainData?.download ? <Button>{mainData?.download}</Button> : ""}
          {mainData?.downloadss ? <Button>{mainData?.downloadss}</Button> : ""}
        </Card.Body>
      </Card>
    </div>
  );
};

export default PrivateNews;
