import React, { useState } from "react";
import ReactDOM from "react-dom";

function Board(props) {
    const { board, onSquareClick } = props;
  
    return (
      <div className="board">
        {board.map((row, i) =>
          row.map((color, j) => (
            <Square
              key={`${i}-${j}`}
              color={color}
              onClick={() => onSquareClick(i, j)}
            />
          ))
        )}
      </div>
    );
  }