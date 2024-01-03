import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import { navLinks } from "../links/dummyLinks";
import { Link } from "react-router-dom";

const Navbar = () => {
  // state
  const [isOpen, setOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="fixed w-full">
      <div className="w-full fixed shadow-xl bg-white z-[100]">
        <div className="flex items-center justify-between py-5 w-full px-2 max-xsm:px-2 xsm:px-5 sm:px-10 md:px-20 xl:px-24 2xl:px-28">
          {/* logo */}
          <div className="max-xsm:text-4xl xsm:text-5xl font-[1000] text-center">
            <Fade className="inline-block text-center" cascade damping={0.1}>
              <span>M</span>
              <span className="text-light-blue">i</span> <span>n</span>
              <span>d</span>
              <span>J</span>
              <span className="text-deep-rose">o</span> <span>t</span>
            </Fade>
          </div>

          {/* lg Device links */}
          <div className="flex items-center gap-0  xl:gap-2 2xl:gap-5">
            {/* lg routes with fade animation */}
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

            {/* user dropdown */}
            <div className="relative">
              <div
                className="overflow-hidden rounded-full flex items-center justify-center mr-2 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <Slide delay={1500} direction="down" className="avatar">
                  <div
                    tabIndex={0}
                    role="button"
                    className="w-10 h-10 lg:w-14 lg:h-14 rounded-full"
                  >
                    <img
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      alt="Avatar"
                    />
                  </div>
                </Slide>
              </div>

              {isDropdownOpen && (
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className=" absolute top-0 -right-10 mt-12 w-64 bg-white border rounded shadow-md"
                >
                  <p>Dropdown Content</p>
                </div>
              )}
            </div>

            {/* authentication action */}
            <Bounce delay={2200} className="">
              <Link
                to={"/auth/signIn"}
                className="btn max-lg:btn-sm opacity-80 duration-300 bg-light-blue text-white hover:bg-light-blue hover:opacity-100 sm:mr-4"
              >
                Sign In
              </Link>
            </Bounce>

            {/* hamburger , thats hidden when screen is lg  */}
            <div className="overflow-hidden rounded-md">
              <Slide direction="up" className="lg:hidden">
                <Hamburger size={28} toggled={isOpen} toggle={setOpen} />
              </Slide>
            </div>
          </div>
        </div>
      </div>
      {/* max-lg routes */}
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
              className="inline font-extrabold opacity-70 hover:opacity-100 duration-500  cursor-pointer "
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
