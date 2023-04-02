import React, { useState, useEffect } from 'react';


const COLORS = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

const generateBoard = (size) => {
  const board = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      const randomIndex = Math.floor(Math.random() * COLORS.length);
      row.push({
        color: COLORS[randomIndex],
        selected: false,
      });
    }
    board.push(row);
  }
  return board;
};

const Game = () => {
  const [board, setBoard] = useState(generateBoard(8));
  const [selected, setSelected] = useState([]);
  const [steps, setSteps] = useState(20);

  const handleClick = (i, j) => {
    if (selected.length === 0) {
      setSelected([{ x: i, y: j }]);
    } else {
      const prev = selected[0];
      if (prev.x === i && prev.y === j) {
        setSelected([]);
      } else if (board[prev.x][prev.y].color === board[i][j].color) {
        const newBoard = board.map((row, x) =>
          row.map((cell, y) => {
            if ((x === prev.x && y === prev.y) || (x === i && y === j)) {
              return { ...cell, selected: false };
            } else {
              return cell;
            }
          })
        );
        setBoard(newBoard);
        setSelected([]);
        setSteps(steps - 1);
      } else {
        setSelected([{ x: i, y: j }]);
      }
    }
  };

  useEffect(() => {
    if (steps === 0) {
      alert('Game over!');
    } else if (board.every((row) => row.every((cell) => !cell.selected))) {
      alert('You win!');
    }
  }, [board, steps]);

  return (
    <div>
      <div className="board">
        {board.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              className={`cell ${cell.color} ${cell.selected ? 'selected' : ''}`}
              onClick={() => handleClick(i, j)}
            />
          ))
        )}
      </div>
      <div className="steps">{`Steps: ${steps}`}</div>
    </div>
  );
};

export default Game;
