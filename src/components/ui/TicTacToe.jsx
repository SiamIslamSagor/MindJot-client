import { useEffect, useState } from "react";
import Board from "./Board";
import Square from "./Square";
import "../../../src/App.css";
import { cn } from "../../utils/cn";
import ButtonYt from "../../pages/ButtonYt";

let defaultSquares = () => new Array(9).fill(null);

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
const TicTacToe = () => {
  const [squares, setSquares] = useState(defaultSquares());
  const [winner, setWinner] = useState(null);
  const [isMatchDraw, setIsMatchDraw] = useState(false);
  const [winingLineClass1, setWiningLineClass1] = useState("");
  const [winingLineClass2, setWiningLineClass2] = useState("");
  const [winingLineClass3, setWiningLineClass3] = useState("");
  const [winingLineClass4, setWiningLineClass4] = useState("");
  const [winingLineClass5, setWiningLineClass5] = useState("");
  const [winingLineClass6, setWiningLineClass6] = useState("");
  const [winingLineClass7, setWiningLineClass7] = useState("");
  const [winingLineClass8, setWiningLineClass8] = useState("");

  useEffect(() => {
    const isComputerTurn =
      squares.filter(square => square !== null).length % 2 === 1;
    const linesThatAre = (a, b, c) => {
      return lines.filter(squareIndexes => {
        const squareValues = squareIndexes.map(index => squares[index]);

        if (
          squareValues[0] === squareValues[1] &&
          squareValues[0] === squareValues[2] &&
          !squareValues.includes(null)
        ) {
          if (JSON.stringify(squareIndexes) === JSON.stringify([0, 3, 6])) {
            console.log("row 1");
            setWiningLineClass1("scale-y-90");
          } else if (
            JSON.stringify(squareIndexes) === JSON.stringify([1, 4, 7])
          ) {
            console.log("row 2");
            setWiningLineClass2("scale-y-90");
          } else if (
            JSON.stringify(squareIndexes) === JSON.stringify([2, 5, 8])
          ) {
            console.log("row 3");
            setWiningLineClass3("scale-y-90");
          } else if (
            JSON.stringify(squareIndexes) === JSON.stringify([3, 4, 5])
          ) {
            console.log("column 1");
            setWiningLineClass4("scale-y-90");
          } else if (
            JSON.stringify(squareIndexes) === JSON.stringify([0, 1, 2])
          ) {
            console.log("column 2");
            setWiningLineClass5("scale-y-90");
          } else if (
            JSON.stringify(squareIndexes) === JSON.stringify([6, 7, 8])
          ) {
            console.log("column 3");
            setWiningLineClass6("scale-y-90");
          } else if (
            JSON.stringify(squareIndexes) === JSON.stringify([0, 4, 8])
          ) {
            console.log("diagonal 1");
            setWiningLineClass7("scale-y-110");
          } else if (
            JSON.stringify(squareIndexes) === JSON.stringify([2, 4, 6])
          ) {
            console.log("diagonal 2");
            setWiningLineClass8("scale-y-110");
          }
        }
        return (
          JSON.stringify([a, b, c].sort()) ===
          JSON.stringify(squareValues.sort())
        );
      });
    };
    const emptyIndexes = squares
      .map((square, index) => (square === null ? index : null))
      .filter(val => val !== null);
    const playerWon = linesThatAre("x", "x", "x").length > 0;
    const computerWon = linesThatAre("o", "o", "o").length > 0;
    if (playerWon) {
      setWinner("x");
    }
    if (computerWon) {
      setWinner("o");
    }
    const putComputerAt = index => {
      if (!winner) {
        let newSquares = squares;
        newSquares[index] = "o";
        console.log(squares);
        console.log([...newSquares].includes(null));
        if ([...newSquares].includes(null)) {
          setSquares([...newSquares]);
        } else {
          setIsMatchDraw(true);
          console.log("board is full, no have enough space for putComputerAt");
        }
      }
    };
    if (isComputerTurn) {
      const winingLines = linesThatAre("o", "o", null);
      if (winingLines.length > 0) {
        const winIndex = winingLines[0].filter(
          index => squares[index] === null
        )[0];
        putComputerAt(winIndex);
        return;
      }

      const linesToBlock = linesThatAre("x", "x", null);
      if (linesToBlock.length > 0) {
        const blockIndex = linesToBlock[0].filter(
          index => squares[index] === null
        )[0];
        putComputerAt(blockIndex);
        return;
      }

      const linesToContinue = linesThatAre("o", null, null);
      if (linesToContinue.length > 0) {
        putComputerAt(
          linesToContinue[0].filter(index => squares[index] === null)[0]
        );
        return;
      }

      const randomIndex =
        emptyIndexes[Math.ceil(Math.random() * emptyIndexes.length)];
      putComputerAt(randomIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [squares]);

  function handleSquareClick(index, e) {
    console.log(e.target.parentNode);
    if (e.target.innerText !== "o" && !winner) {
      const isPlayerTurn =
        squares.filter(square => square !== null).length % 2 === 0;
      if (isPlayerTurn) {
        let newSquares = squares;
        newSquares[index] = "x";
        setSquares([...newSquares]);
      }
    }
  }

  const handleMatchReset = e => {
    console.log(
      e.target.parentNode.parentNode.childNodes[0].childNodes[8].childNodes
        .length
    );
    e.target.parentNode.parentNode.childNodes[0].childNodes[8].childNodes.forEach(
      element => {
        element.innerText = "";
      }
    );
    setIsMatchDraw(false);
    setWinner(null);
    setWiningLineClass1("");
    setWiningLineClass2("");
    setWiningLineClass3("");
    setWiningLineClass4("");
    setWiningLineClass5("");
    setWiningLineClass6("");
    setWiningLineClass7("");
    setWiningLineClass8("");
    setSquares([null, null, null, null, null, null, null, null, null]);
  };

  return (
    <>
      <div className="main relative">
        <>
          <div
            className={cn(
              "absolute h-full bg-red-500 w-[1px] rounded-2xl  duration-700   scale-y-0  ml-[51px]",
              winingLineClass1
            )}
          ></div>
          <div
            className={cn(
              "absolute h-full bg-green-500 w-[1px] rounded-2xl  duration-700   scale-y-0 ml-[151px] ",
              winingLineClass2
            )}
          ></div>
          <div
            className={cn(
              "absolute h-full bg-blue-500 w-[1px] rounded-2xl  duration-700   scale-y-0 ml-[251px]",
              winingLineClass3
            )}
          ></div>
          <div
            className={cn(
              "absolute h-full bg-yellow-500 w-[1px] rounded-2xl  duration-700   scale-y-0 ml-[148px] mt-[5px] rotate-90",
              winingLineClass4
            )}
          ></div>
          <div
            className={cn(
              "absolute h-full bg-violet-500 w-[1px] rounded-2xl  duration-700   scale-y-0 ml-[148px] mt-[105px] rotate-90",
              winingLineClass6
            )}
          ></div>
          <div
            className={cn(
              "absolute h-full bg-purple-500 w-[1px] rounded-2xl  duration-700   scale-y-0 ml-[148px] -mt-[95px] rotate-90",
              winingLineClass5
            )}
          ></div>
          <div
            className={cn(
              "absolute h-full bg-sky-500 w-[1px] rounded-2xl  duration-700   scale-y-0 ml-[148px] mt-[2px] rotate-[135deg]",
              winingLineClass7
            )}
          ></div>
          <div
            className={cn(
              "absolute h-full bg-green-500 w-[1px] rounded-2xl  duration-700   scale-y-0 ml-[148px] mt-[8px] -rotate-[135deg]",
              winingLineClass8
            )}
          ></div>
        </>
        {/* <div className="absolute h-full bg-red-500 w-[1px] rounded-2xl     scale-y-90  ml-[51px]"></div>
      <div className="absolute h-full bg-red-500 w-[1px] rounded-2xl     scale-y-90 ml-[151px] "></div>
      <div className="absolute h-full bg-red-500 w-[1px] rounded-2xl     scale-y-90 ml-[251px]"></div>
      <div className="absolute h-full bg-red-500 w-[1px] rounded-2xl     scale-y-90 ml-[148px] mt-[5px] rotate-90"></div>
      <div className="absolute h-full bg-red-500 w-[1px] rounded-2xl     scale-y-90 ml-[148px] mt-[105px] rotate-90"></div>
      <div className="absolute h-full bg-red-500 w-[1px] rounded-2xl     scale-y-90 ml-[148px] -mt-[95px] rotate-90"></div>
      <div className="absolute h-full bg-red-500 w-[1px] rounded-2xl     scale-y-110 ml-[148px] mt-[2px] rotate-[135deg]"></div>
      <div className="absolute h-full bg-red-500 w-[1px] rounded-2xl     scale-y-110 ml-[148px] mt-[8px] -rotate-[135deg]"></div> */}

        <Board>
          {squares.map((square, index) => {
            return (
              <Square
                key={index}
                x={square === "x" ? 1 : 0}
                o={square === "o" ? 1 : 0}
                onClick={e => handleSquareClick(index, e)}
              />
            );
          })}
        </Board>
      </div>
      <div className="my-10 max-w-sm mx-auto text-center">
        {!!winner && winner === "x" && (
          <div className="result green">You WON!</div>
        )}
        {!!winner && winner === "o" && (
          <div className="result red">You LOST!</div>
        )}
        {isMatchDraw && (
          <div>
            <p className="text-[2rem] p-2 bg-blue-400">The match is Draw</p>
          </div>
        )}

        <ButtonYt btnText="play again" onClick={e => handleMatchReset(e)} />
      </div>
    </>
  );
};

export default TicTacToe;
