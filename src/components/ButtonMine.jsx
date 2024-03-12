import { Button } from "@nextui-org/react";
import { cn } from "../utils/cn";
import { useState } from "react";

const ButtonMine = () => {
  //   let styles = {
  //     after: {
  //       top: 0,
  //       left: 0,
  //     },
  //   };

  //   let top = 0;
  //   let left = 0;
  const [circleStyle, setCircleStyle] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });
  const [circleClass, setCircleClass] = useState("");

  const handleMouseEnter = e => {
    const { left, top } = e.target.getBoundingClientRect();
    const size = 0;
    const x = e.clientX - left - size / 2;
    const y = e.clientY - top - size / 2;

    setCircleStyle({
      top: y,
      left: x,
      width: size,
      height: size,
    });

    let a = y < 0 ? 0 : y > 35 ? 35 : parseInt(y);
    let b = x < 0 ? 0 : x > 132 ? 132 : parseInt(x);
    console.log(a, b);
    setCircleClass(`after:top-[${a}px] after:left-[${b}px]`);
    // top = `${a}px !important`;
    // left = `${b}px !important`;
  };

  const handleMouseOut = e => {
    const { left, top } = e.target.getBoundingClientRect();
    const size = 0;
    const x = e.clientX - left - size / 2;
    const y = e.clientY - top - size / 2;

    setCircleStyle({
      top: y,
      left: x,
      width: size,
      height: size,
    });

    let a = y < 0 ? 0 : y > 35 ? 35 : parseInt(y);
    let b = x < 0 ? 0 : x > 132 ? 132 : parseInt(x);
    console.log(a, b);
    setCircleClass(`after:top-[${a}px] after:left-[${b}px]`);
    // top = `${a}px !important`;
    // left = `${b}px !important`;
  };

  console.log(circleClass);
  return (
    <div>
      {circleStyle && (
        <Button
          onMouseEnter={handleMouseEnter}
          onMouseOut={handleMouseOut}
          className={cn(
            "px-8 py-8 border bg-transparent rounded-lg z-10 text-xl font-semibold relative  uppercase tracking-wider overflow-visible after:content-[''] after:absolute after:size-[30px] after:bg-green-600 after:-z-10 after:pointer-events-none after:duration-400 after:rounded-full ",
            circleClass
          )}
          //   style={{
          //     after: {
          //       top: "50px",
          //       left: "50px",
          //     },
          //   }}
        >
          Click Me
        </Button>
      )}
      {/* <Button className="px-8 py-8 border bg-transparent rounded-lg z-10 text-xl font-semibold relative  uppercase tracking-wider overflow-hidden after:content-[''] after:absolute after:h-[300px] after:w-[300px] after:bg-green-600 after:translate-x-[-50%] after:left-[50%] after:bottom-20 hover:after:-bottom-10 after:-z-10 hover:after:w-[300px] after:duration-400 after:rounded-full after:opacity-100">
        Click Me
      </Button> */}
    </div>
  );
};

export default ButtonMine;
