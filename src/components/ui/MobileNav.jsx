import { useState } from "react";
import { cn } from "../../utils/cn";
import { Fade } from "react-awesome-reveal";

const MobileNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(true);

  return (
    <div>
      <div
        onClick={() => setIsMobileNavOpen(state => !state)}
        className="fixed z-[9999999999999] top-0 right-0 p-5 bg-red-300 my-2 cursor-pointer"
      >
        <span className="text-3xl   p-5">open</span>
      </div>
      <div
        className={cn(
          "bg-red-400 duration[600ms] min-h-screen min-w-full z-[9999999999999999999999] fixed",
          isMobileNavOpen ? "scale-100" : "scale-[0]"
        )}
      >
        <Fade delay={isMobileNavOpen ? 2000 : 2000}>
          <div className="text-3xl text-right p-5">
            <span
              onClick={() => setIsMobileNavOpen(state => !state)}
              className="border cursor-pointer"
            >
              {isMobileNavOpen ? "close" : ""}
            </span>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default MobileNav;
