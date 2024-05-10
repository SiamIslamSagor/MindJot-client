/* eslint-disable react/prop-types */
import { Input, Textarea } from "@nextui-org/react";
import { cn } from "../../utils/cn";

const Contact = ({ className }) => {
  return (
    <div
      className={cn(
        "selection:text-[#111111] selection:bg-[#ff4439] max-w-2xl w-full dark border",
        className
      )}
    >
      <div>
        <form>
          <div className="flex flex-col !text-white">
            <Input
              type="text"
              variant="underlined"
              label="Full Name"
              // color="danger"
              className="!text-white !text-3xl"
            />
          </div>
          <div className="flex flex-col !text-white">
            <Input
              type="email"
              variant="underlined"
              label="E-mail"
              // color="danger"
              className="!text-white !text-3xl"
            />
          </div>
          <div className="flex flex-col !text-white">
            <Input
              type="text"
              variant="underlined"
              label="Subject"
              // color="danger"
              className="!text-white !text-3xl"
            />
          </div>
          <div className="flex flex-col !text-white">
            <Textarea
              onResize={true}
              variant="underlined"
              label="Description"
              // color="danger"
              // placeholder="Enter your description"
              className="col-span-12 md:col-span-6 mb-6 md:mb-0"
              classNames={{
                input: "resize-y max-h-[400px] selection:bg-[#ff4439]",
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
