/* eslint-disable react/prop-types */
import { Fade } from "react-awesome-reveal";
import { SparklesCore } from "./sparkles";
import { cn } from "../../utils/cn";

const SectionHeading = ({ className, heading = "Heading" }) => {
  return (
    <div className={cn(className)}>
      <div className="overflow-hidden">
        <Fade direction="up" duration={1400}>
          <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white pb-2 relative z-20 duration-1000 selection:text-[#111111] selection:bg-[#ff4439]">
            {heading}
          </h1>
        </Fade>
      </div>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary-deep-red to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary-deep-red to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-primary-light-red to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-primary-light-red to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={800}
          className="w-full h-[100%]"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-primary-deep-black  [mask-image:radial-gradient(250px_100px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};

export default SectionHeading;
