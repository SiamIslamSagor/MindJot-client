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
        <div className="max-w-2xl min-w-96 bg-[#ff4439] my-10 mx-auto">
          <LinkItem />
        </div>
        <GoogleGeminiEffectDemo />
        <div className="space-y-5 p-10 bg-[#ff4439]">
          <ButtonYt />
          <ButtonYt />
          <ButtonYt />
          <ButtonYt />
        </div>
      </div>
      <div className=" h-[300vh] bg-light-blue"></div>
    </div>
  );
};

export default Home;
