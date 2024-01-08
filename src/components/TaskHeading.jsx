import PropTypes from "prop-types";
const TaskHeading = ({ text, taskType }) => {
  return (
    <h3
      className={`${
        taskType === "todo"
          ? "bg-deep-rose"
          : taskType === "ongoing"
          ? "bg-deep-green"
          : taskType === "completed"
          ? "bg-light-blue"
          : ""
      }  rounded-lg text-white text-center p-3 text-2xl sticky top-0 max-2xsm:min-w-72 max-xsm:min-w-80 xsm:min-w-96 z-[30] mb-5`}
    >
      {text}
    </h3>
  );
};

TaskHeading.propTypes = {
  text: PropTypes.string,
  taskType: PropTypes.string,
};

export default TaskHeading;
