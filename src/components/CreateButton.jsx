import { Button, Tooltip } from "@nextui-org/react";
import { Bounce } from "react-awesome-reveal";
import { IoMdAdd } from "react-icons/io";
import PropTypes from "prop-types";
const CreateButton = ({ onOpen, tooltip }) => {
  return (
    <div className="fixed bottom-32 sm:bottom-40 lg:bottom-16 right-4 xsm:right-6 sm:right-10 z-[70]">
      <Bounce duration={1200}>
        <Tooltip content={tooltip}>
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
  );
};

CreateButton.propTypes = {
  onOpen: PropTypes.func,
  tooltip: PropTypes.string,
};

export default CreateButton;
