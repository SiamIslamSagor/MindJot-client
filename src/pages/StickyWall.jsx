import { Button, useDisclosure } from "@nextui-org/react";
import StickyForm from "../components/StickyForm";
import StickyNote from "../components/StickyNote";
import CreateButton from "../components/CreateButton";
import { Fade } from "react-awesome-reveal";
import { stickyNotesData } from "../links/dummyLinks";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";
import { useState } from "react";

const StickyWall = () => {
  // nextUI modal hook
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [notesData, setNotesData] = useState(stickyNotesData);
  function onChange(sourceId, sourceIndex, targetIndex) {
    const nextState = swap(stickyNotesData, sourceIndex, targetIndex);
    setNotesData(nextState);
  }

  return (
    <Fade>
      <div className="px-2 md:px-5 ">
        <h1 className="text-4xl text-center font-bold my-10">StickyWall</h1>

        {/* sticky notes */}
        <div className={`  `}>
          <GridContextProvider onChange={onChange}>
            <GridDropZone
              id="nots"
              boxesPerRow={3}
              rowHeight={320}
              style={{ height: 320 * Math.ceil(notesData.length / 3) }}
            >
              {notesData.map((note, index) => (
                <GridItem key={note._id}>
                  <StickyNote
                    key={`note._id ${index}`}
                    index={index}
                    _id={note._id}
                    color={note.themeColor}
                    heading={note.heading}
                    description={note.description}
                  />
                </GridItem>
              ))}
            </GridDropZone>
          </GridContextProvider>
          <div className="my-20 text-center">
            <Button onClick={() => console.log(notesData)} color="primary">
              State
            </Button>
          </div>
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
