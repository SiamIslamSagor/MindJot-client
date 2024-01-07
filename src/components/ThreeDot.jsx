import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";

const ThreeDot = () => {
  return (
    <div className="absolute right-5 bottom-5">
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly radius="full" variant="light">
            <HiDotsVertical />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem startContent={<FiEdit3 />}>Edit Task</DropdownItem>
          <DropdownItem
            className="text-danger"
            color="danger"
            startContent={<AiOutlineDelete />}
          >
            Delete Task
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ThreeDot;
