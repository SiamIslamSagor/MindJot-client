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

export const stickyColors = ["green", "blue", "black", "pink", "light pink"];

export const taskData = [
  {
    _id: "abc12345",
    heading: "Complete Project Proposal",
    description:
      "Draft and finalize the project proposal for client presentation.",
    status: "todo",
  },
  {
    _id: "def67890",
    heading: "Develop Homepage",
    description:
      "Code the homepage layout and design according to client's specifications.",
    status: "ongoing",
  },
  {
    _id: "ghi54321",
    heading: "Review Codebase",
    description:
      "Conduct a thorough code review to identify and fix any bugs or issues.",
    status: "todo",
  },
  {
    _id: "jkl98765",
    heading: "Client Meeting",
    description:
      "Schedule and conduct a meeting with the client to discuss project progress.",
    status: "completed",
  },
  {
    _id: "mno24680",
    heading: "Testing Phase",
    description:
      "Execute comprehensive testing to ensure the functionality and stability of the application.",
    status: "ongoing",
  },
  {
    _id: "pqr13579",
    heading: "Update Documentation",
    description:
      "Revise and update project documentation to reflect recent changes and improvements.",
    status: "todo",
  },
  {
    _id: "stu24680",
    heading: "Deploy to Production",
    description:
      "Prepare the application for production deployment and ensure a smooth rollout.",
    status: "ongoing",
  },
  {
    _id: "vwx98765",
    heading: "User Training",
    description:
      "Conduct training sessions for end-users to familiarize them with the new features.",
    status: "todo",
  },
  {
    _id: "yzab1234",
    heading: "Bug Fixes",
    description:
      "Address and fix any reported bugs or issues in the application.",
    status: "completed",
  },
  {
    _id: "cdef5678",
    heading: "Optimize Performance",
    description:
      "Identify and implement optimizations to enhance the overall performance of the application.",
    status: "ongoing",
  },
  {
    _id: "ghij9012",
    heading: "Marketing Campaign",
    description:
      "Plan and launch a marketing campaign to promote the newly released features.",
    status: "todo",
  },
  {
    _id: "klmn3456",
    heading: "Data Backup",
    description:
      "Ensure regular and secure backups of the application data to prevent data loss.",
    status: "ongoing",
  },
  {
    _id: "opqr7890",
    heading: "Customer Support",
    description:
      "Provide ongoing customer support and address user inquiries and issues.",
    status: "completed",
  },
  {
    _id: "stuv2345",
    heading: "UI/UX Refinement",
    description:
      "Refine the user interface and user experience based on user feedback and usability testing.",
    status: "todo",
  },
  {
    _id: "wxyz6789",
    heading: "Feature Development",
    description:
      "Plan and implement additional features based on user requirements and market trends.",
    status: "ongoing",
  },
  {
    _id: "1234abcd",
    heading: "Security Audit",
    description:
      "Conduct a thorough security audit to identify and address potential vulnerabilities.",
    status: "todo",
  },
  {
    _id: "5678efgh",
    heading: "Collaboration with Design Team",
    description:
      "Collaborate with the design team to ensure consistency in visual elements and branding.",
    status: "completed",
  },
  {
    _id: "9012ijkl",
    heading: "Server Maintenance",
    description:
      "Perform regular maintenance tasks to optimize server performance and security.",
    status: "ongoing",
  },
  {
    _id: "3456mnop",
    heading: "Product Demo",
    description:
      "Prepare and conduct a product demo for potential clients and stakeholders.",
    status: "todo",
  },
  {
    _id: "7890qrst",
    heading: "Financial Reporting",
    description:
      "Generate and review financial reports related to project expenditures and revenue.",
    status: "completed",
  },
  {
    _id: "abcd1234",
    heading: "Team Meeting",
    description:
      "Organize a team meeting to discuss project updates and address any team-related issues.",
    status: "ongoing",
  },
  {
    _id: "efgh5678",
    heading: "Mobile App Development",
    description:
      "Start development of the mobile application version of the project.",
    status: "todo",
  },
  {
    _id: "ijkl9012",
    heading: "Legal Compliance Check",
    description:
      "Ensure the project adheres to all relevant legal and compliance requirements.",
    status: "ongoing",
  },
  {
    _id: "mnop3456",
    heading: "Social Media Marketing",
    description:
      "Create and execute a social media marketing strategy to increase project visibility.",
    status: "todo",
  },
  {
    _id: "qrst7890",
    heading: "Quality Assurance",
    description:
      "Conduct a comprehensive quality assurance process to ensure a bug-free release.",
    status: "completed",
  },
  {
    _id: "uvwx2345",
    heading: "Hiring Process",
    description:
      "Initiate the hiring process for additional team members required for project expansion.",
    status: "ongoing",
  },
];
