/* eslint-disable react/prop-types */

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const AnimatedButton = ({ children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const circleSize = useMotionValue(0);
  const circleX = useMotionValue(0);
  const circleY = useMotionValue(0);
  const buttonRef = useRef();
  console.log(circleX, circleY);
  console.log(circleSize);

  const handleMouseEnter = e => {
    console.log("handleMouseEnter");
    setIsHovered(true);
    circleSize.set(0);
    circleX.set(e.clientX - buttonRef.current.getBoundingClientRect().left);
    circleY.set(e.clientY - buttonRef.current.getBoundingClientRect().top);
  };

  const handleMouseMove = e => {
    console.log("handleMouseMove");
    if (isHovered) {
      circleSize.set(0);
      circleX.set(e.clientX - buttonRef.current.getBoundingClientRect().left);
      circleY.set(e.clientY - buttonRef.current.getBoundingClientRect().top);
    }
  };

  const handleMouseLeave = () => {
    console.log("handleMouseLeave");
    setIsHovered(false);
    circleSize.set(0);
  };

  useTransform(circleSize, [0, 30], [0, 1]);

  useTransform(circleX, [0, 30], [0, 1]);
  useTransform(circleY, [0, 30], [0, 1]);

  const circleStyle = {
    width: circleSize,
    height: circleSize,
    borderRadius: "50%",
    position: "absolute",
    left: circleX,
    top: circleY,
    background: "rgba(0, 0, 0, 0.1)",
    transition: "width 30ms, height 30ms",
  };

  return (
    <motion.button
      ref={buttonRef}
      className="bg-blue-500 text-white px-4 py-2 rounded"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ position: "relative" }}
    >
      {children}
      {isHovered && <div style={circleStyle} />}
    </motion.button>
  );
};

export default AnimatedButton;
