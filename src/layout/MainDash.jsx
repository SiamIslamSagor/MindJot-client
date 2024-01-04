import { NavLink, Outlet } from "react-router-dom";
import Title from "../components/Title";
import { dashboardLinks } from "../links/dummyLinks";
import Logo from "../components/Logo";
import { Helmet } from "react-helmet-async";

const MainDash = () => {
  const activeLinkStyle =
    "w-full block bg-light-blue rounded-2xl text-white font-bold my-5";
  const normalLinkStyle =
    "w-full block rounded-2xl text-gray-black duration-50 hover:bg-base-200 font-bold my-5";
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Helmet>
        <title>MindJot | Dashboard</title>
      </Helmet>
      <div className="flex gap-10 min-h-screen">
        {/* sidebar */}
        <div className="max-w-sm w-full bg-base-100 h-screen sticky top-0 max-lg:hidden">
          <div className="max-w-64 mx-auto">
            {/* logo */}
            <div className="my-16">
              <Logo />
            </div>
            {/* routes */}
            {dashboardLinks.map(link => (
              <NavLink
                to={`/mainDash${link.path}`}
                key={link.heading}
                className={({ isActive }) =>
                  isActive ? activeLinkStyle : normalLinkStyle
                }
              >
                <div className="flex items-center gap-3 md:gap-5 max-sm:text-lg max-lg:text-xl  lg:text-2xl p-3 md:p-4">
                  {<link.icon className=" max-lg:text-lg lg:text-3xl" />}
                  {link.heading}
                </div>
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
