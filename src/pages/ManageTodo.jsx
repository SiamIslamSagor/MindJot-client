import { Fade } from "react-awesome-reveal";
import CreateButton from "../components/CreateButton";
import { Accordion, AccordionItem, ScrollShadow } from "@nextui-org/react";
import ThreeDot from "../components/ThreeDot";
import { taskData } from "../links/dummyLinks";
import TaskHeading from "../components/TaskHeading";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useRef } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaAngleLeft } from "react-icons/fa6";

const onDragEnd = result => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    console.log("source.droppableId !== destination.droppableId");
    console.log(result);
  } else {
    console.log("else block (source.droppableId !== destination.droppableId)");
    console.log(result);
  }
};

const ManageTodo = () => {
  const divRef = useRef(null);
  console.log(divRef);
  return (
    <DragDropContext onDragEnd={result => onDragEnd(result)}>
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
              <div
                ref={divRef}
                className="z-10 h-6 rounded-tmd sticky -top-4 bg-base-200"
              ></div>
              <TaskHeading text={"Todo"} taskType={"todo"} />
              <Droppable droppableId="todo-area" key={"todo-area"}>
                {provided => (
                  <Accordion
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    variant="splitted"
                  >
                    {taskData
                      .filter(task => task.status === "todo")
                      .map((task, index) => (
                        <AccordionItem
                          key={task._id}
                          aria-label={task.heading}
                          title={task.heading}
                          className="max-w-[350px] mx-2 relative "
                        >
                          <Draggable
                            key={task._id}
                            draggableId={task._id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <p
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`pb-12 ${
                                  snapshot.isDragging ? "bg-red-200" : ""
                                }`}
                                style={{
                                  userSelect: "none",
                                  ...provided.draggableProps.style,
                                }}
                              >
                                {task.description}
                              </p>
                            )}
                          </Draggable>
                          <ThreeDot />
                          {provided.placeholder}
                        </AccordionItem>
                      ))}
                  </Accordion>
                )}
              </Droppable>
            </ScrollShadow>
            {/* todo */}
            <ScrollShadow
              orientation="horizontal"
              hideScrollBar={true}
              as={"div"}
              className="bg-base-200 min-h-96 max-h-[65vh] max-xsm: xsm:min-w-96  rounded-xl p-4 duration-500"
            >
              <div
                ref={divRef}
                className="z-10 h-6 rounded-tmd sticky -top-4 bg-base-200"
              ></div>
              <TaskHeading text={"Todo"} taskType={"todo"} />
              <div className="bg-deepgreen space-y-2">
                {taskData
                  .filter(task => task.status === "todo")
                  .map((task, index) => (
                    <div
                      className="max-w-80 bg-white p-4 rounded-lg"
                      key={task._id}
                    >
                      <h3 className="flex items-center justify-between">
                        {task.heading} <FaAngleLeft />
                      </h3>
                      <div>
                        <p>{task.description}</p>
                        <hr />
                        <p className="flex items-center justify-between">
                          status: {task.status}{" "}
                          <span>
                            <HiDotsVertical />
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </ScrollShadow>
            {/* ongoing */}
            {/* <ScrollShadow
              orientation="horizontal"
              hideScrollBar={true}
              as={"div"}
              className="bg-base-200 min-h-96 max-h-[65vh] max-xsm: xsm:min-w-96  rounded-xl p-4 duration-500"
            >
              <div className="z-10 h-6 rounded-tmd sticky -top-4 bg-base-200"></div>
              <TaskHeading text={"Ongoing"} taskType={"ongoing"} />
              <Droppable droppableId="ongoing-area" key={"ongoing-area"}>
                {provided => (
                  <Accordion
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    variant="splitted"
                  >
                    {taskData
                      .filter(task => task.status === "ongoing")
                      .map((task, index) => (
                        <AccordionItem
                          key={task._id}
                          aria-label={task.heading}
                          title={task.heading}
                          className="max-w-[350px] mx-2 relative "
                        >
                          <Draggable
                            key={task._id}
                            draggableId={task._id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <p
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`pb-12 ${
                                  snapshot.isDragging ? "bg-red-200" : ""
                                }`}
                                style={{
                                  userSelect: "none",
                                  ...provided.draggableProps.style,
                                }}
                              >
                                {task.description}
                              </p>
                            )}
                          </Draggable>
                          <ThreeDot />
                          {provided.placeholder}
                        </AccordionItem>
                      ))}
                  </Accordion>
                )}
              </Droppable>
            </ScrollShadow> */}
            {/* completed */}
            {/*  <ScrollShadow
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
            </ScrollShadow> */}
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
    </DragDropContext>
  );
};

export default ManageTodo;
