import { useRef } from "react";

/* eslint-disable react/prop-types */
function ImageMagnifier({
  src,
  width,
  height,
  //   magnifierHeight = 100,
  //   magnifieWidth = 100,
  //   zoomLevel = 3,
}) {
  //   const [[x, y], setXY] = useState([0, 0]);
  //   const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  //   const [showMagnifier, setShowMagnifier] = useState(true);

  const containerRef = useRef(null);
  //   const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  //   console.log(x, y);
  return (
    <div
      style={{
        position: "relative",
        height: height,
        width: width,
      }}
    >
      <img
        ref={containerRef}
        src={src}
        style={{ height: height, width: width }}
        className="object-cover object-left-top absolute rounded-lg inset-0"
        /*  onMouseEnter={e => {
          // update image size and turn-on magnifier
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }} */
        /*  onMouseMove={e => {
          // update cursor position
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          // calculate cursor position on the image
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }} */
        /* onMouseMove={e => {
          // const x = e.pageX;
          // const y = e.pageY;
          // console.log(x, y);
          const rect = containerRef.current.getBoundingClientRect();
          console.log(rect);
          setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
          console.log({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
          let xx = e.clientX - rect.left;
          let yy = e.clientY - rect.top;
          setXY([xx, yy]);
        }}
        onMouseLeave={() => {
          // close magnifier
          setShowMagnifier(false);
        }} */
        alt={"img"}
      />

      <div
      /* className={`${
          containerRef.current.getBoundingClientRect().width / 2 > x
            ? "-translate-x-[50%]"
            : "translate-x-[50%]"
        } duration-200`}
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",
          borderRadius: "50%",

          // prevent maginier blocks the mousemove event of img
          pointerEvents: "none",
          // set size of magnifier
          height: `${magnifierHeight}px`,
          width: `${magnifieWidth}px`,
          // move element center to cursor pos
          top: y,
          left: x,
          //   top: `${y - magnifierHeight / 2}px`,
          //   left: `${x - magnifieWidth / 2}px`,
          opacity: "1", // reduce opacity so you can verify position
          border: "1px solid lightgray",
          backgroundColor: "white",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",

          //calculate zoomed image size
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,

          //calculete position of zoomed image.
          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        }} */
      ></div>
    </div>
  );
}
export default ImageMagnifier;
