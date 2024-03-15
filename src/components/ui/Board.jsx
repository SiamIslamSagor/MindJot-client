function Board(props) {
  return (
    <div
      className="grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr]"
      {...props}
    />
  );
}

export default Board;
