// import { RxDashboard } from "react-icons/rx";
// import { MdAddTask } from "react-icons/md";
// import { GoTasklist } from "react-icons/go";
// import { PiNoteDuotone } from "react-icons/pi";
// import { TbListDetails } from "react-icons/tb";
// import { ScrollShadow, Tooltip } from "@nextui-org/react";
// import Link from "next/link";
// import React from "react";
// import { usePathname } from "next/navigation";

// const DashMobileNav = () => {
//   const currentPathname = usePathname();

//   return (
//     <div className="sm:hidden fixed z-[9999] bottom-0">
//       <ScrollShadow
//         hideScrollBar
//         orientation="horizontal"
//         className="flex items-center justify-start gap-6 p-4 w-screen backdrop-blur-[80px] bg-whiteColor  shadow-2xl relative"
//       >
//         {dashboardLinks.map(link => (
//           <Link
//             className={`${
//               currentPathname === link.path
//                 ? mobileActiveLinkStyle
//                 : mobileNormalLinkStyle
//             }`}
//             href={`${link.path}`}
//             key={link.heading}
//           >
//             <Tooltip
//               showArrow
//               placement="top"
//               color="success"
//               content={link.heading}
//               className="capitalize text-white font-semibold"
//             >
//               <div>
//                 {
//                   <link.icon
//                     className={`${
//                       currentPathname === link.path
//                         ? "text-3xl duration-200 "
//                         : "text-3xl duration-200 "
//                     }`}
//                   />
//                 }
//               </div>
//             </Tooltip>
//           </Link>
//         ))}
//       </ScrollShadow>
//     </div>
//   );
// };

// const dashboardLinks = [
//   {
//     heading: "Dashboard",
//     path: "/dashboard",
//     icon: RxDashboard,
//   },
//   {
//     heading: "Profile",
//     path: "/dashboard/profile",
//     icon: GoTasklist,
//   },
//   {
//     heading: "Applied Jobs",
//     path: "/dashboard/appliedJob",
//     icon: MdAddTask,
//   },

//   {
//     heading: "Saved Jobs",
//     path: "/dashboard/bookmark",
//     icon: PiNoteDuotone,
//   },
//   {
//     heading: "Dashboard2",
//     path: "/dashboard2",
//     icon: RxDashboard,
//   },
//   {
//     heading: "Profile2",
//     path: "/dashboard/profile2",
//     icon: GoTasklist,
//   },
//   {
//     heading: "Applied Jobs2",
//     path: "/dashboard/appliedJob2",
//     icon: MdAddTask,
//   },

//   {
//     heading: "Saved Jobs2",
//     path: "/dashboard/bookmark2",
//     icon: PiNoteDuotone,
//   },
//   {
//     heading: "Dashboard3",
//     path: "/dashboard3",
//     icon: RxDashboard,
//   },
//   {
//     heading: "Profile3",
//     path: "/dashboard/profile3",
//     icon: GoTasklist,
//   },
//   {
//     heading: "Applied Jobs3",
//     path: "/dashboard/appliedJob3",
//     icon: MdAddTask,
//   },

//   {
//     heading: "Saved Jobs3",
//     path: "/dashboard/bookmark3",
//     icon: PiNoteDuotone,
//   },
//   {
//     heading: "Dashboard4",
//     path: "/dashboard4",
//     icon: RxDashboard,
//   },
//   {
//     heading: "Profile4",
//     path: "/dashboard/profile4",
//     icon: GoTasklist,
//   },
//   {
//     heading: "Applied Jobs4",
//     path: "/dashboard/appliedJob4",
//     icon: MdAddTask,
//   },

//   {
//     heading: "Saved Jobs4",
//     path: "/dashboard/bookmark4",
//     icon: PiNoteDuotone,
//   },
// ];

// const mobileNormalLinkStyle =
//   "p-4 px-8 flex items-center justify-center mb-2  rounded-full duration-300 bg-secondaryColor text-secondaryColor font-semibold bg-opacity-5 hover:bg-opacity-15 before:absolute before:content-[''] before:bg-secondaryColor  before:rounded-t-2xl before:duration-300 before:bottom-0 before:w-0 hover:before:w-7 before:h-0 hover:before:h-2 overflow-x-hidden";
// const mobileActiveLinkStyle =
//   "p-4 px-8 flex items-center justify-center mb-2  rounded-full duration-300 bg-primaryColor text-primaryColor font-semibold bg-opacity-10 before:absolute before:content-[''] before:bg-primaryColor before:h-[8px] before:rounded-t-2xl before:duration-300 before:bottom-0 before:w-14 overflow-x-hidden";

// export default DashMobileNav;
