import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftSide = () => {
  const [mern, setMern] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/MERN")
      .then((res) => res.json())
      .then((data) => setMern(data));
  }, []);
  return (
    <div className="mt-5">
      {mern.map((n) => (
        <div key={n.id}>
          <Link
            className="d-grid gap-2 text-decoration-none"
            to={`/mernalldata/${n.id}`}
          >
            <Button variant="secondary" size="lg" className="m-1">
              {n.name}
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LeftSide;
