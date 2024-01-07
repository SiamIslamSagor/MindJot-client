import { Fade } from "react-awesome-reveal";
import CreateButton from "../components/CreateButton";
import { Accordion, AccordionItem, ScrollShadow } from "@nextui-org/react";
import ThreeDot from "../components/ThreeDot";
import { taskData } from "../links/dummyLinks";
import TaskHeading from "../components/TaskHeading";

const ManageTodo = () => {
  return (
    <div>
      <Fade>
        <div className="flex justify-center flex-wrap gap-10 my-20">
          {/* todo */}
          <ScrollShadow
            orientation="horizontal"
            hideScrollBar={true}
            as={"div"}
            className="bg-base-200 min-h-96 max-h-[65vh] max-xsm: xsm:min-w-96  rounded-xl p-4 duration-500"
          >
            <div className="z-10 h-6 rounded-tmd sticky -top-4 bg-base-200"></div>
            <TaskHeading text={"Todo"} taskType={"todo"} />
            <Accordion variant="splitted">
              {taskData
                .filter(task => task.status === "todo")
                .map(task => (
                  <AccordionItem
                    key={task._id}
                    aria-label={task.heading}
                    title={task.heading}
                    className="max-w-[350px] mx-2 relative "
                  >
                    <p className="pb-12"> {task.description}</p>
                    <ThreeDot />
                  </AccordionItem>
                ))}
            </Accordion>
          </ScrollShadow>
          {/* ongoing */}
          <ScrollShadow
            orientation="horizontal"
            hideScrollBar={true}
            as={"div"}
            className="bg-base-200 min-h-96 max-h-[65vh] max-xsm: xsm:min-w-96  rounded-xl p-4 duration-500"
          >
            <div className="z-10 h-6 rounded-tmd sticky -top-4 bg-base-200"></div>
            <TaskHeading text={"Ongoing"} taskType={"ongoing"} />
            <Accordion variant="splitted">
              {taskData
                .filter(task => task.status === "ongoing")
                .map(task => (
                  <AccordionItem
                    key={task._id}
                    aria-label={task.heading}
                    title={task.heading}
                    className="max-w-[350px] mx-2 relative "
                  >
                    <p className="pb-12"> {task.description}</p>
                    <ThreeDot />
                  </AccordionItem>
                ))}
            </Accordion>
          </ScrollShadow>
          {/* completed */}
          <ScrollShadow
            orientation="horizontal"
            hideScrollBar={true}
            as={"div"}
            className="bg-base-200 min-h-96 max-h-[65vh] max-xsm: xsm:min-w-96  rounded-xl p-4 duration-500"
          >
            <div className="z-10 h-6 rounded-tmd sticky -top-4 bg-base-200"></div>
            <TaskHeading text={"Completed"} taskType={"completed"} />
            <Accordion variant="splitted">
              {taskData
                .filter(task => task.status === "completed")
                .map(task => (
                  <AccordionItem
                    key={task._id}
                    aria-label={task.heading}
                    title={task.heading}
                    className="max-w-[350px] mx-2 relative "
                  >
                    <p className="pb-12"> {task.description}</p>
                    <ThreeDot />
                  </AccordionItem>
                ))}
            </Accordion>
          </ScrollShadow>
          {/* <ScrollShadow
            orientation="horizontal"
            hideScrollBar={true}
            as={"div"}
            className="bg-base-200 min-h-96 max-h-[65vh] max-xsm: xsm:min-w-96  rounded-xl p-4"
          >
            <div className="h-6 rounded-tmd sticky -top-4 bg-base-200"></div>
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
          </ScrollShadow> */}
          {/* <div className="bg-base-200 min-h-96 max-h-[65vh] min-w-96  rounded-xl p-4">
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
          <div className="bg-base-200 min-h-96 max-h-[65vh] min-w-96  rounded-xl p-4">
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
      </Fade>
      <CreateButton tooltip="Create new todo" />
    </div>
  );
};

export default ManageTodo;
