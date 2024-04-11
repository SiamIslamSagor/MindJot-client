import { useState } from "react";
import { cn } from "../utils/cn";

export default function ButtonBird() {
  const [spanPosition, setSpanPosition] = useState({ top: 0, left: 0 });

  const handleMouseMove = event => {
    const { clientX, clientY } = event; // Destructure event object
    const buttonElement = event.currentTarget; // Get the button element

    // Calculate relative position of mouse within the button
    const relativeX = clientX - buttonElement.offsetLeft;
    const relativeY = clientY - buttonElement.offsetTop;

    // Update span position state
    setSpanPosition({
      top: relativeY,
      left: relativeX,
      height: "1000px",
      width: "1000px",
    });
  };

  const handleMouseLeave = event => {
    const { clientX, clientY } = event; // Destructure event object
    const buttonElement = event.currentTarget; // Get the button element

    // this is new commit from github

    // Calculate relative position of mouse within the button
    const relativeX = clientX - buttonElement.offsetLeft;
    const relativeY = clientY - buttonElement.offsetTop;

    // Update span position state
    setSpanPosition({
      top: relativeY,
      left: relativeX,
      height: "20px",
      width: "20px",
      transition: "width 2s, height 2s",
    });
  };

  console.log(spanPosition);

  return (
    <div>
      <button
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="px-10 py-5 border rounded-lg z-10 text-2xl font-semibold relative inline-block uppercase tracking-wider overflow-hidden"
      >
        <span
          className={cn(
            "bg-green-600 rounded-full size-20 absolute xxxxx -z-10 duration-700 top-0 left-0 scale-[2] pointer-events-none ease-in"
            // setSpanPosition.top === 0 ? "" : "scale-[2]"
          )}
          style={spanPosition}
        ></span>
        Click Me
      </button>
    </div>
  );
}
