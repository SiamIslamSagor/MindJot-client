import { Outlet } from "react-router-dom";

const MainDash = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <Outlet />
    </div>
  );
};

export default MainDash;
