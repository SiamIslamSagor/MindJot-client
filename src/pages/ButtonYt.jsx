/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/react";

export default function ButtonYt(props) {
  const handleMouseMove = e => {
    let btn = e.target;
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty("--x", x + "px");
    btn.style.setProperty("--y", y + "px");
    console.log("mouse moved");
  };
  return (
    <Button
      radius="none"
      size="lg"
      {...props}
      onMouseMove={handleMouseMove}
      className="btn_yt hover:!opacity-100 font-semibold uppercase relative inline-flex px-8 py-7 bg-[#151515] text-white tracking-widest overflow-hidden z-50 before:content-[''] before:absolute before:top-0 before:left-0 before:rounded-full  before:bg-[#ff4439] before:bg-opacity-90 before:-z-[1] before:size-0  hover:before:size-[500px]"
    >
      {props?.btnText ? props.btnText : "Click Me"}
    </Button>
  );
}
