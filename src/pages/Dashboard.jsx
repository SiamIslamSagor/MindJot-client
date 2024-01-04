import { Helmet } from "react-helmet-async";
import Title from "../components/Title";
import Logo from "../components/Logo";

const Dashboard = () => {
  return (
    <div className="">
      <Helmet>
        <title>MindJot | Dashboard</title>
      </Helmet>
      <div className="flex min-h-screen">
        <div className="max-w-sm w-full bg-light-rose">
          <div className="max-w-64 mx-auto">
            <Logo />
            <Title>Dashboard</Title>
          </div>
        </div>
        <div className="w-full bg-light-blue opacity-50 "></div>
      </div>
    </div>
  );
};

export default Dashboard;
