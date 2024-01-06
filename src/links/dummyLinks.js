import { RxDashboard } from "react-icons/rx";
import { MdAddTask } from "react-icons/md";
import { GoTasklist } from "react-icons/go";
import { PiNoteDuotone } from "react-icons/pi";
import { TbListDetails } from "react-icons/tb";

export const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Thoughts",
    path: "/thoughts",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Dashboard",
    path: "/mainDash/dashboard",
  },
];

export const dashboardLinks = [
  // user info
  {
    heading: "Dashboard",
    path: "/dashboard",
    icon: RxDashboard,
  },
  // task
  {
    heading: "Manage Task",
    path: "/manageTask",
    icon: GoTasklist,
  },
  {
    heading: "Sticky Wall",
    path: "/stickyWall",
    icon: MdAddTask,
  },

  // thought
  {
    heading: "Write Thought",
    path: "/writeThought",
    icon: PiNoteDuotone,
  },
  {
    heading: "All Thoughts",
    path: "/allThoughts",
    icon: TbListDetails,
  },
  // blog
  {
    heading: "Create Blog",
    path: "/createBlog",
    icon: RxDashboard,
  },
  {
    heading: "All Blogs",
    path: "/allBlogs",
    icon: RxDashboard,
  },
];

export const activeLinkStyle =
  "w-full block bg-light-blue rounded-2xl text-white font-bold my-2";
export const normalLinkStyle =
  "w-full block rounded-2xl text-gray-black duration-40 hover:bg-base-200 font-bold my-2";

export const tabletAndMobileActiveLinkStyle =
  "scale-100 duration-300 opacity-100 p-2 sm:p-3 rounded-full bg-gray-100  bg-gray-200 shadow-2xl border border-gray-300";
export const tabletAndMobileNormalLinkStyle =
  "scale-75 duration-300 opacity-50 p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-gray-200";
