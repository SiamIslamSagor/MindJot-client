import { Button } from "@nextui-org/react";

export default function ButtonYt() {
  const handleMouseMove = e => {
    let btn = e.target;
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty("--x", x + "px");
    btn.style.setProperty("--y", y + "px");
  };
  return (
    <div>
      <Button
        radius="none"
        size="lg"
        onMouseMove={handleMouseMove}
        className="btn_yt font-semibold uppercase relative inline-flex px-8 py-3 bg-[#252525] text-white tracking-wider overflow-hidden z-10 before:content-[''] before:absolute before:top-0 before:left-0 before:rounded-full before:bg-[#ff4439] before:bg-opacity-90 before:-z-[1] before:size-0  hover:before:size-[500px]"
      >
        Click Me
      </Button>
    </div>
  );
}
