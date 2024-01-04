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
    path: "/dashboard",
  },
];

export const dashboardLinks = [
  // user info
  {
    heading: "Dashboard",
    link: "/dashboard",
    icon: RxDashboard,
  },
  // task
  {
    heading: "Add Todo",
    link: "/addTodo",
    icon: MdAddTask,
  },
  {
    heading: "Manage Task",
    link: "/manageTask",
    icon: GoTasklist,
  },
  // thought
  {
    heading: "Write Thought",
    link: "/writeThought",
    icon: PiNoteDuotone,
  },
  {
    heading: "All Thoughts",
    link: "/allThoughts",
    icon: TbListDetails,
  },
  // blog
  {
    heading: "Create Blog",
    link: "/createBlog",
    icon: RxDashboard,
  },
  {
    heading: "All Blogs",
    link: "/allBlogs",
    icon: RxDashboard,
  },
];
