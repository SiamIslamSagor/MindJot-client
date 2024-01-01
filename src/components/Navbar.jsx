import { navLinks } from "../links/dummyLinks";
const Navbar = () => {
  return (
    <div className="bg-white drop-shadow-md z-[100] fixed w-full mt-40">
      <div>
        <div className="text-5xl font-[1000]">
          M<span className="text-blue-500">i</span>ndJ
          <span className="text-blue-500">o</span>t
        </div>
        <div>links</div>
      </div>
    </div>
  );
};

export default Navbar;
