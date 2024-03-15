/* eslint-disable react/prop-types */
function Square(props) {
  return (
    <div
      className={`size-[100px] text-[4rem] flex items-center font-extrabold justify-center box-border border-2 text-white cursor-pointer                                                   pbbbb-3           ${
        props.x
          ? "[text-shadow:0_0_10px_#ff4439,_0_0_20px_#ff4439,_0_0_30px_#ff4439,_0_0_40px_#ff4439,_0_0_60px_#ff4439]"
          : props.o
          ? "[text-shadow:0_0_10px_#6366f1,_0_0_20px_#6366f1,_0_0_30px_#6366f1,_0_0_40px_#6366f1,_0_0_60px_#6366f1]"
          : ""
      }`}
      // className={
      //   "size-[100px] text-[4rem] flex items-center justify-center box-border border-2 text-white                                                   pbbbb-3           [text-shadow:0_0_10px_#ffff,_0_0_20px_#ffff,_0_0_30px_#ffff,_0_0_40px_#ffff,_0_0_60px_#ffff]"
      // }
      {...props}
    >
      {props.x ? "x" : props.o ? "o" : ""}
    </div>
  );
}

export default Square;
