import { Fade } from "react-awesome-reveal";
import CreateButton from "../components/CreateButton";
import { ScrollShadow } from "@nextui-org/react";
import { taskData } from "../links/dummyLinks";
import TaskHeading from "../components/TaskHeading";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaAngleLeft } from "react-icons/fa6";

const onDragEnd = result => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    console.log("source.droppableId !== destination.droppableId");
    console.log(result);
  } else {
    console.log("else block (in same status div)");
    console.log(result);
  }
};

const ManageTodo = () => {
  // custom accordion js

  const handlerAccordion = e => {
    const descriptionDivClass = e.target.nextElementSibling.classList;
    const rotateIcnClass = e.target.childNodes[2].classList;
    if (descriptionDivClass.contains("hidden")) {
      descriptionDivClass.remove("hidden");
      rotateIcnClass.add("-rotate-90");
    } else {
      descriptionDivClass.add("hidden");
      rotateIcnClass.remove("-rotate-90");
    }
  };

  useEffect(() => {}, []);
  return (
    <DragDropContext onDragEnd={result => onDragEnd(result)}>
      <div>
        <Fade>
          <div className="flex justify-center flex-wrap gap-10 my-20">
            {/* todo */}
            {/* <ScrollShadow
              orientation="horizontal"
              hideScrollBar={true}
              as={"div"}
              className="bg-base-200 min-h-96 max-h-[65vh] max-xsm: xsm:min-w-96  rounded-xl p-4 duration-500"
            >
              <div className="z-10 h-6 rounded-tmd sticky -top-4 bg-base-200"></div>
              <TaskHeading text={"Todo"} taskType={"todo"} />
              <Droppable droppableId="todo-area-old" key={"todo-area"}>
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
            </ScrollShadow> */}
            {/* todo with customized accordion */}
            <ScrollShadow
              orientation="horizontal"
              hideScrollBar={true}
              as={"div"}
              className="bg-base-200 min-h-96 max-h-[65vh] max-xsm: xsm:min-w-96  rounded-xl p-4 duration-500"
            >
              <div className="z-10 h-6 rounded-tmd sticky -top-4 bg-base-200"></div>
              <TaskHeading text={"Todo"} taskType={"todo"} />
              <Droppable droppableId="todo-area" key={"todo-area"}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`space-y-2 duration-400 rounded-lg ${
                      snapshot.isDraggingOver && "bg-base-300"
                    }`}
                  >
                    {taskData
                      .filter(task => task.status === "todo")
                      .map((task, index) => (
                        <Draggable
                          key={task._id}
                          draggableId={task._id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`max-w-[350px] mx-auto bg-white shadow-2xl p-4 rounded-2xl duration-400 select-none ${
                                snapshot.isDragging ? "drop-shadow-2xl" : ""
                              }`}
                            >
                              <h4
                                onClick={handlerAccordion}
                                className="flex items-center justify-between text-lg   cursor-pointer py-1 select-none"
                              >
                                {task.heading}{" "}
                                <FaAngleLeft className="duration-300 pointer-events-none opacity-50 text-base" />
                              </h4>
                              <div className="description Div hidden overflow-hidden">
                                <Fade direction="down">
                                  <p className="py-3">{task.description}</p>
                                  <hr className="mb-2" />
                                  <p className="flex items-center justify-between">
                                    status: {task.status}{" "}
                                    <span>
                                      <HiDotsVertical />
                                    </span>
                                  </p>
                                </Fade>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </ScrollShadow>
            {/* ongoing with customized accordion */}
            <ScrollShadow
              orientation="horizontal"
              hideScrollBar={true}
              as={"div"}
              className="bg-base-200 min-h-96 max-h-[65vh] max-xsm: xsm:min-w-96  rounded-xl p-4 duration-500"
            >
              <div className="z-10 h-6 rounded-tmd sticky -top-4 bg-base-200"></div>
              <TaskHeading text={"Ongoing"} taskType={"ongoing"} />
              <Droppable droppableId="ongoing-area" key={"ongoing-area"}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`space-y-2 duration-400 rounded-lg ${
                      snapshot.isDraggingOver && "bg-base-300"
                    }`}
                  >
                    {taskData
                      .filter(task => task.status === "ongoing")
                      .map((task, index) => (
                        <Draggable
                          key={task._id}
                          draggableId={task._id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`max-w-[350px] mx-auto bg-white shadow-2xl p-4 rounded-2xl duration-400 select-none ${
                                snapshot.isDragging ? "drop-shadow-2xl" : ""
                              }`}
                            >
                              <h4
                                onClick={handlerAccordion}
                                className="flex items-center justify-between text-lg   cursor-pointer py-1 select-none"
                              >
                                {task.heading}{" "}
                                <FaAngleLeft className="duration-300 pointer-events-none opacity-50 text-base" />
                              </h4>
                              <div className="description Div hidden overflow-hidden">
                                <Fade direction="down">
                                  <p className="py-3">{task.description}</p>
                                  <hr className="mb-2" />
                                  <p className="flex items-center justify-between">
                                    status: {task.status}{" "}
                                    <span>
                                      <HiDotsVertical />
                                    </span>
                                  </p>
                                </Fade>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </ScrollShadow>
            {/* completed with customized accordion */}
            <ScrollShadow
              orientation="horizontal"
              hideScrollBar={true}
              as={"div"}
              className="bg-base-200 min-h-96 max-h-[65vh] max-xsm: xsm:min-w-96  rounded-xl p-4 duration-500"
            >
              <div className="z-10 h-6 rounded-tmd sticky -top-4 bg-base-200"></div>
              <TaskHeading text={"Completed"} taskType={"completed"} />
              <Droppable droppableId="completed-area" key={"completed-area"}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`space-y-2 duration-400 rounded-lg ${
                      snapshot.isDraggingOver && "bg-base-300"
                    }`}
                  >
                    {taskData
                      .filter(task => task.status === "completed")
                      .map((task, index) => (
                        <Draggable
                          key={task._id}
                          draggableId={task._id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`max-w-[350px] mx-auto bg-white shadow-2xl p-4 rounded-2xl duration-400 select-none ${
                                snapshot.isDragging ? "drop-shadow-2xl" : ""
                              }`}
                            >
                              <h4
                                onClick={handlerAccordion}
                                className="flex items-center justify-between text-lg   cursor-pointer py-1 select-none"
                              >
                                {task.heading}{" "}
                                <FaAngleLeft className="duration-300 pointer-events-none opacity-50 text-base" />
                              </h4>
                              <div className="description Div hidden overflow-hidden">
                                <Fade direction="down">
                                  <p className="py-3">{task.description}</p>
                                  <hr className="mb-2" />
                                  <p className="flex items-center justify-between">
                                    status: {task.status}{" "}
                                    <span>
                                      <HiDotsVertical />
                                    </span>
                                  </p>
                                </Fade>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </ScrollShadow>

            {/*  */}
            {/*  */}
            {/*  */}
            {/* ongoing with customized accordion */}
            {/* <ScrollShadow
              orientation="horizontal"
              hideScrollBar={true}
              as={"div"}
              className="bg-base-200 min-h-96 max-h-[65vh] max-xsm: xsm:min-w-96  rounded-xl p-4 duration-500"
            >
              <div className="z-10 h-6 rounded-tmd sticky -top-4 bg-base-200"></div>
              <TaskHeading text={"Ongoing"} taskType={"ongoing"} />
              <div className=" space-y-2">
                {taskData
                  .filter(task => task.status === "ongoing")
                  .map(task => (
                    <div
                      className="max-w-[350px] mx-auto bg-white shadow-2xl p-4 rounded-2xl duration-400"
                      key={task._id}
                    >
                      <h4
                        onClick={handlerAccordion}
                        className="flex items-center justify-between text-lg   cursor-pointer py-1 select-none"
                      >
                        {task.heading}{" "}
                        <FaAngleLeft className="duration-300 pointer-events-none opacity-50 text-base" />
                      </h4>
                      <div className="description Div hidden overflow-hidden">
                        <Fade direction="down">
                          <p className="py-3">{task.description}</p>
                          <hr className="mb-2" />
                          <p className="flex items-center justify-between">
                            status: {task.status}{" "}
                            <span>
                              <HiDotsVertical />
                            </span>
                          </p>
                        </Fade>
                      </div>
                    </div>
                  ))}
              </div>
            </ScrollShadow> */}
            {/* completed with customized accordion */}
            {/* <ScrollShadow
              orientation="horizontal"
              hideScrollBar={true}
              as={"div"}
              className="bg-base-200 min-h-96 max-h-[65vh] max-xsm: xsm:min-w-96  rounded-xl p-4 duration-500"
            >
              <div className="z-10 h-6 rounded-tmd sticky -top-4 bg-base-200"></div>
              <TaskHeading text={"Completed"} taskType={"completed"} />
              <div className=" space-y-2">
                {taskData
                  .filter(task => task.status === "completed")
                  .map(task => (
                    <div
                      className="max-w-[350px] mx-auto bg-white shadow-2xl p-4 rounded-2xl duration-400"
                      key={task._id}
                    >
                      <h4
                        onClick={handlerAccordion}
                        className="flex items-center justify-between text-lg   cursor-pointer py-1 select-none"
                      >
                        {task.heading}{" "}
                        <FaAngleLeft className="duration-300 pointer-events-none opacity-50 text-base" />
                      </h4>
                      <div className="description Div hidden overflow-hidden">
                        <Fade direction="down">
                          <p className="py-3">{task.description}</p>
                          <hr className="mb-2" />
                          <p className="flex items-center justify-between">
                            status: {task.status}{" "}
                            <span>
                              <HiDotsVertical />
                            </span>
                          </p>
                        </Fade>
                      </div>
                    </div>
                  ))}
              </div>
            </ScrollShadow> */}
          </div>
        </Fade>
        <CreateButton tooltip="Create new todo" />
      </div>
    </DragDropContext>
  );
};

export default ManageTodo;
