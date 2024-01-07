import { Fade } from "react-awesome-reveal";
import CreateButton from "../components/CreateButton";
import { Accordion, AccordionItem, ScrollShadow } from "@nextui-org/react";
import ThreeDot from "../components/ThreeDot";

const ManageTodo = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <Fade>
        <div className="flex justify-center flex-wrap gap-10 my-20">
          <ScrollShadow
            orientation="horizontal"
            hideScrollBar={true}
            as={"div"}
            className="bg-base-200 min-h-96 max-h-[65vh] max-xsm: xsm:min-w-96  rounded-xl p-4 duration-500"
          >
            <div className="z-10 h-6 rounded-tmd sticky -top-4 bg-base-200"></div>
            <h3 className="bg-deep-rose rounded-lg text-white text-center p-3 text-2xl sticky top-0 max-2xsm:min-w-72 max-xsm:min-w-80 xsm:min-w-96 z-[70] mb-5">
              Todo
            </h3>
            <Accordion variant="splitted">
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Accordion 1"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Accordion 2"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="Accordion 4"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title="Accordion 5"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="6"
                aria-label="Accordion 6"
                title="Accordion 6"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="7"
                aria-label="Accordion 7"
                title="Accordion 7"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="8"
                aria-label="Accordion 8"
                title="Accordion 8"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="9"
                aria-label="Accordion 9"
                title="Accordion 9"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="10"
                aria-label="Accordion 10"
                title="Accordion 10"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
            </Accordion>
          </ScrollShadow>
          <ScrollShadow
            orientation="horizontal"
            hideScrollBar={true}
            as={"div"}
            className="bg-base-200 min-h-96 max-h-[65vh] max-xsm: xsm:min-w-96  rounded-xl p-4 duration-500"
          >
            <div className="z-10 h-6 rounded-tmd sticky -top-4 bg-base-200"></div>
            <h3 className="bg-deep-green rounded-lg text-white text-center p-3 text-2xl sticky top-0 max-2xsm:min-w-72 max-xsm:min-w-80 xsm:min-w-96 z-[70] mb-5">
              Todo
            </h3>
            <Accordion variant="splitted">
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Accordion 1"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Accordion 2"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="Accordion 4"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title="Accordion 5"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="6"
                aria-label="Accordion 6"
                title="Accordion 6"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="7"
                aria-label="Accordion 7"
                title="Accordion 7"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="8"
                aria-label="Accordion 8"
                title="Accordion 8"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="9"
                aria-label="Accordion 9"
                title="Accordion 9"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="10"
                aria-label="Accordion 10"
                title="Accordion 10"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
            </Accordion>
          </ScrollShadow>
          <ScrollShadow
            orientation="horizontal"
            hideScrollBar={true}
            as={"div"}
            className="bg-base-200 min-h-96 max-h-[65vh] max-xsm: xsm:min-w-96  rounded-xl p-4 duration-500"
          >
            <div className="z-10 h-6 rounded-tmd sticky -top-4 bg-base-200"></div>
            <h3 className="bg-light-blue rounded-lg text-white text-center p-3 text-2xl sticky top-0 max-2xsm:min-w-72 max-xsm:min-w-80 xsm:min-w-96 z-[70] mb-5">
              Completed
            </h3>
            <Accordion variant="splitted">
              {/* <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Accordion 1"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Accordion 2"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="Accordion 4"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title="Accordion 5"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="6"
                aria-label="Accordion 6"
                title="Accordion 6"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="7"
                aria-label="Accordion 7"
                title="Accordion 7"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="8"
                aria-label="Accordion 8"
                title="Accordion 8"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
              <AccordionItem
                key="9"
                aria-label="Accordion 9"
                title="Accordion 9"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem> */}
              <AccordionItem
                key="10"
                aria-label="Accordion 10"
                title="Accordion 10"
                className="max-w-[350px] mx-2 relative "
              >
                <p className="pb-12"> {defaultContent}</p>
                <ThreeDot />
              </AccordionItem>
            </Accordion>
          </ScrollShadow>
          {/* <ScrollShadow
            orientation="horizontal"
            hideScrollBar={true}
            as={"div"}
            className="bg-base-200 min-h-96 max-h-[65vh] max-xsm: xsm:min-w-96  rounded-xl p-4"
          >
            <div className="h-6 rounded-tmd sticky -top-4 bg-base-200"></div>
            <h3 className="bg-deep-rose rounded-lg text-white text-center p-3 text-2xl sticky top-0 max-2xsm:min-w-72 max-xsm:min-w-80 xsm:min-w-96">
              Todo
            </h3>
            <ul>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
              <li className="text-center my-2 bg-deep-rose   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Todo
              </li>
            </ul>
          </ScrollShadow> */}
          {/* <div className="bg-base-200 min-h-96 max-h-[65vh] min-w-96  rounded-xl p-4">
            <h3 className="bg-deep-green rounded-lg text-white text-center p-3 text-2xl">
              Ongoing
            </h3>
            <ul>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
              <li className="text-center my-2 bg-deep-green   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Ongoing
              </li>
            </ul>
          </div>
          <div className="bg-base-200 min-h-96 max-h-[65vh] min-w-96  rounded-xl p-4">
            <h3 className="bg-light-blue rounded-lg text-white text-center p-3 text-2xl">
              Completed
            </h3>
            <ul>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
              <li className="text-center my-2 bg-light-blue   font-bold text-lg p-2 rounded-md bg-opacity-25">
                Completed
              </li>
            </ul>
          </div> */}
        </div>
      </Fade>
      <CreateButton tooltip="Create new todo" />
    </div>
  );
};

export default ManageTodo;
