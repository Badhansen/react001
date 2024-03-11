type Player = "X" | "O" | null;

interface Props {
  value: Player;
  onClick: () => void;
}

function Square({ value, onClick }: Props) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
