import PropTypes from "prop-types";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Input,
  Textarea,
} from "@nextui-org/react";
import { IoMdAdd } from "react-icons/io";
import { useRef, useState } from "react";
import useDataContext from "../hooks/useDataContext";
import { useAxiosPublic } from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useTasks } from "../hooks/useTasks";

const TaskForm = ({ isOpen, onOpenChange }) => {
  // state
  const [descriptionText, setDescriptionText] = useState("");
  //   console.log(onOpenChange);

  //   hook
  const { user } = useDataContext();
  const axiosPublic = useAxiosPublic();
  const { refetch } = useTasks();

  // ref
  const descriptionRef = useRef(null);

  //   handler
  // form submit handler
  const onSubmit = e => {
    e.preventDefault();
    const toastId = toast.loading("processing...");

    const form = e.target;
    const data = {
      heading: form.heading.value || "not given",
      description: descriptionText.replace(/\n/g, " ") || "not given",
      email: (user && user?.email) || "not given",
      status: "todo",
    };
    console.log(data);

    axiosPublic
      .post("/create-task", data)
      .then(res => {
        console.log(res);
        refetch();
        onOpenChange();
        toast.success("Task created successfully.", {
          id: toastId,
        });
      })
      .catch(err => {
        console.log(err);
        toast.error("Task created failed.", {
          id: toastId,
        });
      });
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Sticky Note
            </ModalHeader>
            <ModalBody>
              <form onSubmit={onSubmit} className="">
                <div className="w-full mb-4">
                  <Input
                    isRequired
                    autoFocus
                    label="Heading"
                    name="heading"
                    placeholder="Enter your note heading"
                    variant="bordered"
                  />
                </div>
                <div className="w-full mb-4">
                  <Textarea
                    ref={descriptionRef}
                    onChange={() =>
                      setDescriptionText(descriptionRef.current.value)
                    }
                    isRequired
                    label="Description"
                    placeholder="Enter your note description"
                  />
                </div>

                <Button
                  color="primary"
                  type="submit"
                  endContent={<IoMdAdd className="text-lg" />}
                >
                  Add Note
                </Button>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

TaskForm.propTypes = {
  isOpen: PropTypes.bool,
  onOpenChange: PropTypes.func,
};

export default TaskForm;
