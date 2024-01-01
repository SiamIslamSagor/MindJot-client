import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import {
  Bounce,
  Fade,
  Flip,
  Hinge,
  JackInTheBox,
  Roll,
  Rotate,
  Slide,
  Zoom,
} from "react-awesome-reveal";

const Home = () => {
  return (
    <div className="flex flex-col item-center justify-center ">
      <Helmet>
        <title>MindJot | Home</title>
      </Helmet>
      <Navbar />{" "}
      {/*  <div className="my-20">
        <div className="text-5xl font-[1000] my-10">
          <Bounce className="inline-block" cascade damping={0.5}>
            <span>M</span>
            <span className="text-light-blue">i</span> <span>n</span>
            <span>d</span>
            <span>J</span>
            <span className="text-deep-rose">o</span> <span>t</span>
          </Bounce>
        </div>
        <div className="text-5xl font-[1000] my-10">
          <Fade className="inline-block" cascade damping={0.5}>
            <span>M</span>
            <span className="text-light-blue">i</span> <span>n</span>
            <span>d</span>
            <span>J</span>
            <span className="text-deep-rose">o</span> <span>t</span>
          </Fade>
        </div>
        <div className="text-5xl font-[1000] my-10">
          <Flip className="inline-block" cascade damping={0.5}>
            <span>M</span>
            <span className="text-light-blue">i</span> <span>n</span>
            <span>d</span>
            <span>J</span>
            <span className="text-deep-rose">o</span> <span>t</span>
          </Flip>
        </div>
        <div className="text-5xl font-[1000] my-10">
          <Hinge className="inline-block" cascade damping={0.5}>
            <span>M</span>
            <span className="text-light-blue">i</span> <span>n</span>
            <span>d</span>
            <span>J</span>
            <span className="text-deep-rose">o</span> <span>t</span>
          </Hinge>
        </div>
        <div className="text-5xl font-[1000] my-10">
          <JackInTheBox className="inline-block" cascade damping={0.5}>
            <span>M</span>
            <span className="text-light-blue">i</span> <span>n</span>
            <span>d</span>
            <span>J</span>
            <span className="text-deep-rose">o</span> <span>t</span>
          </JackInTheBox>
        </div>
        <div className="text-5xl font-[1000] my-10">
          <Roll className="inline-block" cascade damping={0.5}>
            <span>M</span>
            <span className="text-light-blue">i</span> <span>n</span>
            <span>d</span>
            <span>J</span>
            <span className="text-deep-rose">o</span> <span>t</span>
          </Roll>
        </div>
        <div className="text-5xl font-[1000] my-10">
          <Rotate className="inline-block" cascade damping={0.5}>
            <span>M</span>
            <span className="text-light-blue">i</span> <span>n</span>
            <span>d</span>
            <span>J</span>
            <span className="text-deep-rose">o</span> <span>t</span>
          </Rotate>
        </div>
        <div className="text-5xl font-[1000] my-10">
          <Slide className="inline-block" cascade damping={0.5}>
            <span>M</span>
            <span className="text-light-blue">i</span> <span>n</span>
            <span>d</span>
            <span>J</span>
            <span className="text-deep-rose">o</span> <span>t</span>
          </Slide>
        </div>
        <div className="text-5xl font-[1000] my-10">
          <Zoom className="inline-block" cascade damping={0.5}>
            <span>M</span>
            <span className="text-light-blue">i</span> <span>n</span>
            <span>d</span>
            <span>J</span>
            <span className="text-deep-rose">o</span> <span>t</span>
          </Zoom>
        </div>
        <div className="text-5xl font-[1000]">
          M<span className="text-light-blue">i</span>ndJ
          <span className="text-deep-rose">o</span>t
        </div>
      </div> */}
    </div>
  );
};

export default Home;
