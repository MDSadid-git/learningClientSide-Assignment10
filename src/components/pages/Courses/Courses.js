import React, { useEffect, useState } from "react";
import NewsCarts from "../NewsCarts/NewsCarts";
import "./Courses.css";

const Courses = () => {
  const [mern, setMern] = useState([]);
  useEffect(() => {
    fetch("https://learning-server-side.vercel.app/mernalldata")
      .then((res) => res.json())
      .then((data) => setMern(data));
  }, []);
  return (
    <div className="newsCart m-5">
      {mern.map((n) => (
        <NewsCarts key={n.id} n={n}></NewsCarts>
      ))}
    </div>
  );
};

export default Courses;
