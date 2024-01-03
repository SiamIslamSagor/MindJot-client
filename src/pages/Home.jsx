import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="flex flex-col item-center justify-center ">
      <Helmet>
        <title>MindJot | Home</title>
      </Helmet>
      <div className=" h-[300vh] bg-light-blue"></div>
    </div>
  );
};

export default Home;
