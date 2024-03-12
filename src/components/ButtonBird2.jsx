import { useState } from "react";
import { cn } from "../utils/cn";

export default function ButtonBird2() {
  const [spanPosition, setSpanPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = event => {
    const { clientX, clientY } = event; // Destructure event object
    const buttonElement = event.currentTarget; // Get the button element

    // Calculate relative position of mouse within the button
    const relativeX = clientX - buttonElement.offsetLeft;
    const relativeY = clientY - buttonElement.offsetTop;

    // Update span position state
    setSpanPosition({
      top: relativeY,
      left: relativeX,
      //   height: "1000px",
      //   width: "1000px",
    });
  };

  const handleMouseLeave = event => {
    const { clientX, clientY } = event; // Destructure event object
    const buttonElement = event.currentTarget; // Get the button element

    // Calculate relative position of mouse within the button
    const relativeX = clientX - buttonElement.offsetLeft;
    const relativeY = clientY - buttonElement.offsetTop;

    // Update span position state
    setSpanPosition({
      top: relativeY,
      left: relativeX,
      //   height: "10px",
      //   width: "10px",
      //   transition: "width 2s, height 2s",
    });
  };

  console.log(spanPosition);

  return (
    <div>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="px-10 py-5 border rounded-lg z-10 text-2xl font-semibold relative inline-block uppercase tracking-wider overflow-hidden"
      >
        <span
          className={cn(
            "bg-green-600 rounded-full size-4 bottom-0 right-0 absolute -z-10 duration-400 scale-[2] pointer-events-none "
            // setSpanPosition.top === 0 ? "" : "scale-[2]"
          )}
          style={spanPosition}
        ></span>
        Click Me
      </button>
    </div>
  );
}
