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
    path: "/mainDash",
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
    heading: "Add Todo",
    path: "/addTodo",
    icon: MdAddTask,
  },
  {
    heading: "Manage Task",
    path: "/manageTask",
    icon: GoTasklist,
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
