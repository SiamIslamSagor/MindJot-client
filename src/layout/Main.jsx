import { Outlet } from "react-router-dom";
// import NextNav from "../components/NextNav";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* <NextNav /> */}
      <Navbar />
      <div className="h-24"></div>
      <Outlet />
    </div>
  );
};

export default Main;
