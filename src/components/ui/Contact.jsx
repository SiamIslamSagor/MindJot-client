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
            <CustomInp label={"Full Name"} name={"full_name"} />
            <CustomInp label={"E-mail"} name={"e_mail"} type="email" />
            <CustomInp label={"Subject"} name={"subject"} />
            <CustomTextArea label={"Message"} />
            <Button
              type="submit"
              radius="none"
              className="w-full text-base tracking-widest uppercase h-14 "
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
