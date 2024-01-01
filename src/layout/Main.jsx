import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
