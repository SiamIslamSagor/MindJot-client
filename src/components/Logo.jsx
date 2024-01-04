import { Fade } from "react-awesome-reveal";

const Logo = () => {
  return (
    <div>
      <div className="max-xsm:text-4xl xsm:text-5xl font-[1000]">
        <Fade className="inline-block text-center" cascade damping={0.1}>
          <span>M</span>
          <span className="text-light-blue">i</span> <span>n</span>
          <span>d</span>
          <span>J</span>
          <span className="text-deep-rose">o</span> <span>t</span>
        </Fade>
      </div>
    </div>
  );
};

export default Logo;
