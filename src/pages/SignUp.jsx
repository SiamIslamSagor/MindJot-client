import { Helmet } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <Helmet>
        <title>MindJot | Sign Up</title>
      </Helmet>
      <Toaster></Toaster>

      {/* main */}
      <div className="px-5">
        <div className=" mt-40 rounded-md max-w-md mx-auto w-full">
          <h2 className="text-3xl my-10 font-bold">Sign up to MindJot</h2>
          <button className="btn bg-light-black text-white text-base opacity-100 hover:bg-light-black hover:opacity-90 rounded-full w-full font-bold h-16 mt-6">
            <FcGoogle className="text-2xl" />
            Sign up with Google
          </button>

          <div className="divider my-8 text-slate-400">or</div>

          <button className="btn bg-white opacity-90 hover:bg-white hover:opacity-100 rounded-full w-full font-bold h-16 text-base">
            Continue with email
          </button>
          <p className="text-center my-5">
            Already have an account?{" "}
            <Link to={"/auth/signIn"} className="underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
