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
import { Draggable } from "react-beautiful-dnd";

const StickyNote = ({ color = "green", heading, description, _id, index }) => {
  return (
    <Draggable key={_id} draggableId={_id} index={index}>
      {(provided, snapshot) => (
        <ScrollShadow
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`relative max-sm:min-h-72 sm:min-h-80 max-h-96  max-sm:min-w-72 sm:min-w-80 max-w-96 p-5 pb-16 shadow-2xl text-white rounded-lg ${
            color === "green"
              ? "bg-deep-green"
              : color === "blue"
              ? "bg-light-blue"
              : color === "black"
              ? "bg-light-black"
              : color === "pink"
              ? "bg-deep-rose"
              : color === "dark-black"
              ? "bg-black"
              : "bg-black"
          } ${snapshot.isDragging ? "drop-shadow-2xl" : ""}`}
          orientation="horizontal"
          hideScrollBar={true}
          as={"div"}
        >
          <div className="relative ">
            <div
              className={`sticky -top-5  flex items-center  mb-2 justify-between py-2 ${
                color === "green"
                  ? "bg-deep-green"
                  : color === "blue"
                  ? "bg-light-blue"
                  : color === "black"
                  ? "bg-light-black"
                  : color === "pink"
                  ? "bg-deep-rose"
                  : color === "dark-black"
                  ? "bg-black"
                  : "bg-black"
              } `}
            >
              <h3 className="text-center text-2xl md:font-bold max-w-72">
                {heading ? heading : "Heading ..."}
              </h3>{" "}
              {/* action div */}
              <div className="">
                <Dropdown>
                  <DropdownTrigger>
                    <Button isIconOnly radius="full" variant="light">
                      <HiDotsVertical className={`text-xl text-white`} />
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
            <p className=" ">DESCRIPTION : {description}</p>
          </div>
        </ScrollShadow>
      )}
    </Draggable>
  );
};

StickyNote.propTypes = {
  color: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  _id: PropTypes.string,
  index: PropTypes.number,
};

export default StickyNote;
