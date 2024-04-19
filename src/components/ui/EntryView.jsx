import { AttentionSeeker, Fade } from "react-awesome-reveal";
// import { BackgroundBeams } from "./background-beams";
import { PiMouseSimpleThin } from "react-icons/pi";
// import { BsMouse } from "react-icons/bs";
import LinkItem from "./LinkItem";
import ButtonYt from "../../pages/ButtonYt";
import { Button } from "@nextui-org/react";
import SectionVisibility from "./section-visibility";
import { useState } from "react";
import { cn } from "../../utils/cn";
import TicTacToe from "./TicTacToe";

// import "../../../src/App.css";

const EntryView = () => {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <div className="min-h-[400vh] border border-blue-700 ">
      <div
        id="entry-view"
        className="bg-[#e23c32] borderrr relative duration500 min-h-[400px] xsm:min-h-[550px] sm:min-h-[650px] md:min-h-[700px] lg:min-h-[100vh] flex items-center justify-center"
      >
        <div className="text-2xl -translate-y-10 2xl:-translate-y-20 borderrr sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-9xl uppercase text-center font-bold text-white px-2 flex flex-col gap-2">
          <div className="borderrr sm:mb-2 md:mb-3 lg:mb-5">
            <h2 className="duration-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black inline font-extrabold  leading-6  md:leading-10 font-sans relative after:content-[''] after:absolute after:size-3 after:duration-500 after:rounded-[50%] after:bg-white after:-right-[13px] after:bottom-[6px] md:after:bottom-[8px] lg:after:bottom-[10px] after-animation-delay-class-2200 after:animate-[r2l-slide_1s_ease-in-out] ">
              dev
            </h2>
          </div>
          <div className="flex items-center justify-center gap-5 borderr">
            <h1 className="tracking-tight 2xl:leading-[150px]">Ideas</h1>
            <AttentionSeeker
              effect="rubberBand"
              delay={2500}
              className="text-black borderr max-lg:-mx-3  font-black"
            >
              <h1 className="tracking-tight  2xl:leading-[150px]">&</h1>
            </AttentionSeeker>
            <h1 className="tracking-tight 2xl:leading-[150px]">Innovation</h1>
          </div>
          <div className="borderr ">
            <h1 className="tracking-tight 2xl:leading-[150px]">
              MERN Stack <br className="max-lg:hidden 2xl:leading-[150px]" />{" "}
              <span className="mt-20 brdjcjer leading-6  md:leading-10 font-sans relative after:content-[''] after:absolute after:size-3 2xl:after:size-8 after:duration-500 after:rounded-[50%] after:bg-black after:-right-[15px] sm:after:-right-[18px] lg:after:-right-[20px] 2xl:after:-right-[38px] after:bottom-[4px] sm:after:bottom-[6px] md:after:bottom-[8px] lg:after:bottom-[12px] xl:after:bottom-[14px] 2xl:after:bottom-[30px] max-md:after:scale75 after-animation-delay-class-3000 after:animate-[bigDotBounce_1.5s_ease-in-out]">
                Solutions
              </span>
            </h1>{" "}
          </div>
        </div>
        <div></div>
        <div className="absolute bottom-10 opacity-50 cursor-pointer max-xsm:scale-75 ">
          <a href="#home">
            <div>
              <div className="flex items-center justify-center ">
                <PiMouseSimpleThin className="text-4xl 2xl:text-5xl animate-verticalBounce" />
              </div>
              <div>
                <Fade
                  className="uppercase font-semibold  inline-block text-center"
                  cascade
                  damping={0.1}
                  direction="up"
                  delay={2500}
                  duration={1800}
                >
                  <span>s</span>
                  <span>c</span>
                  <span>r</span>
                  <span>o</span>
                  <span>l</span>
                  <span>l</span>
                </Fade>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div
        id="nav"
        className="bg-[#ff4439] mmmmin-h-20 stickynav sticky uppercase border-black  top-0 z-[9999] flex items-center"
      >
        <div className="w-full flex items-center justify-between container mx-auto">
          <div className="w-fit flex">
            <h2 className="max-md:px-2 duration-500 h-min text-white font-extrabold text-[21px] leading-6 md:text-[40px] md:leading-10 font-sans relative after:content-[''] after:absolute after:size-3 after:duration-500 after:rounded-[50%] after:bg-white after:-right-[13px] after:bottom-[2px] md:after:bottom-[3px] max-md:after:scale75 after:animate-[bigDotBounce_1.5s_ease-in-out]">
              dev
            </h2>
          </div>
          <div className="flex items-center  bg-[#ff4439] ">
            <LinkItem
              className={"max-md:hidden"}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            {/* <div>
              <a href=""></a>
            </div> */}
            <div className="lg:ml-10 2xl:ml-20">
              <a href="#get-in-touch">
                <Button
                  radius="none"
                  size="lg"
                  className={cn(
                    "hover:!opacity-100 font-semibold uppercase relative inline-flex p-8 bg-[#151515] hover:bg-white hover:text-black text-white tracking-w overflow-hidden z-50 text-xs 2xl:text-sm",
                    activeSection === "get-in-touch"
                      ? "bg-white text-black"
                      : "bg-[#151515]"
                  )}
                >
                  get in touch
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        {/* <div className="space-y-5 p-10 space-x-4">
          <ButtonYt />
          <ButtonYt />
          <ButtonYt />
          <ButtonYt />
        </div> */}
        <SectionVisibility
          setActiveSection={setActiveSection}
          className={"scroll-mt-[63px]"}
          sectionName={"home"}
        >
          <div className="min-h-[80vh] bg-[#ff7392]">
            <TicTacToe />
          </div>
        </SectionVisibility>
        <SectionVisibility
          setActiveSection={setActiveSection}
          className={"scroll-mt-[63px]"}
          sectionName={"about me"}
        >
          <div className="min-h-[80vh] flex items-center justify-center text-9xl  text-white font-black  bg-[#950d2a]">
            2
          </div>
        </SectionVisibility>
        <SectionVisibility
          setActiveSection={setActiveSection}
          className={"scroll-mt-[63px]"}
          sectionName={"skills"}
        >
          <div className="min-h-[80vh] flex items-center justify-center text-9xl  text-white font-black  bg-[#07af20]">
            3
          </div>
        </SectionVisibility>
        <SectionVisibility
          setActiveSection={setActiveSection}
          className={"scroll-mt-[63px]"}
          sectionName={"works"}
        >
          <div className="min-h-[80vh] flex items-center justify-center text-9xl  text-white font-black  bg-[#100e9f]">
            4
          </div>
        </SectionVisibility>
        <SectionVisibility
          setActiveSection={setActiveSection}
          className={"scroll-mt-[63px]"}
          sectionName={"education"}
        >
          <div className="min-h-[80vh] flex items-center justify-center text-9xl  text-white font-black  bg-[#a8bb12]">
            5
          </div>
        </SectionVisibility>
        <SectionVisibility
          setActiveSection={setActiveSection}
          className={"scroll-mt-[63px]"}
          sectionName={"get-in-touch"}
        >
          <div className="min-h-[80vh] flex items-center justify-center text-9xl  text-white font-black  bg-[#e90f74]">
            6
          </div>
        </SectionVisibility>
      </div>
    </div>
  );
};

export default EntryView;
