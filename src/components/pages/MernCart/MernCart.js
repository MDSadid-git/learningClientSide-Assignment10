import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCart from "../NewsCarts/NewsCarts";
import "./NewsCart.css";
const MernCart = () => {
  const merncart = useLoaderData();
  console.log(merncart);
  return (
    <div className="newsCart m-5 pt-2">
      {merncart.map((n) => (
        <NewsCart key={n.id} n={n}></NewsCart>
      ))}
    </div>
  );
};

export default MernCart;
