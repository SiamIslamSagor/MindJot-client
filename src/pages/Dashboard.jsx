import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <div className="flex flex-col item-center justify-center border p-5 my-10">
      <Helmet>
        <title>MindJot | Dashboard</title>
      </Helmet>
      <h1 className="text-4xl text-center font-bold">Dashboard</h1>
      {/* <div className=" h-[300vh] sm:bg-light-blue"></div> */}
    </div>
  );
};

export default Dashboard;
