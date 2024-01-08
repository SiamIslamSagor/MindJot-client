import { useDisclosure } from "@nextui-org/react";
import StickyForm from "../components/StickyForm";
import StickyNote from "../components/StickyNote";
import CreateButton from "../components/CreateButton";
import { Fade } from "react-awesome-reveal";
import { stickyNotesData } from "../links/dummyLinks";

const StickyWall = () => {
  // nextUI modal hook
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Fade>
      <div className="px-2 md:px-5 ">
        <h1 className="text-4xl text-center font-bold my-10">StickyWall</h1>

        {/* sticky notes */}
        <div className="flex justify-center gap-10 flex-wrap">
          {stickyNotesData.map(note => (
            <StickyNote
              key={note._id}
              color={note.themeColor}
              heading={note.heading}
              description={note.description}
            />
          ))}
        </div>

        {/* create new sticky note button with proper style and animation */}
        <CreateButton onOpen={onOpen} tooltip={"Create new sticky note"} />

        {/* sticky form */}
        <StickyForm isOpen={isOpen} onOpenChange={onOpenChange}></StickyForm>
      </div>
    </Fade>
  );
};

export default StickyWall;
