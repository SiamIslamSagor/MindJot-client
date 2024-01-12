import { Fade } from "react-awesome-reveal";
import CreateButton from "../components/CreateButton";
import { ScrollShadow } from "@nextui-org/react";
import TaskHeading from "../components/TaskHeading";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaAngleLeft } from "react-icons/fa6";
import { useTasks } from "../hooks/useTasks";
import axios from "axios";
import useDataContext from "../hooks/useDataContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { useAxiosPublic } from "../hooks/useAxiosPublic";

const ManageTodo = () => {
  // hooks
  const { user } = useDataContext();
  const { allTasks, refetch } = useTasks();
  console.log(allTasks);
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();

  // mutations
  const { mutate } = useMutation({
    mutationFn: async data => {
      const toastId = toast.loading("processing...");
      return axiosPublic
        .patch(`/update-task/${data.draggableId}`, data)
        .then(res => {
          console.log(res.data);
          toast.success("Task updated successfully.", {
            id: toastId,
          });
        })
        .catch(err => {
          console.log(err);
          toast.error("Task updated failed.", {
            id: toastId,
          });
        });
    },
    onSuccess: () => {
      console.log("Task update by mutate");
      queryClient.invalidateQueries([`allTasks ${user?.email}`]);
    },
  });

  const onDragEnd = result => {
    if (!result.destination) return;
    const { source, destination, draggableId } = result;

    if (source.droppableId !== destination.droppableId) {
      console.log(
        `send this task "${source.droppableId}" and index "${source.index}" to "${destination.droppableId}" and index "${destination.index}"`
      );
      console.log(result);
      const updatedInfo = {
        sourceStatus: source.droppableId,
        sourceIndex: source.index,
        destinationStatus: destination.droppableId,
        destinationIndex: destination.index,
      };
      console.log(updatedInfo);
      mutate({ draggableId, updatedInfo });
    } else {
      console.log(
        `It is same block, just change there index "${source.index}" to "${destination.index}"`
      );
      console.log(result);
    }
  };

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

  /* useEffect(() => {
    axios.get(`http://localhost:5000/all-task/${user?.email}`).then(res => {
      console.log(res.data);
    });
  }, [user?.email]); */
  return (
    <DragDropContext onDragEnd={result => onDragEnd(result)}>
      <div>
        <Toaster />
        <Fade>
          <div className="flex justify-center flex-wrap gap-10 my-20">
            {/* todo with customized accordion */}
            <ScrollShadow
              orientation="horizontal"
              hideScrollBar={true}
              as={"div"}
              className="bg-base-200 bg-opacity-50 shadow-xl border min-h-96 max-h-[65vh] max-xsm: xsm:min-w-96  rounded-xl duration-500"
            >
              <Droppable droppableId="todo" key={"todo"}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`space-y-2 pt-8 p-4 pb-14 duration-400 rounded-lg ${
                      snapshot.isDraggingOver && "bg-base-300"
                    }`}
                  >
                    <TaskHeading text={"Todo"} taskType={"todo"} />
                    {allTasks
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
              className="bg-base-200 bg-opacity-50 shadow-xl border min-h-96 max-h-[65vh] max-xsm: xsm:min-w-96  rounded-xl duration-500"
            >
              <Droppable droppableId="ongoing" key={"ongoing"}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`space-y-2 pt-8 p-4 pb-14 duration-400 rounded-lg ${
                      snapshot.isDraggingOver && "bg-base-300"
                    }`}
                  >
                    <TaskHeading text={"Ongoing"} taskType={"ongoing"} />
                    {allTasks
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
              className="bg-base-200 bg-opacity-50 shadow-xl border min-h-96 max-h-[65vh] max-xsm: xsm:min-w-96  rounded-xl duration-500"
            >
              <Droppable droppableId="completed" key={"completed"}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`space-y-2 pt-8 p-4 pb-14 duration-400 rounded-lg ${
                      snapshot.isDraggingOver && "bg-base-300"
                    }`}
                  >
                    <TaskHeading text={"Completed"} taskType={"completed"} />
                    {allTasks
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
          </div>
        </Fade>
        <CreateButton tooltip="Create new todo" />
      </div>
    </DragDropContext>
  );
};

export default ManageTodo;
