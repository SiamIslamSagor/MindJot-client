import { useRef, useState } from "react";

const HybridScrolling = () => {
  const stickyWrapRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState("");

  window.addEventListener("scroll", () => {
    for (let i = 0; i < [stickyWrapRef.current].length; i++) {
      transform([stickyWrapRef.current][i]);
    }
  });

  function transform(section) {
    const offsetTop = section.parentElement.offsetTop;

    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;

    percentage = percentage < 0 ? 0 : percentage > 900 ? 900 : percentage;

    setTransformStyle(`translate3d(${-percentage}vw, 0, 0)`);
  }

  return (
    <div className="h-[1000vh]">
      <div
        ref={stickyWrapRef}
        className="overflow-hidden sticky top-[64px] h-screen"
      >
        <div
          style={{ transform: transformStyle }}
          className="absolute top-0 h-full w-[1000vw] [will-change:transform] flex justify-between"
        >
          <div className="h-full !w-screen bg-red-600">
            <h2 className="mt-[5vh] ml-[5vh] text-4xl text-white">Hello</h2>
          </div>
          <div className="h-full !w-screen bg-green-600">1</div>
          <div className="h-full !w-screen bg-yellow-600">2</div>
          <div className="h-full !w-screen bg-gray-600">3</div>{" "}
          <div className="h-full !w-screen bg-yellow-600">4</div>
          <div className="h-full !w-screen bg-green-600">5</div>
          <div className="h-full !w-screen bg-yellow-600">6</div>
          <div className="h-full !w-screen bg-blue-600">7</div>
          <div className="h-full !w-screen bg-violet-600">8</div>
          <div className="h-full !w-screen bg-blue-600">
            <h2 className="right text-right mt-[85vh] mr-[5vh] text-4xl text-white">
              Goodbye 9
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HybridScrolling;
