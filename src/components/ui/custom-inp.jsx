/* eslint-disable react/prop-types */
import { useState } from "react";
import { cn } from "../../utils/cn";

const CustomInp = ({ className }) => {
  const [hasValue, setHasValue] = useState("");

  return (
    <div className={cn("flex flex-col relative group ", className)}>
      <input
        id="full name"
        type="text"
        className="py-2 active:ring-0 active:border-none active:outline-none focus:ring-0 focus:border-none focus:outline-none font-normal bg-transparent peer selection:text-[#111111] selection:bg-[#ff4439]  "
        onChange={e => {
          setHasValue(e.target.value);
        }}
      />

      {/* input top text */}
      {/* <span className="min-h-5 bg-[#0a0a0a] w-fit px-2 mx2 absolute -translate-y-3 scale-x-0 duration-300 peer-focus:scale-x-100 text-opacity-0">
        <span className="opacity-0">Full Name</span>
      </span> */}

      {/* input bottom line */}
      <div className="border-b-2 rounded-xl border-[#202020] relative w-full bottom-0 after:content-[''] after:absolute after:h-[2px] after:w-full after:bg-white after:duration-300 after:ease-in-out after:scale-x-0 after:rounded-xl peer-focus:after:scale-x-100"></div>

      <label
        htmlFor="full name"
        className={cn(
          "absolute bottom-[11px]  px-5 peer-focus:bottom-[35px]  [transition:0.3s_ease-in-out] peer-focus:px-0 text-gray-300  pointer-events-none selection:text-[#111111] selection:bg-[#ff4439] ",
          hasValue ? "bottom-[35px] px-0" : "bottom-[9px]"
        )}
      >
        Full Name
      </label>
    </div>
  );
};

export default CustomInp;
