import React from "react";
import "./Square.css";

function Square(props) {
  const { color, onClick } = props;

  return <div className={`square ${color}`} onClick={onClick}></div>;
}

export default Square;