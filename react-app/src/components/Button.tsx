interface Props {
    children: string;
    color: string;
    onClick: () => void;
}
function Button({children, color, onClick} : Props) {
  return (
    <div className={'btn btn-' + color} onClick={onClick}>{children}</div>
  )
}

export default Button
