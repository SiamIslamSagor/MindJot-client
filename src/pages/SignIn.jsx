/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useDataContext from "../hooks/useDataContext";

const SignIn = () => {
  // hook
  const { googleAuth, login } = useDataContext();
  const navigate = useNavigate();
  const location = useLocation();

  // hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // handler
  // form submit handler
  const onSubmit = data => {
    console.log(data);
    // create user by using firebase promise
    login(data?.email, data?.password)
      .then(() => {
        console.log("sign in successfully");
        reset();
        navigate(location.state ? location.state : "/");
      })
      .catch(err => {
        console.log("something is wrong. ERR:", err);
      });
  };

  // google auth handler
  const handleGoogleAuth = () => {
    googleAuth()
      .then(() => {
        console.log("google authorized successfully");
        navigate(location.state ? location.state : "/");
      })
      .catch(err => {
        console.log("something is wrong. ERR:", err);
      });
  };

  return (
    <div>
      <Helmet>
        <title>MindJot | Sign In</title>
      </Helmet>
      <Toaster></Toaster>

      {/* main */}
      <main className="px-5">
        <div className="mt-20 xsm:mt-28 lg:mt-40 rounded-md max-w-md mx-auto w-full">
          <h2 className="text-3xl my-10 font-bold">Sign in to MindJot</h2>
          <button
            onClick={handleGoogleAuth}
            className="btn bg-white opacity-90 hover:bg-white hover:opacity-100 rounded-full w-full font-bold h-16 text-base"
          >
            <FcGoogle className="text-2xl" />
            Sign in with Google
          </button>
          <div className="divider my-5 text-slate-400">
            or sign in with email
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="w-full mb-4">
              <label className="label">
                <span className="text-lg font-bold">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="your email"
                autoFocus
                {...register("email", {
                  required: "Email address is required *",
                })}
                aria-invalid={errors.email ? "true" : "false"}
                className="border w-full rounded-xl px-5 h-16 hover:shadow-md hover:shadow-light-rose focus:shadow-md focus:shadow-light-rose duration-700 outline-none text-lg"
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="w-full mb-4">
              <label className="label">
                <span className="text-lg font-bold">Your Password</span>
                <span className="label-text underline cursor-pointer">
                  Forgot Password?
                </span>
              </label>
              <input
                type="password"
                placeholder="6+ characters"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 32,
                })}
                aria-invalid={errors.password ? "true" : "false"}
                className="border w-full rounded-xl px-5 h-16 hover:shadow-md hover:shadow-light-rose focus:shadow-md focus:shadow-light-rose duration-700 outline-none text-lg"
              />
              {errors.password?.type === "required" && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.password && (
                    <span className="text-sm text-red-600 mt-1">
                      Password is required *
                    </span>
                  )}
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-sm text-red-600 mt-1">
                  Password must be 6 characters *
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-sm text-red-600 mt-1">
                  Password must be 20 characters *
                </p>
              )}
            </div>
            <button className="btn bg-light-black text-white text-base opacity-100 hover:bg-light-black hover:opacity-90 rounded-full w-full font-bold h-16 mt-6">
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
      </main>
    </div>
  );
};

export default SignIn;
