import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { PiNotePencil } from "react-icons/pi";
import { FaPenAlt } from "react-icons/fa";

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
    path: "/dashboard",
  },
];

export const dashboardLinks = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Profile",
        icon: FaRegCircleUser,
      },
      {
        name: "Create Task",
        icon: IoMdAddCircleOutline,
      },
      {
        name: "Manage Task",
        icon: PiNotePencil,
      },
    ],
  },
  {
    title: "Thoughts",
    links: [
      {
        name: "Write Thought",
        icon: FaPenAlt,
      },
      {
        name: "All Thought",
        icon: IoMdAddCircleOutline,
      },
    ],
  },
];
