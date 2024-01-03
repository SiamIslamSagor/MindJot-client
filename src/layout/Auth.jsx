import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="flex flex-col item-center justify-center">
      <Outlet />
    </div>
  );
};

export default Auth;
