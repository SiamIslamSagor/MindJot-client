import { Sling as Hamburger } from "hamburger-react";
import { useCallback, useEffect, useState } from "react";
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
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

const Navbar = () => {
  // state
  const [isOpen, setOpen] = useState(false);
  const [avatarSize, setAvatarSize] = useState("sm");

  // hook
  const { user, logout } = useDataContext();

  // handler
  const handleSignOut = () => {
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

  const handleResize = useCallback(() => {
    const width = window.innerWidth;

    if (width >= 1280) {
      setAvatarSize("lg");
    } else setAvatarSize("sm");
  }, []);

  // side effect
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

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
            <div className=" max-2xl:mx-4">
              <Dropdown>
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="primary"
                    size={avatarSize}
                    src={user && user?.photoURL}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key={user?.displayName}>
                    {user?.displayName}
                  </DropdownItem>
                  <DropdownItem key={user?.email}>{user?.email}</DropdownItem>
                  <DropdownItem
                    key="sign out"
                    className="text-danger"
                    color="danger"
                  >
                    Sign Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            {/*  */}

            {/* authentication action */}
            <Bounce delay={2200} className="">
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn max-xl:btn-sm xl:text-base opacity-80 duration-300 bg-light-blue text-white hover:bg-light-blue hover:opacity-100 sm:mr-4 max-2xsm:hidden"
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
        className={`lg:hidden py-20 absolute w-full max-lg:flex flex-col items-center justify-center duration-500 ease-out backdrop-blur-[300px] border-b-2 z-[80] ${
          isOpen ? "top-[58px]" : "-top-[100vh]"
        } `}
      >
        {navLinks.map((link, index) => (
          <Fade
            direction="up"
            duration={index * 500}
            className="w-full text-3xl text-center my-5"
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
