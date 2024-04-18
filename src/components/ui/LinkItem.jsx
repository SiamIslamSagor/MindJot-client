import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const LinkItem = () => {
  const [pathname, setPathname] = useState("/");
  console.log(pathname);
  return (
    <Fade
      cascade
      damping={0.1}
      duration={1500}
      className="text-white w-max mx-auto h-full "
    >
      {/* <Link className="py-5  relative text-xs leading-6 uppercase  after:absolute after:content-[''] after:bg-white after:rounded-xl after:h-1 after:w-full after:duration-300 after:bottom-[25%] after:left-0 after:scale-x-0 hover:after:scale-100">
        homee
      </Link> */}
      <a
        // to={"#"}
        href="#"
        onClick={() => setPathname("")}
        className={pathname === "" ? activeLinkStyle : normalLinkStyle}
      >
        home
      </a>
      <a
        // to={"#about me"}
        href="#about me"
        onClick={() => setPathname("about me")}
        className={pathname === "about me" ? activeLinkStyle : normalLinkStyle}
      >
        about me
      </a>
      <a
        // to={"#skills"}
        href="#skills"
        onClick={() => setPathname("skills")}
        className={pathname === "skills" ? activeLinkStyle : normalLinkStyle}
      >
        skills
      </a>
      <a
        // to={"#works"}
        href="#works"
        onClick={() => setPathname("works")}
        className={pathname === "works" ? activeLinkStyle : normalLinkStyle}
      >
        works
      </a>
      <a
        // to={"#education"}
        href="#education"
        onClick={() => setPathname("education")}
        className={pathname === "education" ? activeLinkStyle : normalLinkStyle}
      >
        education
      </a>
      {/* <Link className="p-4 relative text-xs leading-6 uppercase before:content-[''] before:absolute before:size-1 before:scale-0 before:rotate-45 before:-translate-x-1/2 before:bg-white before:rounded-full before:left-0 hover:before:animate-dot before:bottom-1/2 before:translate-y-1/2 before:duration-500 hover:before:scale-[3]">
        home
      </Link>
      <Link className="p-4 relative text-xs leading-6 uppercase before:content-[''] before:absolute before:size-1 before:scale-0 before:rotate-45 before:-translate-x-1/2 before:bg-white before:rounded-full before:left-0 hover:before:animate-dot before:bottom-1/2 before:translate-y-1/2 before:duration-500 hover:before:scale-[3]">
        project
      </Link>
      <Link className="p-4 relative text-xs leading-6 uppercase before:content-[''] before:absolute before:size-1 before:scale-0 before:rotate-45 before:-translate-x-1/2 before:bg-white before:rounded-full before:left-0 hover:before:animate-dot before:bottom-1/2 before:translate-y-1/2 before:duration-500 hover:before:scale-[3]">
        contact me
      </Link> */}
      {/* <Link className="p-4 border relative text-xs leading-6 uppercase before:content-[''] before:absolute before:size-1 before:rotate-45 before:-translate-x-1/2 before:bg-white before:rounded-full before:left-0 hover:before:animate-dot before:bottom-1/2 before:translate-y-1/2 before:duration-300 hover:before:scale-[4]">
        home
      </Link>
      <Link className="p-4 border relative text-xs leading-6 uppercase before:content-[''] before:absolute before:size-1 before:rotate-45 before:-translate-x-1/2 before:bg-white before:rounded-full before:left-0 hover:before:animate-dot before:bottom-1/2 before:translate-y-1/2 before:duration-300 hover:before:scale-[4]">
        project
      </Link>
      <Link className="p-4 border relative text-xs leading-6 uppercase before:content-[''] before:absolute before:size-1 before:rotate-45 before:-translate-x-1/2 before:bg-white before:rounded-full before:left-0 hover:before:animate-dot before:bottom-1/2 before:translate-y-1/2 before:duration-300 hover:before:scale-[4]">
        contact me
      </Link> */}
    </Fade>
  );
};

const activeLinkStyle =
  "border-x-[20px] border-y-[24px] border-transparent relative text-xs 2xl:text-sm font-semibold leading-6 uppercase before:content-[''] before:absolute before:size-1 before:scale-0 before:rotate-45 before:-translate-x-1/2 before:bg-white before:rounded-full before:-left-4 hover:before:animate-dot before:bottom-1/2 before:translate-y-1/2 before:duration-500 hover:before:scale-[3] after:absolute after:content-[''] after:bg-white after:rounded-xl after:h-1 after:w-full after:duration-500 after:-bottom-1 after:left-0 after:scale-x-100";

const normalLinkStyle =
  "border-x-[20px] border-y-[24px] border-transparent relative text-xs 2xl:text-sm font-semibold leading-6 uppercase before:content-[''] before:absolute before:size-1 before:scale-0 before:rotate-45 before:-translate-x-1/2 before:bg-white before:rounded-full before:-left-4 hover:before:animate-dot before:bottom-1/2 before:translate-y-1/2 before:duration-500 hover:before:scale-[3] after:absolute after:content-[''] after:bg-white after:rounded-xl after:h-1 after:w-full after:duration-500 after:-bottom-1 after:left-0 after:scale-x-0";

export default LinkItem;
