/* eslint-disable react/prop-types */
function Square(props) {
  return (
    <div
      className={
        "size-[100px] text-[4rem] text-center box-border border-2 border-red-400"
      }
      {...props}
    >
      {props.x ? "x" : props.o ? "o" : ""}
    </div>
  );
}

export default Square;
