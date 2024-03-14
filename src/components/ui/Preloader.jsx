import { useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true); // Initial loading state

  // Simulate asynchronous loading (replace with your actual loading logic)
  setTimeout(() => setIsLoading(false), 2000); // Example delay

  return (
    <div
      // className={` md:w-full w-full h-full overflow-hidden text-white uppercase bg-[#161616] bg fixed duration-[5s] left-0 z-[999999] flex items-center justify-center`}
      className={`${
        isLoading ? "top-0" : "-top-[1000ch]"
      }  md:w-full w-full h-full overflow-hidden text-white uppercase bg-[#161616] bg fixed duration-[5s] left-0 z-[999999] flex items-center justify-center`}
    >
      <div className="w-fit flex">
        {/* <h2 className="duration-500 font-extrabold text-[21px] leading-6 md:text-[40px] md:leading-10 font-sans relative ">
          red
        </h2>
        <div className="relative scale-50 size-[50px] rounded-[50%] bg-red-500 ball duration-500"></div> */}
        <h2 className="duration-500 font-extrabold text-[21px] leading-6 md:text-[40px] md:leading-10 font-sans relative after:content-[''] after:absolute after:size-3 after:duration-500 after:rounded-[50%] after:bg-white after:-right-[13px] after:bottom-[2px] md:after:bottom-[3px] max-md:after:scale75 after:animate-[bigDotBounce_1.5s_ease-in-out]">
          dev
        </h2>
        {/* <h2 className="duration-500 font-extrabold text-[21px] leading-6 md:text-[40px] md:leading-10 font-sans relative after:content-[''] after:absolute after:size-3 after:duration-500 after:rounded-full after:bg-white after:-right-[13px] after:bottom-[0px] md:after:bottom-[3px] max-md:after:scale-75 after:animate-[bigDotBounce_1.5s_ease-in-out]  hover:after:animate-[bigDotBounce_1s_ease-in-out_infinite]">
          red
        </h2> */}
      </div>
    </div>
  );
}
