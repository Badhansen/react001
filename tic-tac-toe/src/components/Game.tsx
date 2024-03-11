import { useState } from "react";
import Board from "./Board";

type Player = "X" | "O" | null;
const initialBoard: Player[] = Array(9).fill(null);

const calculateWinner = (squares: Player[]): Player | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

function Game() {
  const [squares, setSquares] = useState<Player[]>(initialBoard);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handleClick = (i: number): void => {
    const newSquares = [...squares];
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const resetGame = () => {
    setSquares(initialBoard);
    setXIsNext(true);
  };

  return (
    <div>
      <div className="status">{status}</div>
      <Board squares={squares} onClick={handleClick} onReset={resetGame} />
    </div>
  );
}

export default Game;
