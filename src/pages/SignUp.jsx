import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaAngleLeft } from "react-icons/fa6";
import { Bounce, Fade } from "react-awesome-reveal";

const SignUp = () => {
  const [isEmailSignUpPage, setIsEmailSignUpPage] = useState(false);
  return (
    <div>
      <Helmet>
        <title>MindJot | Sign Up</title>
      </Helmet>
      <Toaster></Toaster>

      {/* main */}
      {isEmailSignUpPage && (
        <div className="fixed z-[90] top-5 md:top-10 left-5 md:left-10  overflow-hidden">
          <Bounce delay={1000}>
            <button
              onClick={() => setIsEmailSignUpPage(!isEmailSignUpPage)}
              className="btn btn-circle text-xl bg-white  hover:bg-white font-bold border-2"
            >
              <FaAngleLeft />
            </button>
          </Bounce>
        </div>
      )}

      <main className="px-5">
        <div className="mt-20 xsm:mt-28 lg:mt-40 rounded-md max-w-md mx-auto w-full">
          <h2 className="text-3xl my-10 font-bold">Sign up to MindJot</h2>

          {isEmailSignUpPage ? (
            <form className="overflow-hidden">
              <Fade direction="down">
                <div className="w-full mb-4">
                  <label className="label">
                    <span className="text-lg font-bold">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="your name"
                    className="border w-full rounded-xl px-5 h-16 hover:shadow-md hover:shadow-light-rose focus:shadow-md focus:shadow-light-rose duration-700 outline-none text-lg"
                  />
                </div>
                <div className="w-full mb-4">
                  <label className="label">
                    <span className="text-lg font-bold">Your Photo url</span>
                  </label>
                  <input
                    type="url"
                    placeholder="your photo url"
                    className="border w-full rounded-xl px-5 h-16 hover:shadow-md hover:shadow-light-rose focus:shadow-md focus:shadow-light-rose duration-700 outline-none text-lg"
                  />
                </div>
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
                  </label>
                  <input
                    type="password"
                    placeholder="6+ characters"
                    className="border w-full rounded-xl px-5 h-16 hover:shadow-md hover:shadow-light-rose focus:shadow-md focus:shadow-light-rose duration-700 outline-none text-lg"
                  />
                </div>
                <button className="btn bg-light-black text-white text-base opacity-100 hover:bg-light-black hover:opacity-90 rounded-full w-full font-bold h-16 mt-6">
                  Sign in
                </button>
              </Fade>
            </form>
          ) : (
            <>
              <button className="btn bg-light-black text-white text-base opacity-100 hover:bg-light-black hover:opacity-90 rounded-full w-full font-bold h-16 mt-6">
                <FcGoogle className="text-2xl" />
                Sign up with Google
              </button>
              <div className="divider my-8 text-slate-400">or</div>
              <button
                onClick={() => setIsEmailSignUpPage(!isEmailSignUpPage)}
                className="btn bg-white opacity-90 hover:bg-white hover:opacity-100 rounded-full w-full font-bold h-16 text-base"
              >
                Continue with email
              </button>
            </>
          )}

          <p className="text-center my-5">
            Already have an account?{" "}
            <Link to={"/auth/signIn"} className="underline">
              Sign In
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
