function Board(props) {
  return (
    <div
      className="grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr] border-2 border-red-400"
      {...props}
    />
  );
}

export default Board;
