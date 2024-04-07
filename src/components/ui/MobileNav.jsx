import { useState } from "react";
import { cn } from "../../utils/cn";
import { Fade, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

const MobileNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [pathname, setPathname] = useState("/");

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
          " bg-[#ff4439] text-white font-semibold  min-h-screen min-w-full z-[9999999999999999999999] fixed",
          isMobileNavOpen
            ? "scale-100 duration-[1000ms] rounded-none"
            : "scale-[0] rounded-full duration-[300ms]"
        )}
      >
        <div className="text-3xl text-right p-5">
          <span
            onClick={() => setIsMobileNavOpen(state => !state)}
            className="border cursor-pointer"
          >
            {isMobileNavOpen ? "close" : ""}
          </span>{" "}
        </div>
        <Zoom delay={1200} duration={1200} className="my-32  bggreen-400">
          {isMobileNavOpen && (
            <Fade
              delay={1500}
              duration={500}
              // damping={0.5}
              cascade
              className="text-3xl text-center my-5"
            >
              {/* <p>
                home, about me, skills, project, education, contact me first...
              </p> */}
              <p>home</p>
              <p>about me</p>
              <p>skills</p>
              <p>works</p>
              <p>education</p>
              <p>contact me</p>

              {/* <Link
                onClick={() => setPathname("/")}
                className={pathname === "/" ? activeLinkStyle : normalLinkStyle}
              >
                home
              </Link>
              <Link
                onClick={() => setPathname("/")}
                className={pathname === "/" ? activeLinkStyle : normalLinkStyle}
              >
                home
              </Link>
              <Link
                onClick={() => setPathname("/")}
                className={pathname === "/" ? activeLinkStyle : normalLinkStyle}
              >
                home
              </Link>
              <Link
                onClick={() => setPathname("/")}
                className={pathname === "/" ? activeLinkStyle : normalLinkStyle}
              >
                home
              </Link> */}
            </Fade>
          )}
        </Zoom>

        {/* {isMobileNavOpen && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-3xl text-right p-5"
            >
              <span
                onClick={() => setIsMobileNavOpen(state => !state)}
                className="border cursor-pointer"
              >
                {isMobileNavOpen ? "close" : ""}
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              iure, repellendus eaque, a temporibus cum ducimus blanditiis
              numquam harum aperiam dignissimos impedit officia maxime labore
              rerum vel, dolorem quod deleniti?
            </motion.div>
          </AnimatePresence>
        )} */}
      </div>
    </div>
  );
};

const activeLinkStyle =
  "border-x-[48px] border-y-[24px] border-transparent relative text-xs font-semibold leading-6 uppercase before:content-[''] before:absolute before:size-1 before:scale-0 before:rotate-45 before:-translate-x-1/2 before:bg-white before:rounded-full before:-left-4 hover:before:animate-dot before:bottom-1/2 before:translate-y-1/2 before:duration-500 hover:before:scale-[3] after:absolute after:content-[''] after:bg-white after:rounded-xl after:h-1 after:w-full after:duration-500 after:-bottom-1 after:left-0 after:scale-x-100";

const normalLinkStyle =
  "border-x-[48px] border-y-[24px] border-transparent relative text-xs font-semibold leading-6 uppercase before:content-[''] before:absolute before:size-1 before:scale-0 before:rotate-45 before:-translate-x-1/2 before:bg-white before:rounded-full before:-left-4 hover:before:animate-dot before:bottom-1/2 before:translate-y-1/2 before:duration-500 hover:before:scale-[3] after:absolute after:content-[''] after:bg-white after:rounded-xl after:h-1 after:w-full after:duration-500 after:-bottom-1 after:left-0 after:scale-x-0";

export default MobileNav;
