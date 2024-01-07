import { useDisclosure } from "@nextui-org/react";
import StickyForm from "../components/StickyForm";
import StickyNote from "../components/StickyNote";
import CreateButton from "../components/CreateButton";
import { Fade } from "react-awesome-reveal";

const StickyWall = () => {
  // nextUI modal hook
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Fade>
      <div className="px-2 md:px-5 ">
        <h1 className="text-4xl text-center font-bold my-10">StickyWall</h1>

        {/* sticky notes */}
        <div className="flex justify-center gap-10 flex-wrap">
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
        <CreateButton onOpen={onOpen} tooltip={"Create new sticky note"} />

        {/* sticky form */}
        <StickyForm isOpen={isOpen} onOpenChange={onOpenChange}></StickyForm>
      </div>
    </Fade>
  );
};

export default StickyWall;
