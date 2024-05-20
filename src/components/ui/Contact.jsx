/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/react";
import { cn } from "../../utils/cn";
import { CustomInp, CustomTextArea } from "./custom-inp";
import toast from "react-hot-toast";
// import { useState } from "react";

const Contact = ({ className }) => {
  // const [hasValue, setHasValue] = useState("");

  const handleSubmit = e => {
    const toastId = toast.loading("Sending...");
    e.preventDefault();
    const form = e.target;
    const mailInfo = {
      fullName: form.full_name.value.toUpperCase(),
      mail: form.e_mail.value.toLowerCase(),
      mailSubject:
        form.subject.value.charAt(0).toUpperCase() +
        form.subject.value.slice(1),
      mailBodyMessage: form.mail_body_message.value.replace(/\n/g, " "),
    };
    // console.log(mailInfo);
    console.log(mailInfo);
    setTimeout(() => {
      toast.success("Email sent successfully.", { id: toastId });
    }, 2500);
  };
  return (
    <div
      className={cn(
        "selection:text-[#111111] selection:bg-[#ff4439] max-w-2xl w-full dark border font-normal",
        className
      )}
    >
      <div>
        <form onSubmit={e => handleSubmit(e)}>
          <div className=" my-10 min-h-96 p-5 space-y-8">
            {/* <div className="flex flex-col relative group ">
              <input
                id="full name"
                type="text"
                className="py-2 active:ring-0 active:border-none active:outline-none focus:ring-0 focus:border-none focus:outline-none font-normal bg-transparent peer  "
                onChange={e => {
                  setHasValue(e.target.value);
                }}
              />
              <div className="border-b-2 rounded-xl border-[#202020] relative w-full bottom-0 after:content-[''] after:absolute after:h-[2px] after:w-full after:bg-white after:duration-300 after:ease-in-out after:scale-x-0 after:rounded-xl peer-focus:after:scale-x-100"></div>

              <label
                htmlFor="full name"
                className={cn(
                  "absolute bottom-[11px]  px-5 peer-focus:bottom-[35px]  [transition:0.3s_ease-in-out] peer-focus:px-0 text-gray-300",
                  hasValue ? "bottom-[35px] px-0" : "bottom-[9px]"
                )}
              >
                Full Name
              </label>
            </div> */}
            <CustomInp label={"Full Name"} name={"full_name"} />
            <CustomInp label={"E-mail"} name={"e_mail"} type="email" />
            <CustomInp label={"Subject"} name={"subject"} />
            <CustomTextArea label={"Message"} />
            <Button
              type="submit"
              radius="none"
              className="w-full tracking-widest uppercase h-14 "
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
