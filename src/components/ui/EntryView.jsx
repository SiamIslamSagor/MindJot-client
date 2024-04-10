import { AttentionSeeker, Bounce } from "react-awesome-reveal";
import { BackgroundBeams } from "./background-beams";

const EntryView = () => {
  return (
    <div className="min-h-[400vh] border border-blue-700 ">
      <div
        id="entry-view"
        className="bg-red-500 min-h-[calc(100vh-400px)] flex items-center justify-center"
      >
        <div className="text-4xl uppercase text-center font-bold text-white">
          I AM A <br /> creative
          <AttentionSeeker
            effect="rubberBand"
            delay={2500}
            className="text-black font-black"
          >
            <h1>&</h1>
          </AttentionSeeker>
          PROFICIENT <br /> MERN STACK <br /> DEVELOPER
        </div>
      </div>
      <div
        id="nav"
        className="bg-red-800 min-h-20 stickynav sticky  top-0 z-[999999999999999999999999999999999999999999]"
      ></div>
      <div className=" ">
        <div className="h-[500vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
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
        </div>
      </div>
    </div>
  );
};

export default EntryView;
