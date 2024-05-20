// import { Button } from "@nextui-org/react";
import { Helmet } from "react-helmet-async";
import { cn } from "../utils/cn";
import { useState } from "react";
import ButtonWithAnimatedSpan from "../components/PrimaryBtn";
import AnimatedButton from "../components/ButtonBox";
import ButtonBird from "../components/ButtonBird";
import CircleButton from "../components/ButtonChat";
import ButtonBird2 from "../components/ButtonBird2";
import ButtonMine from "../components/ButtonMine";
import ButtonYt from "./ButtonYt";
import LinkItem from "../components/ui/LinkItem";
import { GoogleGeminiEffectDemo } from "../components/ui/GoogleGeminiEffectDemo";
import img1 from "../assets/images/s1.png";
import img2 from "../assets/images/s2.png";
import GlobeDemo from "../components/aceternityUi/GlobeDemo";
import { Button } from "@nextui-org/react";
const Home = () => {
  // const [buttonHoverPosition, setButtonHoverPosition] = useState("");
  // const handleMouseEnter = e => {
  //   console.log(e);
  //   let x = e.pageX - $(this).offset().left;
  //   let y = e.pageY - $(this).offset().top;
  //   setButtonHoverPosition(`top-${y} left-${x}`);
  // };

  // $(document).ready(function(e){
  //   x = e.pageX - $(this).offset().left;
  //   y = e.pageY - $(this).offset().top;
  //   $(this).find('span').css({top:y, left:x})
  // })
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="flex flex-col item-center justify-center ">
      <Helmet>
        <title>MindJot | Home</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center my-20">
        {/* <div className="space-x-5">
          <button
            onMouseEnter={e => handleMouseEnter(e)}
            className="custom-btn"
          >
            <span
              className={cn(
                "size-5 absolute block translate-x-0 rounded-full bg-green-500 top-0 left-5"
              )}
            ></span>
            <span
              className={cn("top-8 left-5 absolute", buttonHoverPosition)}
            ></span>
            Click
          </button>
          <button
            onMouseEnter={e => handleMouseEnter(e)}
            className="custom-btn"
          >
            <span
              className={cn(
                "size-5 absolute block translate-x-0 rounded-full bg-green-500 top-0 left-5"
              )}
            ></span>
            <span
              className={cn("top-8 left-5 absolute", buttonHoverPosition)}
            ></span>
            Click
          </button>
          <button
            onMouseEnter={e => handleMouseEnter(e)}
            className="custom-btn"
          >
            <span
              className={cn(
                "size-5 absolute block translate-x-0 rounded-full bg-green-500 top-0 left-5"
              )}
            ></span>
            <span
              className={cn("top-8 left-5 absolute", buttonHoverPosition)}
            ></span>
            Click
          </button>
        </div> */}
        {/* <ButtonWithAnimatedSpan /> */}

        {/* <AnimatedButton onClick={handleClick}>Click me</AnimatedButton> */}
        {/* <ButtonBird /> */}
        {/* <ButtonBird2 /> */}
        {/* <ButtonMine /> */}
        {/* <CircleButton /> */}
        {/* <div className="border-4 border-blue-600 max-w-2xl min-w-96 bg-[#ff4439] my-10 mx-auto">
          <LinkItem />
        </div> */}
        {/* <GoogleGeminiEffectDemo /> */}
        {/* this is new commit content */}

        {/* <div className="flex my-20 gap-10">
          <img
            className="border bg-red-500 size-60 text-white"
            src={img1}
            alt=""
          />
          <img
            className="border bg-red-500 size-60 text-white"
            src={img2}
            alt=""
          />
        </div> */}

        <div id="btn-div" className="space-y-5 p-10 bg-[#ff4439]">
          <ButtonYt />
          <ButtonYt />
          <ButtonYt />
          <ButtonYt />
        </div>

        <div
          id="btn-div"
          className=" p-10 bg-primary-deep-black mt-20 space-y-20 btn-container relative"
        >
          {/* tailwind btn try: failed. */}
          {/* <Button
            radius="none"
            className=" hover:!opacity-100 secondary-btn pt-[18px] gap-0 z-0 group relative inline-flex items-center justify-center box-border appearance-auto select-none whitespace-nowrap subpixel-antialiased tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-0 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-0  min-w-unit-0 rounded-none [&>svg]:max-w-[theme(spacing.unit-0)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover px-10 h-[55px] text-center leading-[55px] m-2.5 uppercase bg-[#191919] text-white text-lg font-medium tracking-[2px] overflow-hidden"
          >
            <span className="relative block size-full z-[100000] [transition:0s_ease-in] group-hover:translate-y-[100%] group-hover:[transition:4s_ease-in] ">
              Button
            </span>
            <span className="relative block size-full z-[100000] [transition:0s_ease-in] group-hover:translate-y-[100%] group-hover:[transition:4s_ease-in] ">
              Button
            </span>
          </Button> */}

          <Button
            radius="none"
            className="hover:!opacity-100 secondary-btn pt-[18px] gap-0"
          >
            <span>Button</span>
            <span>Button</span>
          </Button>
        </div>
      </div>

      {/* <div className="min-h-96 rounded-3xl w-full grow ">
        <GlobeDemo />
      </div> */}
      <div className=" h-[300vh] bg-light-blue"></div>
    </div>
  );
};

export default Home;
