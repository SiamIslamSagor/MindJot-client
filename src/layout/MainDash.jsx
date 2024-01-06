import { NavLink, Outlet } from "react-router-dom";
import {
  dashboardLinks,
  activeLinkStyle,
  normalLinkStyle,
  tabletAndMobileActiveLinkStyle,
  tabletAndMobileNormalLinkStyle,
} from "../links/dummyLinks";
import Logo from "../components/Logo";
import { Helmet } from "react-helmet-async";
import { Tooltip } from "@nextui-org/react";
import { Fade } from "react-awesome-reveal";
import NextNav from "../components/NextNav";

const MainDash = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Helmet>
        <title>MindJot | Dashboard</title>
      </Helmet>

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
                  <Fade direction="left" delay={index * 100}>
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
          <div className="flex items-center justify-center gap-1 xsm:gap-5 sm:gap-8 border-4 p-5 rounded-full backdrop-blur-[300px]">
            {dashboardLinks.map(link => (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? tabletAndMobileActiveLinkStyle
                    : tabletAndMobileNormalLinkStyle
                }
                to={`/mainDash${link.path}`}
                key={link.heading}
              >
                <Tooltip
                  color="primary"
                  content={link.heading}
                  className="capitalize"
                >
                  <div>{<link.icon className="text-2xl sm:text-3xl" />}</div>
                </Tooltip>
              </NavLink>
            ))}
          </div>
        </div>
        {/* outlet */}
        <div className="w-full bg-white">
          <NextNav />
          <Outlet />
          <div className="lg:hidden h-24 sm:h-36 relative"></div>
        </div>
      </div>
    </div>
  );
};

export default MainDash;
