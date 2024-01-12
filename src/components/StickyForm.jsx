import PropTypes from "prop-types";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Input,
  Textarea,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { stickyColors } from "../links/dummyLinks";
import { IoMdAdd } from "react-icons/io";
import { useRef, useState } from "react";
import useDataContext from "../hooks/useDataContext";

const StickyForm = ({ isOpen, onOpenChange }) => {
  // state
  const [descriptionText, setDescriptionText] = useState("");
  const [noteThemeColor, setNoteThemeColor] = useState("black");

  //   hook
  const { user } = useDataContext();

  // ref
  const descriptionRef = useRef(null);

  //   handler
  // form submit handler
  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const data = {
      heading: form.heading.value || "not given",
      description: descriptionText.replace(/\n/g, " ") || "not given",
      noteThemeColor: noteThemeColor || "not given",
      email: (user && user?.email) || "not given",
    };
    console.log(data);
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
                <div className="w-full mb-4">
                  <Select
                    isRequired
                    onChange={e => {
                      setNoteThemeColor(e.target.value);
                    }}
                    label="Select note theme color"
                    placeholder="Select note theme color"
                    defaultSelectedKeys={["black"]}
                  >
                    {stickyColors.map(color => (
                      <SelectItem key={color} value={color}>
                        {color}
                      </SelectItem>
                    ))}
                  </Select>
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

StickyForm.propTypes = {
  isOpen: PropTypes.bool,
  onOpenChange: PropTypes.func,
};

export default StickyForm;
