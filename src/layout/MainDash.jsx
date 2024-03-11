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
import { Toaster } from "react-hot-toast";

const MainDash = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Helmet>
        <title>MindJot | Dashboard</title>
      </Helmet>
      <Outlet />
    </div>
  );
};

export default MainDash;
