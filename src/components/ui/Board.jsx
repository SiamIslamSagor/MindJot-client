function Board(props) {
  return (
    <div
      className="grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr] border4 border-red-600 

      
      [&>div:nth-child(1)]:!border-r-4 [&>div:nth-child(1)]:!border-b-4 [&>div:nth-child(2)]:!border-r-4 [&>div:nth-child(2)]:!border-b-4 [&>div:nth-child(3)]:!border-b-4  
      
      [&>div:nth-child(4)]:!border-r-4 [&>div:nth-child(4)]:!border-b-4 [&>div:nth-child(5)]:!border-r-4 [&>div:nth-child(5)]:!border-b-4 [&>div:nth-child(6)]:!border-b-4 
      
      [&>div:nth-child(7)]:!border-r-4 [&>div:nth-child(8)]:!border-r-4 "
      {...props}
    />
  );
}

export default Board;
