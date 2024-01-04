import { Helmet } from "react-helmet-async";
import Title from "../components/Title";
import Logo from "../components/Logo";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaBox } from "react-icons/fa6";
import { dashboardLinks } from "../links/dummyLinks";

const Dashboard = () => {
  const activeLinkStyle =
    "w-full block bg-light-blue rounded-2xl text-white font-bold my-5";
  const normalLinkStyle =
    "w-full block rounded-2xl text-gray-black duration-50 hover:bg-base-200 font-bold my-5";
  return (
    <div className="">
      <Helmet>
        <title>MindJot | Dashboard</title>
      </Helmet>
      <div className="flex gap-10 min-h-screen">
        {/* sidebar */}
        <div className="max-w-sm w-full bg-white">
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
                <div className="flex items-center gap-5 text-2xl  p-4">
                  {<link.icon className="text-3xl" />}
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

export default Dashboard;
