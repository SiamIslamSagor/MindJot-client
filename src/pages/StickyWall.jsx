import { useDisclosure } from "@nextui-org/react";
import StickyForm from "../components/StickyForm";
import StickyNote from "../components/StickyNote";
import CreateButton from "../components/CreateButton";
import { Fade } from "react-awesome-reveal";
import { stickyNotesData } from "../links/dummyLinks";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const onDragEnd = result => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    console.log("source.droppableId !== destination.droppableId");
    console.log(result);
  } else {
    console.log("else block (in same status div)");
    console.log(result);
  }
};

const StickyWall = () => {
  // nextUI modal hook
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Fade>
      <DragDropContext onDragEnd={result => onDragEnd(result)}>
        <div className="px-2 md:px-5 ">
          <h1 className="text-4xl text-center font-bold my-10">StickyWall</h1>

          {/* sticky notes */}
          <Droppable
            droppableId="sticky-notes-area"
            key="sticky-notes-area"
            type="droppableListItem"
            direction="vertical"
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`flex justify-center gap-10 flex-wrap ${
                  snapshot.isDraggingOver && "bg-base-300"
                }`}
              >
                {stickyNotesData.map((note, index) => (
                  <StickyNote
                    key={note._id}
                    index={index}
                    _id={note._id}
                    color={note.themeColor}
                    heading={note.heading}
                    description={note.description}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          {/* create new sticky note button with proper style and animation */}
          <CreateButton onOpen={onOpen} tooltip={"Create new sticky note"} />

          {/* sticky form */}
          <StickyForm isOpen={isOpen} onOpenChange={onOpenChange}></StickyForm>
        </div>
      </DragDropContext>
    </Fade>
  );
};

export default StickyWall;
