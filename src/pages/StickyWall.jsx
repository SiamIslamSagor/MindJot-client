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
      <div className="flex itemscenter justify-center gap-4 flex-wrap">
        <StickyNote
          color="blue"
          description={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quaerat at laborum ratione esse perspiciatis neque, excepturi sunt, quia fuga natus itaque sit, nobis asperiores beatae magnam! Soluta autem ea praesentium deleniti sit facilis cupiditate. Fugit, unde eos? Nequas itaque ut voluptates amet, nisi, minus molli Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quaerat at laborum ratione esse perspiciatis neque, excepturi sunt, quia fuga natus itaque sit, nobis asperiores beatae magnam! Soluta autem ea praesentium deleniti sit facilis cupiditate. Fugit, unde eos? Nequas itaque ut voluptates amet, nisi, minus molli tia sunt velit adipisci eos fuga beatae vel eaque. Voluptatum id perferendis magni expedita at velit, aliquid nostrum dolorem natus harum amet, repellat beatae mollitia illo, quos rerum quam distinctio a quod modi recusandae tempora nobis animi. Maxime et tenetur eligendi ullam possimus. Fugiat, illo minus porro ab deleniti molestiae! Tempora dignissimos nemo odio libero sed porro magnam voluptatum consequatur ab possimus facere accusamus quod, magni voluptas dolore animi odit. Ipsum sint, perspiciatis quos impedit nostrum obcaecati consequatur. Eaque necessitatibus consequuntur sint architecto est fugit de"
          }
        />
        <StickyNote
          color="pink"
          description={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quaerat at laborum ratione esse perspiciatis neque, excepturi sunt, quia fuga natus itaque sit, nobis asperiores beatae magnam! Soluta autem ea praesentium deleniti sit facilis cupiditate. Fugit, unde eos? Nequas itaque ut voluptates amet, nisi, minus molli Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quaerat at laborum ratione esse perspiciatis neque, excepturi sunt, quia fuga natus itaque sit, nobis asperiores beatae magnam! Soluta autem ea praesentium deleniti sit facilis cupiditate. Fugit, unde eos? Nequas itaque ut voluptates amet, nisi, minus molli tia sunt velit adipisci eos fuga beatae vel eaque. Voluptatum id perferendis magni expedita at velit, aliquid nostrum dolorem natus harum amet, repellat beatae mollitia illo, quos rerum quam distinctio a quod modi recusandae tempora nobis animi. Maxime et tenetur eligendi ullam possimus. Fugiat, illo minus porro ab deleniti molestiae! Tempora dignissimos nemo odio libero sed porro magnam voluptatum consequatur ab possimus facere accusamus quod, magni voluptas dolore animi odit. Ipsum sint, perspiciatis quos impedit nostrum obcaecati consequatur. Eaque necessitatibus consequuntur sint architecto est fugit debitis non suscipit?"
          }
        />
        <StickyNote color="black" />
        <StickyNote color="light pink" />
        <StickyNote color="blue" />
        <StickyNote color="blue" />
        <StickyNote color="light pink" />
        <StickyNote color="green" />
        <StickyNote color="black" />
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
