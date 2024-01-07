import { Fade } from "react-awesome-reveal";
import CreateButton from "../components/CreateButton";
import { ScrollShadow } from "@nextui-org/react";

const ManageTodo = () => {
  return (
    <div>
      <Fade>
        <div className="flex justify-center flex-wrap gap-5 my-20">
          <ScrollShadow
            orientation="horizontal"
            hideScrollBar={true}
            as={"div"}
            className="bg-base-300 min-h-96 max-h-[65vh] max-xsm: xsm:min-w-96  rounded-xl p-4"
          >
            <div className="h-6 rounded-tmd sticky -top-4 bg-base-300"></div>
            <h3 className="bg-deep-rose rounded-lg text-white text-center p-3 text-2xl sticky top-0 max-2xsm:min-w-72 max-xsm:min-w-80 xsm:min-w-96">
              Todo
            </h3>
            <ul>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
            </ul>
          </ScrollShadow>
          {/* <div className="bg-base-300 min-h-96 max-h-[65vh] min-w-96  rounded-xl p-4">
            <h3 className="bg-deep-green rounded-lg text-white text-center p-3 text-2xl">
              Ongoing
            </h3>
            <ul>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
            </ul>
          </div>
          <div className="bg-base-300 min-h-96 max-h-[65vh] min-w-96  rounded-xl p-4">
            <h3 className="bg-light-blue rounded-lg text-white text-center p-3 text-2xl">
              Completed
            </h3>
            <ul>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
            </ul>
          </div> */}
        </div>
        <CreateButton tooltip="Create new todo" />
      </Fade>
    </div>
  );
};

export default ManageTodo;
