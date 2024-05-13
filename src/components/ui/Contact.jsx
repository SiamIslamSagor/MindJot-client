/* eslint-disable react/prop-types */
import { cn } from "../../utils/cn";
import CustomInp from "./custom-inp";
// import { useState } from "react";

const Contact = ({ className }) => {
  // const [hasValue, setHasValue] = useState("");
  return (
    <div
      className={cn(
        "selection:text-[#111111] selection:bg-[#ff4439] max-w-2xl w-full dark border font-normal",
        className
      )}
    >
      <div>
        <form>
          <div className=" my-10 min-h-96 p-5 space-y-8">
            {/* <div className="flex flex-col relative group ">
              <input
                id="full name"
                type="text"
                className="py-2 active:ring-0 active:border-none active:outline-none focus:ring-0 focus:border-none focus:outline-none font-normal bg-transparent peer  "
                onChange={e => {
                  setHasValue(e.target.value);
                }}
              />
              <div className="border-b-2 rounded-xl border-[#202020] relative w-full bottom-0 after:content-[''] after:absolute after:h-[2px] after:w-full after:bg-white after:duration-300 after:ease-in-out after:scale-x-0 after:rounded-xl peer-focus:after:scale-x-100"></div>

              <label
                htmlFor="full name"
                className={cn(
                  "absolute bottom-[11px]  px-5 peer-focus:bottom-[35px]  [transition:0.3s_ease-in-out] peer-focus:px-0 text-gray-300",
                  hasValue ? "bottom-[35px] px-0" : "bottom-[9px]"
                )}
              >
                Full Name
              </label>
            </div> */}
            <CustomInp />
            <CustomInp />
            <CustomInp />
            <CustomInp />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
