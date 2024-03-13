import { Link } from "react-router-dom";

const LinkItem = () => {
  return (
    <div className="text-white w-max mx-auto space-x-10 h-full p-10">
      <Link className="p-4 relative text-xs leading-6 uppercase before:content-[''] before:absolute before:size-1 before:scale-0 before:rotate-45 before:-translate-x-1/2 before:bg-white before:rounded-full before:left-0 hover:before:animate-dot before:bottom-1/2 before:translate-y-1/2 before:duration-500 hover:before:scale-[400%]">
        home
      </Link>
      <Link className="p-4 relative text-xs leading-6 uppercase before:content-[''] before:absolute before:size-1 before:scale-0 before:rotate-45 before:-translate-x-1/2 before:bg-white before:rounded-full before:left-0 hover:before:animate-dot before:bottom-1/2 before:translate-y-1/2 before:duration-500 hover:before:scale-[400%]">
        project
      </Link>
      <Link className="p-4 relative text-xs leading-6 uppercase before:content-[''] before:absolute before:size-1 before:scale-0 before:rotate-45 before:-translate-x-1/2 before:bg-white before:rounded-full before:left-0 hover:before:animate-dot before:bottom-1/2 before:translate-y-1/2 before:duration-500 hover:before:scale-[400%]">
        contact me
      </Link>
      {/* <Link className="p-4 border relative text-xs leading-6 uppercase before:content-[''] before:absolute before:size-1 before:rotate-45 before:-translate-x-1/2 before:bg-white before:rounded-full before:left-0 hover:before:animate-dot before:bottom-1/2 before:translate-y-1/2 before:duration-300 hover:before:scale-[4]">
        home
      </Link>
      <Link className="p-4 border relative text-xs leading-6 uppercase before:content-[''] before:absolute before:size-1 before:rotate-45 before:-translate-x-1/2 before:bg-white before:rounded-full before:left-0 hover:before:animate-dot before:bottom-1/2 before:translate-y-1/2 before:duration-300 hover:before:scale-[4]">
        project
      </Link>
      <Link className="p-4 border relative text-xs leading-6 uppercase before:content-[''] before:absolute before:size-1 before:rotate-45 before:-translate-x-1/2 before:bg-white before:rounded-full before:left-0 hover:before:animate-dot before:bottom-1/2 before:translate-y-1/2 before:duration-300 hover:before:scale-[4]">
        contact me
      </Link> */}
    </div>
  );
};

export default LinkItem;
