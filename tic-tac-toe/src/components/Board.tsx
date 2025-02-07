import Square from "./Square";

type Player = "X" | "O" | null;

interface Props {
  squares: Player[];
  onClick: (i: number) => void;
  onReset: () => void;
}

function Board({ squares, onClick, onReset }: Props) {
  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };
  const hadleReset = () => {
    onReset();
  };
  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button onClick={hadleReset}>Reset</button>
    </div>
  );
}

export default Board;
