import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import { navLinks } from "../links/dummyLinks";
import { Link, NavLink } from "react-router-dom";
import useDataContext from "../hooks/useDataContext";
import {
  FaArrowRightFromBracket,
  FaArrowRightToBracket,
} from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import Logo from "./Logo";

const Navbar = () => {
  // state
  const [isOpen, setOpen] = useState(false);

  // hook
  const { user, logout } = useDataContext();

  // handler
  const handleSignUp = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be log out this account form this device!",
      icon: "warning",
      iconColor: "#ffb8b8",
      showCancelButton: true,
      confirmButtonColor: "#6c63ff",
      cancelButtonColor: "#fd5467",
      confirmButtonText: "Yes, Sign up.",
    }).then(result => {
      if (result.isConfirmed) {
        const toastId = toast.loading("processing...");
        console.log("clicked");
        logout()
          .then(() => {
            toast.success("Sign out successfully.", { id: toastId });
          })
          .catch(() => {
            toast.error("Sign out Failed.", { id: toastId });
          });
      }
    });
  };

  return (
    <div className="fixed w-full z-[100]">
      <Toaster></Toaster>
      <div className="w-full z-[100] fixed shadow-xl bg-white ">
        <div className="flex items-center justify-between py-5 w-full px-2 max-xsm:px-2 xsm:px-5 sm:px-10 md:px-20 xl:px-24 2xl:px-28">
          {/* logo */}
          <Logo />

          {/* lg Device links */}
          <div className="flex items-center gap-0  xl:gap-2 2xl:gap-5">
            {/* lg routes with fade animation */}
            <Fade cascade delay={800} damping={0.3} className="max-lg:hidden">
              {navLinks.map(link => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="text-2xl px-2 xl:px-5 cursor-pointer font-extrabold duration-500 opacity-70 hover:opacity-100"
                >
                  {link.name}
                </NavLink>
              ))}
            </Fade>

            {/* dropdown for max-xl */}
            {user && (
              <div className="dropdown z-50 dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="max-xl:btn max-xl:btn-ghost max-xl:btn-circle avatar"
                >
                  <div className="overflow-hidden flex items-center justify-center rounded-full ">
                    <Slide
                      delay={700}
                      direction="down"
                      className="w-10 h-10 xl:w-16 xl:h-16 rounded-full "
                    >
                      <img
                        className="w-10 h-10 xl:w-16 xl:h-16 rounded-full"
                        alt="author image"
                        src={user?.photoURL}
                      />
                    </Slide>
                  </div>
                </div>
                <ul className="max-sm:-mr-28 mt-3 z-[1] p-2 py-10 md:p-6 border shadow menu menu-sm dropdown-content bg-base-100 rounded-box max-lg:w-80 lg:w-96 text-center font-medium text-s-color">
                  <li className="justify-center mt-2 p-2 text-center w-full max-w-full leading-3 lg:text-base">
                    Name: {user?.displayName}
                  </li>
                  <li className="justify-center -mt-2 leading-3 p-2 text-center tracking-tight  lg:text-base">
                    Email: {user?.email}
                  </li>
                  <button
                    onClick={handleSignUp}
                    className="btn max-lg:btn-sm lg:text-base opacity-90  bg-deep-rose text-white hover:bg-deep-rose hover:opacity-100 shadow-2xl  hover:drop-shadow-lg duration-1000 sm:mr-4 my-2 mt-5"
                  >
                    Edit Profile{" "}
                    <FaArrowRightFromBracket className="lg:text-lg" />
                  </button>
                  <button
                    onClick={handleSignUp}
                    className="btn max-lg:btn-sm lg:text-base opacity-90  bg-light-blue text-white hover:bg-light-blue hover:opacity-100 shadow-2xl  hover:drop-shadow-lg duration-1000 sm:mr-4 my-2"
                  >
                    Sign out <FaArrowRightFromBracket className="lg:text-lg" />
                  </button>
                </ul>
              </div>
            )}

            {/* authentication action */}
            <Bounce delay={2200} className="">
              {user ? (
                <button
                  onClick={handleSignUp}
                  className="btn max-xl:btn-sm xl:text-base opacity-80 duration-300 bg-light-blue text-white hover:bg-light-blue hover:opacity-100 sm:mr-4"
                >
                  Sign out <FaArrowRightFromBracket className="lg:text-lg" />
                </button>
              ) : (
                <Link
                  to={"/auth/signIn"}
                  className="btn max-lg:btn-sm lg:text-base opacity-80 duration-300 bg-light-blue text-white hover:bg-light-blue hover:opacity-100 sm:mr-4"
                >
                  Sign In <FaArrowRightToBracket className="lg:text-lg" />
                </Link>
              )}
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
        className={`lg:hidden py-20 absolute w-full max-lg:flex flex-col items-center justify-center duration-500 ease-out bgdeep-green backdrop-blur-[300px] border-b-2 z-[80] ${
          isOpen ? "top-[58px]" : "-top-[100vh]"
        } `}
      >
        {navLinks.map((link, index) => (
          <Fade
            direction="up"
            duration={index * 500}
            className="bgdeep-green w-full text-3xl text-center my-5"
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
