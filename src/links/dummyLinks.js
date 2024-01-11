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

export const stickyColors = ["green", "blue", "black", "pink", "dark-black"];

export const taskData = [
  {
    index: 1,
    email: "msiamislam12345@gmail.com",
    heading: "Complete Project Proposal",
    description:
      "Draft and finalize the project proposal for client presentation.",
    status: "todo",
  },
  {
    index: 2,
    email: "msiamislam12345@gmail.com",
    heading: "Develop Homepage",
    description:
      "Code the homepage layout and design according to client's specifications.",
    status: "ongoing",
  },
  {
    index: 3,
    email: "msiamislam12345@gmail.com",
    heading: "Review Codebase",
    description:
      "Conduct a thorough code review to identify and fix any bugs or issues.",
    status: "todo",
  },
  {
    index: 4,
    email: "msiamislam12345@gmail.com",
    heading: "Client Meeting",
    description:
      "Schedule and conduct a meeting with the client to discuss project progress.",
    status: "completed",
  },
  {
    index: 5,
    email: "msiamislam12345@gmail.com",
    heading: "Testing Phase",
    description:
      "Execute comprehensive testing to ensure the functionality and stability of the application.",
    status: "ongoing",
  },
  {
    index: 6,
    email: "msiamislam12345@gmail.com",
    heading: "Update Documentation",
    description:
      "Revise and update project documentation to reflect recent changes and improvements.",
    status: "todo",
  },
  {
    index: 7,
    email: "msiamislam12345@gmail.com",
    heading: "Deploy to Production",
    description:
      "Prepare the application for production deployment and ensure a smooth rollout.",
    status: "ongoing",
  },
  {
    index: 8,
    email: "msiamislam12345@gmail.com",
    heading: "User Training",
    description:
      "Conduct training sessions for end-users to familiarize them with the new features.",
    status: "todo",
  },
  {
    index: 9,
    email: "msiamislam12345@gmail.com",
    heading: "Bug Fixes",
    description:
      "Address and fix any reported bugs or issues in the application.",
    status: "completed",
  },
  {
    index: 10,
    email: "msiamislam12345@gmail.com",
    heading: "Optimize Performance",
    description:
      "Identify and implement optimizations to enhance the overall performance of the application.",
    status: "ongoing",
  },
  {
    index: 11,
    email: "msiamislam12345@gmail.com",
    heading: "Marketing Campaign",
    description:
      "Plan and launch a marketing campaign to promote the newly released features.",
    status: "todo",
  },
  {
    index: 12,
    email: "msiamislam12345@gmail.com",
    heading: "Data Backup",
    description:
      "Ensure regular and secure backups of the application data to prevent data loss.",
    status: "ongoing",
  },
  {
    index: 13,
    email: "msiamislam12345@gmail.com",
    heading: "Customer Support",
    description:
      "Provide ongoing customer support and address user inquiries and issues.",
    status: "completed",
  },
  {
    index: 14,
    email: "msiamislam12345@gmail.com",
    heading: "UI/UX Refinement",
    description:
      "Refine the user interface and user experience based on user feedback and usability testing.",
    status: "todo",
  },
  {
    index: 15,
    email: "msiamislam12345@gmail.com",
    heading: "Feature Development",
    description:
      "Plan and implement additional features based on user requirements and market trends.",
    status: "ongoing",
  },
  {
    index: 16,
    email: "msiamislam12345@gmail.com",
    heading: "Security Audit",
    description:
      "Conduct a thorough security audit to identify and address potential vulnerabilities.",
    status: "todo",
  },
  {
    index: 17,
    email: "msiamislam12345@gmail.com",
    heading: "Collaboration with Design Team",
    description:
      "Collaborate with the design team to ensure consistency in visual elements and branding.",
    status: "completed",
  },
  {
    index: 18,
    email: "msiamislam12345@gmail.com",
    heading: "Server Maintenance",
    description:
      "Perform regular maintenance tasks to optimize server performance and security.",
    status: "ongoing",
  },
  {
    index: 19,
    email: "msiamislam12345@gmail.com",
    heading: "Product Demo",
    description:
      "Prepare and conduct a product demo for potential clients and stakeholders.",
    status: "todo",
  },
  {
    index: 20,
    email: "msiamislam12345@gmail.com",
    heading: "Financial Reporting",
    description:
      "Generate and review financial reports related to project expenditures and revenue.",
    status: "completed",
  },
  {
    index: 21,
    email: "msiamislam12345@gmail.com",
    heading: "Team Meeting",
    description:
      "Organize a team meeting to discuss project updates and address any team-related issues.",
    status: "ongoing",
  },
  {
    index: 22,
    email: "msiamislam12345@gmail.com",
    heading: "Mobile App Development",
    description:
      "Start development of the mobile application version of the project.",
    status: "todo",
  },
  {
    index: 23,
    email: "msiamislam12345@gmail.com",
    heading: "Legal Compliance Check",
    description:
      "Ensure the project adheres to all relevant legal and compliance requirements.",
    status: "ongoing",
  },
  {
    index: 24,
    email: "msiamislam12345@gmail.com",
    heading: "Social Media Marketing",
    description:
      "Create and execute a social media marketing strategy to increase project visibility.",
    status: "todo",
  },
  {
    index: 25,
    email: "msiamislam12345@gmail.com",
    heading: "Quality Assurance",
    description:
      "Conduct a comprehensive quality assurance process to ensure a bug-free release.",
    status: "completed",
  },
  {
    index: 26,
    email: "msiamislam12345@gmail.com",
    heading: "Hiring Process",
    description:
      "Initiate the hiring process for additional team members required for project expansion.",
    status: "ongoing",
  },
];

export const stickyNotesData = [
  {
    _id: "note1",
    themeColor: "green",
    heading: "Meeting Agenda",
    description:
      "Discuss project updates and assign tasks for the upcoming sprint.",
  },
  {
    _id: "note2",
    themeColor: "blue",
    heading: "Client Call",
    description:
      "Scheduled client call at 2:00 PM. Prepare project status and key points for discussion.",
  },
  {
    _id: "note3",
    themeColor: "black",
    heading: "Code Review",
    description:
      "Perform code review for recent feature implementation. Check for best practices and optimizations.",
  },
  {
    _id: "note4",
    themeColor: "pink",
    heading: "Team Building",
    description:
      "Plan team-building activities for next month to enhance collaboration and morale.",
  },
  {
    _id: "note5",
    themeColor: "pure-black",
    heading: "Birthday Celebration",
    description:
      "Buy a birthday cake for John's birthday on Friday. Decorate the breadroot with balloons.",
  },
  {
    _id: "note6",
    themeColor: "green",
    heading: "Project Deadline",
    description:
      "Project X deadline approaching. Ensure all tasks are on track and meet the timeline.",
  },
  {
    _id: "note7",
    themeColor: "blue",
    heading: "Sprint Planning",
    description:
      "Prepare for the next sprint planning meeting. Review backlog and prioritize user stories.",
  },
  {
    _id: "note8",
    themeColor: "black",
    heading: "Bug Fixing",
    description:
      "Address and fix reported bugs. Test thoroughly before deploying the bug fixes.",
  },
  {
    _id: "note9",
    themeColor: "pink",
    heading: "Team Outing",
    description:
      "Explore options for a team outing. Gather preferences and finalize the plan.",
  },
  {
    _id: "note10",
    themeColor: "pure-black",
    heading: "Training Session",
    description:
      "Schedule a training session for the new team members joining next week.",
  },
];
