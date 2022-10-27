import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const PrivateNews = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
  });
  const mainData = useLoaderData();
  //   console.log(mainData);
  const naviget = useNavigate();
  const handleBtn = () => {
    naviget(`/enroll/${mainData.id}`);
  };
  return (
    <div className="mb-5 m-5 pt-1">
      <Card ref={componentRef} style={{ width: "85%", margin: "auto" }}>
        <Card.Img
          variant="top"
          src={mainData?.img}
          style={{ width: "100%", height: "500px" }}
        />
        <Card.Body>
          <Card.Title>{mainData?.title}</Card.Title>
          <Card.Text>{mainData?.details}</Card.Text>
          {mainData?.download ? (
            <Button onClick={handlePrint}>{mainData?.download}</Button>
          ) : (
            ""
          )}
          {mainData?.downloadss ? (
            <Button onClick={handleBtn}>{mainData?.downloadss}</Button>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default PrivateNews;
