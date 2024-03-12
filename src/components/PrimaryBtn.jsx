import { useState } from "react";
import { cn } from "../utils/cn";

const ButtonWithAnimatedSpan = () => {
  //   const [spanPosition, setSpanPosition] = useState({ x: 0, y: 0 });
  //   const [spanPosition, setSpanPosition] = useState({ top: 0, left: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [enterPosition, setEnterPosition] = useState({ top: 0, left: 0 });
  const [leavePosition, setLeavePosition] = useState({ top: 0, left: 0 });

  const [position, setPosition] = useState("");

  //   const handleMouseMove = e => {
  //     // setSpanPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  //     // let x = e.screenX - e.pageX;
  //     // let y = e.screenY - e.pageY;
  //     // console.log(x, y);
  //     // console.log(e.nativeEvent);
  //     console.log(e);

  //     const { clientX, clientY } = e; // Destructure event object
  //     const buttonElement = e.currentTarget; // Get the button element

  //     // Calculate relative position of mouse within the button
  //     const relativeX = clientX - buttonElement.offsetLeft;
  //     const relativeY = clientY - buttonElement.offsetTop;

  //     // Update span position state
  //     setSpanPosition({
  //       top: relativeY,
  //       left: relativeX,
  //       height: "5px",
  //       width: "5px",
  //     });
  //   };

  //   const handleMouseOut = () => {
  //     setSpanPosition({ x: 0, y: 0 });
  //   };

  const handleMouseEnter = event => {
    const { clientX, clientY } = event;
    const buttonElement = event.currentTarget;

    // Calculate enter position relative to button
    const relativeX = clientX - buttonElement.offsetLeft;
    const relativeY = clientY - buttonElement.offsetTop;

    setEnterPosition({ top: relativeY, left: relativeX });
    console.log("Entered position", `x: ${relativeX}, y:${relativeY}`);
    setPosition({ x: relativeX, y: relativeY });
    setIsHovered(true);
  };

  const handleMouseLeave = event => {
    const { clientX, clientY } = event;
    const buttonElement = event.currentTarget;

    // Calculate leave position relative to button
    const relativeX = clientX - buttonElement.offsetLeft;
    const relativeY = clientY - buttonElement.offsetTop;

    setLeavePosition({ top: relativeY, left: relativeX });
    console.log("leave position", `x: ${relativeX}, y:${relativeY}`);
    setPosition({ x: relativeX, y: relativeY });
    setIsHovered(false);
  };
  console.log(position);

  return (
    <button
      className="relative overflow-hidden p-5 border"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      BTN
      <>
        <span
          className={cn(
            "absolute size-8 duration-700 bg-green-600 rounded-full top-0 left-0"
          )}
          style={{
            top: position?.y,
            left: position?.x,
          }}
        ></span>
        {/* <span style={{ top: enterPosition.top, left: enterPosition.left }}>
          Entered at: ({enterPosition.left}, {enterPosition.top})
        </span>
        <br />

        <span style={{ top: leavePosition.top, left: leavePosition.left }}>
          Left at: ({leavePosition.left}, {leavePosition.top})
        </span> */}
      </>
    </button>
  );
};

export default ButtonWithAnimatedSpan;
