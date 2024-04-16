import { AttentionSeeker, Bounce, Fade } from "react-awesome-reveal";
import { BackgroundBeams } from "./background-beams";
import { PiMouseSimpleThin } from "react-icons/pi";
import { BsMouse } from "react-icons/bs";

// import "../../../src/App.css";

const EntryView = () => {
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
        <div className="absolute bottom-10 opacity-50 cursor-pointer max-xsm:scale-75">
          <div className="flex items-center justify-center">
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
      </div>
      <div
        id="nav"
        className="bg-[#ff4439] min-h-20 stickynav sticky  top-0 z-[9999]"
      ></div>
      <div className=" ">
        {/* <div className="h-[500vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-2xl mx-auto p-4">
            <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
              Join the waitlist
            </h1>
            <p></p>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              Welcome to MailJet, the best transactional email service on the
              web. We provide reliable, scalable, and customizable email
              solutions for your business. Whether you&apos;re sending order
              confirmations, password reset emails, or promotional campaigns,
              MailJet has got you covered.
            </p>
            <input
              type="text"
              placeholder="hi@manuarora.in"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
            />
          </div>
          <BackgroundBeams />
        </div> */}
      </div>
    </div>
  );
};

export default EntryView;
