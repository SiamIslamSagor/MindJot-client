import { AttentionSeeker, Fade } from "react-awesome-reveal";
import { Sling as Hamburger } from "hamburger-react";

// import { BackgroundBeams } from "./background-beams";
import { PiMouseSimpleThin } from "react-icons/pi";
// import { BsMouse } from "react-icons/bs";
import LinkItem from "./LinkItem";
// import ButtonYt from "../../pages/ButtonYt";
import { Button } from "@nextui-org/react";
import SectionVisibility from "./section-visibility";
import { useState } from "react";
import { cn } from "../../utils/cn";
import TicTacToe from "./TicTacToe";
import MobileNav from "./MobileNav";
import Contact from "./Contact";
import GlobeDemo from "../aceternityUi/GlobeDemo";

// import "../../../src/App.css";

const EntryView = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  // const [isOpen, setOpen] = useState(false);
  console.log(isMobileNavOpen);

  return (
    <div className="min-h-[400vh] border border-blue-700 ">
      <div>
        <MobileNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          setIsMobileNavOpen={setIsMobileNavOpen}
          isMobileNavOpen={isMobileNavOpen}
        />
      </div>
      <div
        id="entry-view"
        className="bg-[#e23c32] borderrr relative duration500 min-h-[400px] xsm:min-h-[550px] sm:min-h-[650px] md:min-h-[700px] lg:min-h-[100vh] flex items-center justify-center"
      >
        <div className="text-2xl -translate-y-10 2xl:-translate-y-20 borderrr sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-9xl uppercase text-center font-bold text-white px-2 flex flex-col gap-2">
          <div className="borderrr sm:mb-2 md:mb-3 lg:mb-5">
            <h2 className="duration-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black inline font-extrabold  leading-6  md:leading-10 font-sans relative after:content-[''] after:absolute after:size-3 after:duration-500 after:rounded-[50%] after:bg-white after:-right-[13px] after:bottom-[6px] md:after:bottom-[8px] lg:after:bottom-[10px] bg---[#a39b9b] after-animation-delay-class-2200 after:animate-[r2l-slide_1s_ease-in-out] [text-shadow:1px_1px_0_#b91c1c,2px_2px_0_#b91c1c,3px_3px_0_#b91c1c,4px_4px_0_#b91c1c,5px_5px_0_#b91c1c] ">
              dev
            </h2>
          </div>
          <div className="flex items-center justify-center gap-5 borderr">
            <h1 className="tracking-tight 2xl:leading-[150px] [text-shadow:1px_1px_0_#b91c1c,2px_2px_0_#b91c1c,3px_3px_0_#b91c1c,4px_4px_0_#b91c1c,5px_5px_0_#b91c1c,6px_6px_0_#b91c1c,7px_7px_0_#b91c1c,8px_8px_0_#b91c1c,9px_9px_0_#b91c1c]">
              Ideas
            </h1>
            <AttentionSeeker
              effect="rubberBand"
              delay={2500}
              className="text-black borderr max-lg:-mx-3  font-black"
            >
              <h1 className="tracking-tight  2xl:leading-[150px] [text-shadow:1px_1px_0_#b91c1c,2px_2px_0_#b91c1c,3px_3px_0_#b91c1c,4px_4px_0_#b91c1c,5px_5px_0_#b91c1c,6px_6px_0_#b91c1c,7px_7px_0_#b91c1c,8px_8px_0_#b91c1c,9px_9px_0_#b91c1c]">
                &
              </h1>
            </AttentionSeeker>
            <h1 className="tracking-tight 2xl:leading-[150px] [text-shadow:1px_1px_0_#b91c1c,2px_2px_0_#b91c1c,3px_3px_0_#b91c1c,4px_4px_0_#b91c1c,5px_5px_0_#b91c1c,6px_6px_0_#b91c1c,7px_7px_0_#b91c1c,8px_8px_0_#b91c1c,9px_9px_0_#b91c1c]">
              Innovation
            </h1>
          </div>
          <div className="borderr ">
            <h1 className="[textshadow:1px_1px_0_#d4d4d4,2px_2px_0_#d4d4d4,3px_3px_0_#d4d4d4,4px_4px_0_#d4d4d4,5px_5px_0_#d4d4d4,6px_6px_0_#d4d4d4,7px_7px_0_#d4d4d4,8px_8px_0_#d4d4d4,9px_9px_0_#d4d4d4] [text-shadow:1px_1px_0_#b91c1c,2px_2px_0_#b91c1c,3px_3px_0_#b91c1c,4px_4px_0_#b91c1c,5px_5px_0_#b91c1c,6px_6px_0_#b91c1c,7px_7px_0_#b91c1c,8px_8px_0_#b91c1c,9px_9px_0_#b91c1c] tracking-tight 2xl:leading-[150px]">
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
        className="bg-[#ff4439] mmmmin-h-20 stickynav sticky uppercase border-black  top-0 z-[9999] flex items-center border"
      >
        {/* <div>
          <MobileNav />
        </div> */}

        <div className="w-full flex items-center justify-between container mx-auto">
          <div className="max-sm:pl-2 flex  items-center justify-center gap-2 xsm:gap-">
            <div
              onClick={() => setIsMobileNavOpen(state => !state)}
              className="text-white text-3xl md:hidden  "
            >
              {/* <h3>
                <IoMenu />
              </h3> */}
              <Hamburger size={28} toggled={isMobileNavOpen} />
            </div>
            <div className="w-fit flex">
              <h2 className="max-md:px-2 duration-500 h-min text-white font-extrabold text-[21px] leading-6 md:text-[40px] md:leading-10 font-sans relative after:content-[''] after:absolute after:size-3 after:duration-500 after:rounded-[50%] after:bg-white after:-right-[13px] after:bottom-[2px] md:after:bottom-[3px] max-md:after:scale75 after:animate-[bigDotBounce_1.5s_ease-in-out]">
                dev
              </h2>
            </div>
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
      <div className="selection:text-[#111111] selection:bg-[#ff4439] ">
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
          <div className="min-h-[180vh] bg-[#ff7392]">
            <TicTacToe />
            <div className="flex items-center justify-center min-h-96">
              <img src="/bpi--favicon.ico" alt="" className="size-20" />
            </div>
          </div>
        </SectionVisibility>
        <SectionVisibility
          setActiveSection={setActiveSection}
          className={"scroll-mt-[63px]"}
          sectionName={"about me"}
        >
          <div className="min-h-[180vh] flex items-center justify-center text-9xl  text-white font-black  bg-[#950d2a]">
            2
          </div>
        </SectionVisibility>
        <SectionVisibility
          setActiveSection={setActiveSection}
          className={"scroll-mt-[63px]"}
          sectionName={"skills"}
        >
          <div className="min-h-[180vh] flex items-center justify-center text-9xl  text-white font-black  bg-[#07af20]">
            3
          </div>
        </SectionVisibility>
        <SectionVisibility
          setActiveSection={setActiveSection}
          className={"scroll-mt-[63px]"}
          sectionName={"works"}
        >
          <div className="min-h-[180vh] flex items-center justify-center text-9xl  text-white font-black  bg-[#100e9f]">
            4
          </div>
        </SectionVisibility>
        <SectionVisibility
          setActiveSection={setActiveSection}
          className={"scroll-mt-[63px]"}
          sectionName={"education"}
        >
          <div className="min-h-[180vh] flex items-center justify-center text-9xl  text-white font-black  bg-[#a8bb12]">
            5
          </div>
        </SectionVisibility>
        <SectionVisibility
          setActiveSection={setActiveSection}
          className={"scroll-mt-[63px]"}
          sectionName={"get-in-touch"}
        >
          <div className="min-h-[180vh] flex items-center justify-center text-9xl  text-white font-black  bg-[#111111]">
            <div className="w-full flex flex-col lg:flex-row gap-20 items-center justify-center container mx-auto ">
              <Contact className={"grow border-none"} />
              <div className="min-h-96 order rounded-3xl w-full grow ">
                <GlobeDemo />
              </div>
            </div>
          </div>
        </SectionVisibility>
      </div>
    </div>
  );
};

export default EntryView;
