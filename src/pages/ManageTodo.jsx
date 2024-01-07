import CreateButton from "../components/CreateButton";

const ManageTodo = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center flex-wrap gap-5 my-20">
          <div className="bg-base-300 min-h-96 min-w-96 h-8  rounded-xl p-4">
            <h3 className="bg-deep-rose rounded-lg text-white text-center p-3 text-2xl">
              Todo
            </h3>
          </div>
          <div className="bg-base-300 min-h-96 min-w-96 h-8  rounded-xl p-4">
            <h3 className="bg-deep-green rounded-lg text-white text-center p-3 text-2xl">
              Ongoing
            </h3>
          </div>
          <div className="bg-base-300 min-h-96 min-w-96 h-8  rounded-xl p-4">
            <h3 className="bg-light-blue rounded-lg text-white text-center p-3 text-2xl">
              Completed
            </h3>
          </div>
        </div>
      </div>
      <CreateButton tooltip="Create new todo" />
    </div>
  );
};

export default ManageTodo;
