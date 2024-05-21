import { AttentionSeeker } from "react-awesome-reveal";
import { Sling as Hamburger } from "hamburger-react";

// import { BackgroundBeams } from "./background-beams";

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
import { CardHoverEffectDemo } from "../aceternityUi/CardHoverEffectDemo";
import { Toaster } from "react-hot-toast";
import SectionHeading from "./section-heading";

// import "../../../src/App.css";

const EntryView = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  // const [isOpen, setOpen] = useState(false);
  console.log(isMobileNavOpen);

  return (
    <div className="min-h-[400vh] brder border-blue-700 ">
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
              <span className="[font-family:Bangers,cursive]">MERN Stack</span>{" "}
              <br className="max-lg:hidden 2xl:leading-[150px]" />{" "}
              <span className="mt-20 brdjcjer leading-6  md:leading-10 font-sans relative after:content-[''] after:absolute after:size-3 2xl:after:size-8 after:duration-500 after:rounded-[50%] after:bg-black after:-right-[15px] sm:after:-right-[18px] lg:after:-right-[20px] 2xl:after:-right-[38px] after:bottom-[4px] sm:after:bottom-[6px] md:after:bottom-[8px] lg:after:bottom-[12px] xl:after:bottom-[14px] 2xl:after:bottom-[30px] max-md:after:scale75 after-animation-delay-class-3000 after:animate-[bigDotBounce_1.5s_ease-in-out]">
                Solutions
              </span>
            </h1>{" "}
          </div>
        </div>
        <div></div>
        <div className="absolute bottom-10 text-slate-800 opacity50 cursor-pointer max-xsm:scale-75 ">
          <a href="#home">
            <div>
              <div className="flex flex-col -space-y-28 items-center justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="103"
                  height="94"
                  fill="none"
                  viewBox="0 0 103 94"
                  className=" animate-verticalBounce"
                >
                  <path
                    className="ScrollArrow_arrow__BVESl"
                    fill="url(#paint0_linear_476_1366)"
                    d="M50.54 54.46a.65.65 0 00.92 0l4.136-4.137a.65.65 0 00-.919-.92L51 53.082l-3.677-3.677a.65.65 0 00-.92.919l4.137 4.137zM50.35 0v54h1.3V0h-1.3z"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_476_1366"
                      x1="51.153"
                      x2="44.74"
                      y1="10.64"
                      y2="11.525"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff"></stop>
                      <stop offset="1" stopColor="#fff"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_476_1366"
                      x1="20.294"
                      x2="69.143"
                      y1="76.701"
                      y2="121.688"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff"></stop>
                      <stop offset="1" stopColor="#fff"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="103"
                  height="94"
                  fill="none"
                  viewBox="0 0 103 94"
                >
                  <path
                    fill="url(#paint1_linear_476_1366)"
                    d="M3.465 90.154a3.62 3.62 0 01-1.474-.286 2.325 2.325 0 01-1.023-.891c-.25-.403-.374-.913-.374-1.529v-.209h.704v.209c0 .711.202 1.24.605 1.584.41.337.931.506 1.562.506.638 0 1.13-.147 1.474-.44.345-.3.517-.682.517-1.144 0-.308-.077-.554-.231-.737a1.46 1.46 0 00-.627-.451 5.677 5.677 0 00-.924-.308l-.704-.176a6.074 6.074 0 01-1.122-.407 2.145 2.145 0 01-.781-.649c-.19-.271-.286-.616-.286-1.034 0-.418.106-.781.319-1.089.22-.308.52-.543.902-.704.381-.169.825-.253 1.331-.253s.96.088 1.364.264c.41.176.733.436.968.781.242.337.363.763.363 1.276v.517h-.704v-.517c0-.403-.088-.73-.264-.979a1.535 1.535 0 00-.715-.55 2.765 2.765 0 00-1.012-.176c-.535 0-.979.125-1.331.374-.345.242-.517.594-.517 1.056 0 .308.07.554.209.737.147.183.348.33.605.44.264.11.572.209.924.297l.704.176a5.5 5.5 0 011.111.385c.337.154.609.37.814.649.205.271.308.63.308 1.078 0 .447-.114.836-.341 1.166a2.17 2.17 0 01-.935.77c-.403.176-.876.264-1.419.264zm19.472 0c-.902 0-1.624-.264-2.167-.792-.535-.535-.803-1.316-.803-2.343v-1.738c0-1.027.268-1.804.803-2.332.543-.535 1.265-.803 2.167-.803.895 0 1.577.253 2.046.759.477.499.715 1.18.715 2.046v.055h-.704v-.077c0-.63-.168-1.144-.506-1.54-.33-.403-.847-.605-1.55-.605-.712 0-1.27.216-1.673.649-.396.433-.594 1.041-.594 1.826v1.782c0 .785.198 1.393.594 1.826.404.433.961.649 1.672.649.704 0 1.221-.198 1.551-.594.338-.403.506-.92.506-1.551v-.165h.704v.143c0 .865-.238 1.551-.715 2.057-.469.499-1.151.748-2.046.748zM39.741 90v-7.7h3.014c.477 0 .895.08 1.254.242.367.161.653.396.858.704.213.3.32.667.32 1.1v.11c0 .52-.125.931-.375 1.232-.25.293-.542.488-.88.583v.132a.996.996 0 01.65.242c.175.154.263.4.263.737V90h-.704v-2.541c0-.235-.066-.414-.198-.539-.124-.125-.315-.187-.572-.187h-2.926V90h-.704zm.704-3.905h2.244c.572 0 1.012-.132 1.32-.396.316-.271.473-.656.473-1.155v-.055c0-.499-.154-.88-.462-1.144-.3-.271-.744-.407-1.33-.407h-2.245v3.157zm21.438 4.059c-.902 0-1.621-.264-2.156-.792-.536-.535-.803-1.316-.803-2.343v-1.738c0-1.027.267-1.804.803-2.332.535-.535 1.254-.803 2.156-.803.902 0 1.62.268 2.156.803.535.528.803 1.305.803 2.332v1.738c0 1.027-.268 1.808-.803 2.343-.536.528-1.254.792-2.156.792zm0-.638c.718 0 1.272-.216 1.66-.649.397-.433.595-1.041.595-1.826v-1.782c0-.785-.198-1.393-.594-1.826-.389-.433-.943-.649-1.661-.649-.712 0-1.265.216-1.661.649-.396.433-.594 1.041-.594 1.826v1.782c0 .785.198 1.393.594 1.826.396.433.95.649 1.66.649zM78.977 90v-7.7h.704v7.062h4.048V90h-4.752zm18.5 0v-7.7h.704v7.062h4.048V90h-4.752z"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_476_1366"
                      x1="51.153"
                      x2="44.74"
                      y1="10.64"
                      y2="11.525"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff"></stop>
                      <stop offset="1" stopColor="#fff"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_476_1366"
                      x1="20.294"
                      x2="69.143"
                      y1="76.701"
                      y2="121.688"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff"></stop>
                      <stop offset="1" stopColor="#fff"></stop>
                    </linearGradient>
                  </defs>
                </svg>

                {/* <PiMouseSimpleThin className="text-4xl 2xl:text-5xl animate-verticalBounce" /> */}
              </div>
            </div>
          </a>
        </div>
      </div>
      <div
        id="nav"
        className="bg-[#ff4439] mmmmin-h-20 stickynav sticky uppercase  top-0 z-[9999] flex items-center "
      >
        {/* <div>
          <MobileNav />
        </div> */}

        <div className="w-full flex items-center justify-between container mx-auto 2xl:max-w-7xl md:px-2 lg:px-5">
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
              <a href="#">
                <h2 className="max-md:px-2 duration-500 h-min text-white font-extrabold text-[21px] leading-6 md:text-[40px] md:leading-10 font-sans relative after:content-[''] after:absolute after:size-3 after:duration-500 after:rounded-[50%] after:bg-white after:-right-[13px] after:bottom-[2px] md:after:bottom-[3px] max-md:after:scale75 after:animate-[bigDotBounce_1.5s_ease-in-out]">
                  dev
                </h2>
              </a>
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
                    "hover:!opacity-100 font-semibold uppercase relative inline-flex p-8 bg-[#0a0a0a] hover:bg-white hover:text-black text-white hover:duration-300 overflow-hidden z-50 text-xs 2xl:text-sm",
                    activeSection === "get-in-touch"
                      ? "bg-white text-black"
                      : "bg-[#0a0a0a]"
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
        <Toaster />
        <SectionVisibility
          setActiveSection={setActiveSection}
          className={"scroll-mt-[63px]"}
          sectionName={"home"}
        >
          <div className="min-h-[100vh] bg-[#ff7392]">
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
          <div className="min-h-[100vh] flex items-center justify-center text-9xl  text-white font-black  bg-[#950d2a]">
            2
          </div>
          {/* <div className="min-h-[100vh] flex items-center justify-center w-full text-white  bg-[#950d2a]">
            <div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                {posts.map((post, idx) => {
                  return (
                    <div
                      key={post._id}
                      className={`border m-2 duration-1000 ${
                        idx === 1
                          ? "bg-blue-500 lg:col-span-2 lg:row-span-2"
                          : ""
                      }`}
                    >
                      <div>
                        <img
                          src={post.img}
                          alt={post.title}
                          className="size-full"
                        />
                      </div>
                      <div>
                        <p className="text-xl font-medium text-center">
                          {post.title}
                        </p>
                        <p>{post.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div> */}
        </SectionVisibility>
        <SectionVisibility
          setActiveSection={setActiveSection}
          className={"scroll-mt-[63px]"}
          sectionName={"skills"}
        >
          <div className="w-full  bg-[#0a0a0a]">
            <SectionHeading heading="Skills" />
            <CardHoverEffectDemo />
          </div>
          {/* <div className="min-h-[100vh] flex items-center justify-center text-9xl  text-white font-black  bg-[#07af20]">
            3
          </div> */}
        </SectionVisibility>
        <SectionVisibility
          setActiveSection={setActiveSection}
          className={"scroll-mt-[63px]"}
          sectionName={"works"}
        >
          <div className="min-h-[100vh] flex items-center justify-center text-9xl  text-white font-black  bg-[#100e9f]">
            4
          </div>
        </SectionVisibility>
        <SectionVisibility
          setActiveSection={setActiveSection}
          className={"scroll-mt-[63px]"}
          sectionName={"education"}
        >
          <div className="min-h-[100vh] flex items-center justify-center text-9xl  text-white font-black  bg-[#a8bb12]">
            5
          </div>
        </SectionVisibility>
        <SectionVisibility
          setActiveSection={setActiveSection}
          className={"scroll-mt-[63px] overflow-hidden"}
          sectionName={"get-in-touch"}
        >
          <div className="min-h-[100vh] flex flex-col items-center justify-center text9xl  text-white font-black  bg-primary-deep-black">
            <SectionHeading heading="Contact" />
            <div className=" w-full flex flex-col lg:flex-row gap-5 items-center justify-center container mx-auto max-w-7xl">
              <Contact className={"grow border-none"} />
              <div className="min-h-96 rounded-3xl w-full grow ">
                <GlobeDemo />
              </div>
            </div>
          </div>
        </SectionVisibility>
      </div>
    </div>
  );
};

// const posts = [
//   {
//     _id: "100000",
//     img: "https://thumbs.dreamstime.com/b/funny-shocked-man-covering-mouth-hand-laughs-making-big-eyes-oops-absurd-accident-frightened-guy-red-sweater-opened-mouth-287432688.jpg",
//     title: "Product 1",
//     description: "This is a description of product 1.",
//   },
//   {
//     _id: "200000",
//     img: "https://thumbs.dreamstime.com/b/funny-shocked-man-covering-mouth-hand-laughs-making-big-eyes-oops-absurd-accident-frightened-guy-red-sweater-opened-mouth-287432688.jpg",
//     title: "Product 2",
//     description: "This is a description of product 2.",
//   },
//   {
//     _id: "300000",
//     img: "https://thumbs.dreamstime.com/b/funny-shocked-man-covering-mouth-hand-laughs-making-big-eyes-oops-absurd-accident-frightened-guy-red-sweater-opened-mouth-287432688.jpg",
//     title: "Product 3",
//     description: "This is a description of product 3.",
//   },
//   {
//     _id: "400000",
//     img: "https://thumbs.dreamstime.com/b/funny-shocked-man-covering-mouth-hand-laughs-making-big-eyes-oops-absurd-accident-frightened-guy-red-sweater-opened-mouth-287432688.jpg",
//     title: "Product 4",
//     description: "This is a description of product 4.",
//   },
//   {
//     _id: "500000",
//     img: "https://thumbs.dreamstime.com/b/funny-shocked-man-covering-mouth-hand-laughs-making-big-eyes-oops-absurd-accident-frightened-guy-red-sweater-opened-mouth-287432688.jpg",
//     title: "Product 5",
//     description: "This is a description of product 5.",
//   },
// ];

export default EntryView;
