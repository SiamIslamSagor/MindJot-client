import { Button, Tooltip, useDisclosure } from "@nextui-org/react";
import { Bounce } from "react-awesome-reveal";
import { IoMdAdd } from "react-icons/io";
import StickyForm from "../components/StickyForm";
import StickyNote from "../components/StickyNote";

const StickyWall = () => {
  // nextUI modal hook
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="px-2 md:px-5 ">
      <h1 className="text-4xl text-center font-bold my-10">StickyWall</h1>

      {/* sticky notes */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <StickyNote />
        <StickyNote />
        <StickyNote />
        <StickyNote />
        <StickyNote />
        <StickyNote />
        <StickyNote />
        <StickyNote />
        <StickyNote />
      </div>

      {/* create new sticky note button with proper style and animation */}
      <div className="fixed bottom-32 sm:bottom-40 lg:bottom-16 right-4 xsm:right-6 sm:right-10 z-[70]">
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
