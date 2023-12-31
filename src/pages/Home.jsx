import { Button } from "@nextui-org/react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="flex flex-col item-center justify-center ">
      <Helmet>
        <title>MindJot | Home</title>
      </Helmet>
      <div className="flex items-center justify-center my-20">
        <div>
          <Button radius="sm" color="primary">
            Click
          </Button>
        </div>
      </div>
      <div className=" h-[300vh] bg-light-blue"></div>
    </div>
  );
};

export default Home;
