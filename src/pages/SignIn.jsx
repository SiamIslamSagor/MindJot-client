import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

const SignIn = () => {
  // state
  const [isPasswordType, setIsPasswordType] = useState(true);

  return (
    <div>
      <Helmet>
        <title>MindJot | Sign In</title>
      </Helmet>
      <Toaster></Toaster>

      {/* main */}
      <div>
        <div className="bg-light-rose mt-40 rounded-md max-w-md mx-auto w-full">
          <h2 className="text-3xl my-5">Sign in to MindJot</h2>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
