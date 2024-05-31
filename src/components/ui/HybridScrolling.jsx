import { useRef, useState } from "react";
import p1 from "../../assets/images/df-ss.png";
import p2 from "../../assets/images/fh-ss.png";
import p3 from "../../assets/images/ppp-ss.png";
import p4 from "../../assets/images/cm-ss.png";
const HybridScrolling = () => {
  const stickyWrapRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState("");

  window.addEventListener("scroll", () => {
    for (let i = 0; i < [stickyWrapRef?.current]?.length; i++) {
      transform([stickyWrapRef?.current][i]);
    }
  });

  function transform(section) {
    const offsetTop = section?.parentElement?.offsetTop;

    let percentage =
      ((window?.scrollY - offsetTop) / window?.innerHeight) * 100;

    percentage = percentage < 0 ? 0 : percentage > 900 ? 900 : percentage;

    setTransformStyle(`translate3d(${-percentage}vw, 0, 0)`);
    // translate3d(-101.09769484083424vw, 0, 0)
  }

  console.log(transformStyle);
  return (
    <div className="h-[1000vh] md:h-[600vh] flex flex-col">
      <div
        ref={stickyWrapRef}
        className="overflow-hidden sticky top-[180px] h-[50vh] sm:h-[60vh] md:h-[50vh] lg:h-[70vh] "
      >
        <div
          style={{ transform: transformStyle }}
          className="absolute top-0 h-full w-[1000vw] md:w-[500vw] [will-change:transform] flex justify-between"
        >
          <div className="h-full max-h-[100%] text-7xl font-bold text-center flex items-center justify-center w-full bg-red-600 ">
            <img
              src={p1}
              alt=""
              className="w-full h-full object-cover cursor-pointer duration-[3s]   object-top hover:object-bottom"
            />
          </div>
          <div
            className={`h-full max-h-[100%] text-7xl font-bold text-center flex items-center justify-center w-full bg-green-600 `}
          >
            <img
              src={p2}
              alt=""
              className="w-full h-full object-cover cursor-pointer duration-[3s]   object-top hover:object-bottom"
            />
          </div>
          <div className="h-full max-h-[100%] text-7xl font-bold text-center flex items-center justify-center w-full bg-yellow-600">
            <img
              src={p3}
              alt=""
              className="w-full h-full object-cover cursor-pointer duration-[3s]   object-top hover:object-bottom"
            />
          </div>
          <div className="h-full max-h-[100%] text-7xl font-bold text-center flex items-center justify-center w-full bg-gray-600">
            <img
              src={p4}
              alt=""
              className="w-full h-full object-cover cursor-pointer duration-[3s]   object-top hover:object-bottom"
            />
          </div>{" "}
          <div className="h-full max-h-[100%] text-7xl font-bold text-center flex items-center justify-center w-full bg-yellow-600">
            4
          </div>
          <div className="h-full max-h-[100%] text-7xl font-bold text-center flex items-center justify-center w-full bg-green-600">
            5
          </div>
          <div className="h-full max-h-[100%] text-7xl font-bold text-center flex items-center justify-center w-full bg-yellow-600">
            6
          </div>
          <div className="h-full max-h-[100%] text-7xl font-bold text-center flex items-center justify-center w-full bg-blue-600">
            7
          </div>
          <div className="h-full max-h-[100%] text-7xl font-bold text-center flex items-center justify-center w-full bg-violet-600">
            8
          </div>
          <div className="h-full max-h-[100%] text-7xl font-bold text-center flex items-center justify-center w-full bg-blue-600">
            9
          </div>
        </div>
      </div>
    </div>
  );
};

export default HybridScrolling;
