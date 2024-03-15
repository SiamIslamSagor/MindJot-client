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
          !squareValues.includes(null) &&
          !isMatchDraw
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
    const playerWon = linesThatAre("o", "o", "o").length > 0;
    const computerWon = linesThatAre("x", "x", "x").length > 0;
    if (playerWon) {
      setWinner("o");
      return;
    }
    if (computerWon) {
      setWinner("x");
      return;
    }
    const putComputerAt = index => {
      setTimeout(() => {
        if (!winner) {
          console.log(winner);
          let newSquares = squares;
          newSquares[index] = "x";
          console.log(squares);
          console.log([...newSquares].includes(null));
          if ([...newSquares].includes(null)) {
            setSquares([...newSquares]);
          } else if (!winner) {
            setIsMatchDraw(true);
            console.log(
              "board is full, no have enough space for putComputerAt"
            );
          }
        }
      }, 150);
    };
    if (isComputerTurn) {
      const winingLines = linesThatAre("x", "x", null);
      if (winingLines.length > 0) {
        const winIndex = winingLines[0].filter(
          index => squares[index] === null
        )[0];
        !winner && putComputerAt(winIndex);
        console.log(winner);
        return;
      }

      const linesToBlock = linesThatAre("o", "o", null);
      if (linesToBlock.length > 0) {
        const blockIndex = linesToBlock[0].filter(
          index => squares[index] === null
        )[0];
        putComputerAt(blockIndex);
        return;
      }

      const linesToContinue = linesThatAre("x", null, null);
      if (linesToContinue.length > 0) {
        !winner &&
          putComputerAt(
            linesToContinue[0].filter(index => squares[index] === null)[0]
          );
        console.log(winner);
        return;
      }

      const randomIndex =
        emptyIndexes[Math.ceil(Math.random() * emptyIndexes.length)];
      !winner && putComputerAt(randomIndex);
      console.log(winner);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [squares]);

  function handleSquareClick(index, e) {
    console.log(e.target.parentNode);
    if (e.target.innerText !== "x" && !winner) {
      const isPlayerTurn =
        squares.filter(square => square !== null).length % 2 === 0;
      if (isPlayerTurn) {
        let newSquares = squares;
        newSquares[index] = "o";
        setSquares([...newSquares]);
      }
    }
  }

  const handleMatchReset = e => {
    console.log(
      e.target.parentNode.parentNode.childNodes[0].childNodes[8].childNodes
        .length
    );
    e.target.parentNode.parentNode.childNodes[0].childNodes[9].childNodes.forEach(
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
  console.log(winner);

  return (
    <div className="bg-[#111111] py-20">
      <div className="main relative bg-[#111111] scale-90">
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

        {/* <div
          className={`border absolute w-full h-full backdrop-blur-[2px] bg-opacity-10 scale-0 duration-300 ${
            winner && winner === "o" && "scale-150"
          }`}
        >
          <div
            className={`absolute w-full scale-0 delay-1000 ${
              !!winner && winner === "o" && "scale-150"
            } duration-700 left-0  bottom-1/2 translate-y-[50%] bg-gradient-to-r from-transparent via-blue-500  bg-opacity-100 text-center text-white mask mask-origin-inside `}
          >
            You WON!
          </div>
        </div> */}

        {/* <div
          className={`border absolute w-full h-full backdrop-blur-[2px] bg-opacity-10 scale-0 duration-300 ${
            winner && winner === "x" && "scale-150"
          }`}
        >
          <div
            className={`absolute w-full scale-0 delay-1000 ${
              !!winner && winner === "x" && "scale-150"
            } p-5 duration-700 left-0  bottom-1/2 translate-y-[50%] bg-gradient-to-r from-transparent via-[#ff4439]  bg-opacity-100 text-center text-white mask mask-origin-inside `}
          >
            <span>You LOST!</span>
          </div>
        </div> */}

        {/* for "x" */}

        <div
          className={`border absolute w-full h-full backdrop-blur-[2px] bg-opacity-10 scale-0 duration-300 ${
            (winner || isMatchDraw) && "scale-150"
          }`}
        >
          <div
            className={`absolute w-full scale-0 delay-700 ${
              winner && winner === "x" && "scale-150"
            } p-5 duration-700 left-0  bottom-1/2 translate-y-[50%] bg-gradient-to-r from-transparent via-[#ff4439]  bg-opacity-100 text-center text-white`}
          >
            <h4>YOU LOST!!!</h4>
          </div>
          <div
            className={`absolute w-full scale-0 delay-700 ${
              winner && winner === "o" && "scale-150"
            } p-5 duration-700 left-0  bottom-1/2 translate-y-[50%] bg-gradient-to-r from-transparent via-blue-500  bg-opacity-100 text-center text-white`}
          >
            <h4>YOU WON!!!</h4>
          </div>
          <div
            className={`absolute w-full scale-0 delay-700 ${
              isMatchDraw && "scale-150"
            } p-5 duration-700 left-0  bottom-1/2 translate-y-[50%] bg-gradient-to-r from-transparent via-green-500  bg-opacity-100 text-center text-white`}
          >
            <h4>THE MATCH IS DRAW!!!</h4>
          </div>
        </div>

        {/* for "o" */}
        {/* <div
          className={`border absolute w-full h-full backdrop-blur-[2px] bg-opacity-10 scale-0 duration-300 ${
            winner && winner === "o" && "scale-150"
          }`}
        >
          <div
            className={`absolute w-full scale-0 delay-1000 ${
              !!winner && winner === "x" && "scale-150"
            } p-5 duration-700 left-0  bottom-1/2 translate-y-[50%] bg-gradient-to-r from-transparent via-[#ff4439]  bg-opacity-100 text-center text-white mask mask-origin-inside `}
          >
            <span>You LOST!</span>
          </div>
        </div> */}

        <Board>
          {squares.map((square, index) => {
            return (
              <Square
                key={index}
                o={square === "o" ? 1 : 0}
                x={square === "x" ? 1 : 0}
                onClick={e => handleSquareClick(index, e)}
              />
            );
          })}
        </Board>
      </div>
      <div className="my-10 max-w-sm mx-auto text-center">
        <ButtonYt btnText="play again" onClick={e => handleMatchReset(e)} />
      </div>
    </div>
  );
};

export default TicTacToe;
