import { Link, NavLink, Outlet } from "react-router-dom";
import { dashboardLinks } from "../links/dummyLinks";
import Logo from "../components/Logo";
import { Helmet } from "react-helmet-async";
import { Tooltip } from "@nextui-org/react";
import { Bounce, Fade } from "react-awesome-reveal";
import { FaAngleLeft } from "react-icons/fa6";

const MainDash = () => {
  const activeLinkStyle =
    "w-full block bg-light-blue rounded-2xl text-white font-bold my-2";
  const normalLinkStyle =
    "w-full block rounded-2xl text-gray-black duration-50 hover:bg-base-200 font-bold my-2";
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Helmet>
        <title>MindJot | Dashboard</title>
      </Helmet>
      <div className="lg:hidden fixed z-[90] top-5 md:top-10 left-5 md:left-10  overflow-hidden">
        <Bounce>
          <Tooltip
            color={"danger"}
            placement="right"
            content={"Go to home"}
            className="capitalize"
          >
            <Link
              to={"/"}
              className="btn btn-circle text-xl bg-white  hover:bg-white font-bold border-2"
            >
              <FaAngleLeft />
            </Link>
          </Tooltip>
        </Bounce>
      </div>
      <div className="lg:flex gap-10 min-h-screen">
        {/* sidebar */}
        <div className="max-w-sm w-full bg-base-100 h-screen sticky top-0 max-lg:hidden">
          <div className="max-w-64 mx-auto">
            {/* logo */}
            <div className="my-16">
              <Logo />
            </div>
            {/* routes */}
            {dashboardLinks.map((link, index) => (
              <NavLink
                key={link.heading}
                to={`/mainDash${link.path}`}
                className={({ isActive }) =>
                  isActive ? activeLinkStyle : normalLinkStyle
                }
              >
                {" "}
                <div className="overflow-hidden">
                  <Fade
                    direction="left"
                    delay={index !== 0 ? index * 100 : -1000}
                  >
                    {" "}
                    <div className="flex items-center gap-3 md:gap-5 max-sm:text-lg max-lg:text-xl  lg:text-2xl p-4 ">
                      {<link.icon className=" max-lg:text-lg lg:text-3xl" />}
                      {link.heading}
                    </div>
                  </Fade>{" "}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
        {/* max-lg navigation bar */}
        <div className="p-1 sm:p-4 fixed bottom-0 lg:hidden w-full">
          <div className="flex items-center justify-center gap-2 xsm:gap-5 sm:gap-8 border-4 p-5 rounded-full">
            {dashboardLinks.map(link => (
              <NavLink to={`/mainDash${link.path}`} key={link.heading}>
                <Tooltip
                  color="primary"
                  content={link.heading}
                  className="capitalize"
                >
                  <div className="p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-gray-200">
                    {<link.icon className="text-2xl sm:text-3xl" />}
                  </div>
                </Tooltip>
              </NavLink>
            ))}
          </div>
        </div>
        {/* outlet */}
        <div className="w-full bg-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainDash;
