import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import p1 from "../../assets/images/df-ss.png";
import p2 from "../../assets/images/fh-ss.png";
import p3 from "../../assets/images/ppp-ss.png";
import p4 from "../../assets/images/cm-ss.png";
import p5 from "../../assets/images/df-ss-dark.png";
const HybridScrolling = () => {
  const stickyWrapRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState("");
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = e => {
      console.log(e);
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  window.addEventListener("scroll", () => {
    for (let i = 0; i < [stickyWrapRef?.current]?.length; i++) {
      transform([stickyWrapRef?.current][i]);
    }
  });

  function transform(section) {
    const offsetTop = section?.parentElement?.offsetTop;

    let percentage =
      ((window?.scrollY - offsetTop) / window?.innerHeight) * 100;

    // console.log(percentage);

    percentage = percentage > 900 ? 900 : percentage;

    setTransformStyle(`translate3d(${-percentage}vw, 0, 0)`);
  }

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      mixBlendMode: "difference",
    },
    text: {
      height: 300,
      width: 300,
      x: mousePosition.x - 150,
      y: mousePosition.y - 150,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  // console.log(transformStyle);
  return (
    <div className="h-[500vh] md:h-[320vh] flex flex-col">
      <motion.div
        className={`work_circle pointer-events-none size-8 rounded-full bg-primary-deep-redddd border !border-white fixed top-0 left-0 z-[99999999999999] flex items-center justify-center ${
          (mousePosition?.x && mousePosition.y) || "hidden"
        }`}
        variants={variants}
        animate={cursorVariant}
      >
        <div className="size-4 !bg-primary-deep-red rounded-full"></div>
      </motion.div>
      <div className="flex gap-2 *:border mx-auto my-20">
        <div className="size-10 bg-deep-rose"></div>
        <div className="size-10 bg-deep-green"></div>
        <div className="size-10 bg-primary-deep-black"></div>
        <div className="size-10 bg-primary-deep-red"></div>
        <div className="size-10 bg-light-blue"></div>
        <div className="size-10 bg-light-rose"></div>
        <div className="size-10 bg-light-black"></div>
        <div className="size-10 bg-primary-light-red"></div>
      </div>
      {/* <h2
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="m-40 text-7xl capitalize text-whit bg-[yellow] font-semibold text-center"
      >
        hello world
      </h2> */}
      <div
        ref={stickyWrapRef}
        className="overflow-hidden sticky top-[180px] h-[50vh] sm:h-[60vh] md:h-[50vh] lg:h-[70vh] "
      >
        <div
          style={{ transform: transformStyle }}
          className="absolute top-0 h-full w-[500vw] md:w-[250vw] [will-change:transform] flex justify-between "
        >
          <div
            className="h-full max-h-[100%] text-7xl font-bold text-center flex items-center justify-center w-full bg-red-600 mx-5"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <img
              src={p1}
              alt=""
              className="w-full h-full object-cover cursor-pointer duration-[6s]   object-top hover:object-bottom"
            />
          </div>
          <div
            className={`h-full max-h-[100%] text-7xl font-bold text-center flex items-center justify-center w-full bg-green-600  mx-2 md:mx-3 lg:mx-5`}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <img
              src={p2}
              alt=""
              className="w-full h-full object-cover cursor-pointer duration-[3s]   object-top hover:object-bottom"
            />
          </div>
          <div
            className="h-full max-h-[100%] text-7xl font-bold text-center flex items-center justify-center w-full bg-yellow-600 mx-2 md:mx-3 lg:mx-5"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <img
              src={p3}
              alt=""
              className="w-full h-full object-cover cursor-pointer duration-[3s]   object-top hover:object-bottom"
            />
          </div>
          <div
            className="h-full max-h-[100%] text-7xl font-bold text-center flex items-center justify-center w-full bg-gray-600 mx-2 md:mx-3 lg:mx-5"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <img
              src={p4}
              alt=""
              className="w-full h-full object-cover cursor-pointer duration-[3s]   object-top hover:object-bottom"
            />
          </div>{" "}
          <div
            className="h-full max-h-[100%] text-7xl font-bold text-center flex items-center justify-center w-full bg-yellow-600 mx-2 md:mx-3 lg:mx-5"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <img
              src={p5}
              alt=""
              className="w-full h-full object-cover cursor-pointer duration-[6s]   object-top hover:object-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HybridScrolling;
