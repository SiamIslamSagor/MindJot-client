// "use client";

// import { ScrollShadow, Tooltip } from "@nextui-org/react";
// import Link from "next/link";
// import React from "react";

// import { RxDashboard } from "react-icons/rx";
// import { MdAddTask } from "react-icons/md";
// import { GoTasklist } from "react-icons/go";
// import { PiNoteDuotone } from "react-icons/pi";
// import { usePathname } from "next/navigation";
// import { Fade } from "react-awesome-reveal";

// const DashDeskSidebar = () => {
//   const currentPathname = usePathname();

//   return (
//     <ScrollShadow hideScrollBar className="h-[60vh]">
//       {dashboardLinks.map((link, index) => (
//         <Fade delay={index * 50} key={link.heading}>
//           <Link href={`${link.path}`}>
//             <div className="overflow-hidden">
//               <div
//                 className={
//                   currentPathname === link.path
//                     ? activeLinkStyle
//                     : normalLinkStyle
//                 }
//               >
//                 {
//                   <link.icon className=" max-sm:text-lg sm:text-3xl max-lg:hidden ml-4 mr-0" />
//                 }
//                 <Tooltip
//                   className="font-medium text-whiteColor capitalize lg:hidden"
//                   showArrow
//                   color="success"
//                   placement="right"
//                   content={link.heading}
//                 >
//                   <div>
//                     {<link.icon className="text-2xl sm:text-3xl lg:hidden" />}
//                   </div>
//                 </Tooltip>
//                 {link.heading}
//               </div>
//             </div>
//           </Link>
//         </Fade>
//       ))}
//     </ScrollShadow>
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

// const activeLinkStyle =
//   "flex items-center gap-3 max-sm:text-base max-md:text-lg md:text-xl p-5 lg:p-3 px-6 lg:px-7 my-2 bg-primaryColor text-primaryColor font-semibold bg-opacity-10 rounded-r-full active_btn relative before:absolute before:content-[''] before:bg-primaryColor before:h-[50px] duration-300 before:rounded-r-2xl before:duration-300 before:w-2 before:left-0 overflow-x-hidden w-64";
// const normalLinkStyle =
//   "flex items-center gap-3 max-sm:text-base max-md:text-lg md:text-xl p-5 lg:p-3 my-2 hover:bg-secondaryColor duration-300 text-secondaryColor font-semibold hover:bg-opacity-10 rounded-r-full active_btn relative before:absolute before:content-[''] before:bg-secondaryColor before:h-0 before:w-0 hover:before:h-[20px] hover:before:w-1.5 before:rounded-r-2xl before:duration-300 before:left-0 overflow-x-hidden w-64";

// export default DashDeskSidebar;
