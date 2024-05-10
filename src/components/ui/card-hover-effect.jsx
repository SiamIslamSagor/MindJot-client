/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";
// import {
//   SiCss3,
//   SiExpress,
//   SiFirebase,
//   SiJavascript,
//   SiMongodb,
//   SiNetlify,
//   SiNextdotjs,
//   SiNodedotjs,
//   SiTailwindcss,
//   SiVercel,
// } from "react-icons/si";
// import { FaGithub, FaHtml5, FaReact } from "react-icons/fa6";
// import { VscVscode } from "react-icons/vsc";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 py-10 container mx-auto",
        className
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <Link
            to={item?.url}
            key={item?.url}
            target="_blank"
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-white  block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <Card className={"bg-[#151515]"}>
              <Icon className="size-10 mx-auto" />
              <p className="text-2xl font-semibold text-center text-gray-300">
                {item.title}
              </p>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl w-full p-4 overflow-hidden bg-[#0a0a0a] group-hover:ring-2 ring-primary-light-red relative z-20 transition-all duration-1000 cursor-pointer text-white",
        className
      )}
    >
      <div className="py-10 z-50 relative space-y-5">{children}</div>
    </div>
  );
};
