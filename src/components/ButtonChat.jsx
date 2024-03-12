import { useState } from "react";

const ButtonWithHoverEffect = () => {
  const [circleStyle, setCircleStyle] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  const handleMouseEnter = e => {
    const { left, top } = e.target.getBoundingClientRect();
    const size = 0;
    const x = e.clientX - left - size / 2;
    const y = e.clientY - top - size / 2;

    setCircleStyle({
      width: size,
      height: size,
      top: y,
      left: x,
    });
  };

  const handleMouseOut = e => {
    const { left, top } = e.target.getBoundingClientRect();
    const size = 0;
    const x = e.clientX - left - size / 2;
    const y = e.clientY - top - size / 2;

    setCircleStyle({
      width: size,
      height: size,
      top: y,
      left: x,
    });
  };

  console.log(circleStyle);

  return (
    <button
      className="relative p-5 m-5 overflow-hidden border border-gray-400 rounded-lg transition-transform z-10"
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseOut}
    >
      <span
        className="absolute pointer-events-none size-0 duration-[2s] bg-blue-500 rounded-full -z-10"
        style={{
          width: circleStyle.width,
          height: circleStyle.height,
          top: circleStyle.top,
          left: circleStyle.left,
          //   transition: "width 30ms, height 30ms, top 30ms, left 30ms",
        }}
      />
      Button with Hover Effect
    </button>
  );
};

export default ButtonWithHoverEffect;
