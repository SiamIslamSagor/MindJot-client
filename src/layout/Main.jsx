import { Outlet } from "react-router-dom";
// import NextNav from "../components/NextNav";
import Navbar from "../components/Navbar";
import Preloader from "../components/ui/Preloader";
import MobileNav from "../components/ui/MobileNav";
import EntryView from "../components/ui/EntryView";

const Main = () => {
  return (
    <>
      {/* <Preloader /> */}
      {/* <MobileNav /> */}
      <EntryView />
      <div className="bg-base-100 min-h-screen">
        {/* <NextNav /> */}

        {/* <Navbar /> */}
        <div className="h-24"></div>
        <Outlet />
      </div>
    </>
  );
};

export default Main;
