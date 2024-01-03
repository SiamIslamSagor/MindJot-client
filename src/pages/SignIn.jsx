/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

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
      <div className="px-5">
        <div className=" mt-40 rounded-md max-w-md mx-auto w-full">
          <h2 className="text-3xl my-10 font-bold">Sign in to MindJot</h2>
          <button className="btn bg-white opacity-90 hover:bg-white hover:opacity-100 rounded-full w-full font-bold h-16">
            <FcGoogle className="text-2xl" />
            Sign in with Google
          </button>
          <div className="divider my-5 text-slate-400">
            or sign in with email
          </div>
          <form className="">
            <div className="w-full mb-4">
              <label className="label">
                <span className="text-lg font-bold">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="your email"
                className="border w-full rounded-xl px-5 h-16 hover:shadow-md hover:shadow-light-rose focus:shadow-md focus:shadow-light-rose duration-700 outline-none text-lg"
              />
            </div>
            <div className="w-full mb-4">
              <label className="label">
                <span className="text-lg font-bold">Your Password</span>
                <span className="label-text underline">Forgot Password?</span>
              </label>
              <input
                type="email"
                className="border w-full rounded-xl px-5 h-16 hover:shadow-md hover:shadow-light-rose focus:shadow-md focus:shadow-light-rose duration-700 outline-none text-lg"
              />
            </div>
            <button className="btn bg-light-black text-white opacity-100 hover:bg-light-black hover:opacity-90 rounded-full w-full font-bold h-16 mt-6">
              Sign in
            </button>
          </form>
          <p className="text-center my-5">
            Don't have an account?{" "}
            <Link to={"/auth/signUp"} className="underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
