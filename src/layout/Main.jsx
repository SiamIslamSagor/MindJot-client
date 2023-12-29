import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex flex-col item-center justify-center ">
      <Outlet />
    </div>
  );
};

export default Main;
