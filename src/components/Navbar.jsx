import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import { navLinks } from "../links/dummyLinks";
import { Link } from "react-router-dom";

const Navbar = () => {
  // state
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="fixed w-full">
      <div className="w-full fixed shadow-xl bg-white z-[100]">
        <div className="flex justify-between py-5 w-full px-2 max-xsm:px-2 xsm:px-5 sm:px-10 md:px-20 lg:px-24 xl:px-28 2xl:px-36">
          {/* logo */}
          <div>
            <div className="text-5xl font-[1000] text-center">
              <Fade className="inline-block text-center" cascade damping={0.1}>
                <span>M</span>
                <span className="text-light-blue">i</span> <span>n</span>
                <span>d</span>
                <span>J</span>
                <span className="text-deep-rose">o</span> <span>t</span>
              </Fade>
            </div>
          </div>
          {/* lg Device links */}
          <div className="flex items-center gap-0 lg:gap-2  xl:gap-4 2xl:gap-10">
            <Fade cascade delay={800} damping={0.3} className="max-lg:hidden">
              {navLinks.map(link => (
                <span
                  key={link.name}
                  className="text-2xl px-5 cursor-pointer font-extrabold duration-500 opacity-70 hover:opacity-100"
                >
                  {link.name}
                </span>
              ))}
            </Fade>
            {/* hamburger , thats hidden when screen is lg  */}
            <Bounce delay={2000} className="">
              <Link className="btn max-lg:btn-sm opacity-80 bg-light-blue text-white hover:bg-light-blue hover:opacity-100 sm:mr-4">
                Sign In
              </Link>
            </Bounce>
            {/* hamburger , thats hidden when screen is lg  */}
            <div className="overflow-hidden rounded-md">
              <Fade direction="up" className="lg:hidden">
                <Hamburger size={32} toggled={isOpen} toggle={setOpen} />
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden py-20 absolute w-full max-lg:flex flex-col items-center justify-center duration-500 ease-out bg-deep-green z-[99] ${
          isOpen ? "top-[88px]" : "-top-[100vh]"
        } `}
      >
        {navLinks.map((link, index) => (
          <Fade
            direction="up"
            duration={index * 500}
            className="bg-deep-green w-full text-3xl text-center my-5"
            key={link.name}
          >
            <Link
              to={link.path}
              className="inline font-bold opacity-70 hover:opacity-100 duration-500  cursor-pointer"
            >
              {link.name}
            </Link>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
