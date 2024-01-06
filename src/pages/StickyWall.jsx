import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { Bounce } from "react-awesome-reveal";
import { IoMdAdd } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";
import StickyForm from "../components/StickyForm";

const StickyWall = () => {
  // nextUI modal hook
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="px-2 md:px-5 ">
      <h1 className="text-4xl text-center font-bold my-10">StickyWall</h1>

      {/* sticky wall */}
      <div className="flex gap-4 flex-wrap">
        <div className="relative min-h-72 min-w-72 max-w-md p-5 bg-light-black  text-white rounded-lg">
          <h3 className="text-center mb-2 text-2xl">Heading...</h3>
          <p className=" ">
            DESCRIPTION : Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Aspernatur, saepe? Lorem ipsum dolor sit amet totam necessitatibus
            laudantium facilis, ea ipsum dolores voluptate unde velit possimus,
            quisquam quidem?{" "}
          </p>
          {/* action div */}
          <div className="absolute right-5 bottom-5">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly radius="full" variant="light">
                  <HiDotsVertical className="text-xl text-white" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem startContent={<FiEdit3 />}>
                  Edit Note
                </DropdownItem>
                <DropdownItem
                  className="text-danger"
                  color="danger"
                  startContent={<AiOutlineDelete />}
                >
                  Delete Note
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>

      {/* create new sticky note button with proper style and animation */}
      <div className="fixed bottom-32 sm:bottom-40 lg:bottom-16 right-4 xsm:right-6 sm:right-10">
        <Bounce duration={1200}>
          <Tooltip content={"Create new sticky note"}>
            <Button
              onPress={onOpen}
              isIconOnly
              color="primary"
              radius="full"
              className="max-md:h20 max-lg:h-16 max-xl:h-16 xl:h-20 max-md:w20 max-lg:w-16 max-xl:w-16 xl:w-20"
              aria-level={"add new sticky note"}
            >
              <IoMdAdd className="text-4xl xl:text-5xl font-bold" />
            </Button>
          </Tooltip>
        </Bounce>
      </div>

      {/* sticky form */}
      <StickyForm isOpen={isOpen} onOpenChange={onOpenChange}></StickyForm>
    </div>
  );
};

export default StickyWall;
