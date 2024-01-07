import PropTypes from "prop-types";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  ScrollShadow,
} from "@nextui-org/react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";

const StickyNote = ({ color = "green", heading, description }) => {
  return (
    <ScrollShadow
      className={`relative max-sm:min-h-72 sm:min-h-80 max-h-96  max-sm:min-w-72 sm:min-w-80 max-w-96 p-5 pb-16 ${
        color === "green"
          ? "bg-deep-green"
          : color === "blue"
          ? "bg-light-blue"
          : color === "black"
          ? "bg-light-black"
          : color === "pink"
          ? "bg-deep-rose"
          : color === "light pink"
          ? "bg-light-rose"
          : "bg-black"
      } ${color === "light pink" ? "" : "text-white"} rounded-lg`}
      orientation="horizontal"
      hideScrollBar={true}
      as={"div"}
    >
      <div>
        <h3 className="text-center mb-2 text-2xl md:font-bold">
          {heading ? heading : "Heading..."}
        </h3>
        <p className=" ">DESCRIPTION : {description}</p>
        {/* action div */}
        <div className="absolute right-5 bottom-5">
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly radius="full" variant="light">
                <HiDotsVertical
                  className={`text-xl ${
                    color === "light pink" ? "" : "text-white"
                  }`}
                />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem startContent={<FiEdit3 />}>Edit Note</DropdownItem>
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
    </ScrollShadow>
  );
};

StickyNote.propTypes = {
  color: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
};

export default StickyNote;
