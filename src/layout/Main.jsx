import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      <Outlet />
    </div>
  );
};

export default Main;
