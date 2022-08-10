import React from "react";
import Navbar from "../Components/Navbar";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div
      className="container-fluid h-screen text-black font-body"
      style={{
        backgroundImage: "url(/background.png)",
        backgroundSize: "100% 100%",
      }}
    >
      <Navbar />
      <div className="flex justify-center flex-wrap">
        <div></div>
        <div className="bg-black text-white md:w-2/4 lg:w-2/5 xl:w-1/3 px-10 opacity-80 rounded-xl mt-36 md:mt-28 pb-7">
          <div className="w-52 font-body mt-6 text-lg">Get Started.</div>
          <div className="">
            Already have an account?
            <Link to="/signin">
              <span className="text-green"> Log in.</span>
            </Link>
          </div>
          {/* <GoogleButton style={{width: '12rem', padding: "1rem"}} /> */}
          <div className="flex">
            <button className="border-2 text-black mt-4  px-2 py-1 rounded-md bg-white w-42 flex">
              <FcGoogle size={30} className="-ml-1" />
              <span className="ml-1 mt-1 pt-0.5 text-xs">
                Continue with Google
              </span>
            </button>
            <button className=" mt-4 ml-2 p-2 rounded-md px-2 py-1 bg-blue flex h-14 md:h-10">
              <ImFacebook2 size={30} className=" -ml-0.5" />
              <span className="ml-2 mt-2 text-xs">Continue with Facebook</span>
            </button>
          </div>
          <div className="  mt-6 mb-4">Email Address</div>
          <div className=" ">
            <input className="bg-transparent border-b-2 w-full" />
          </div>
          <div className=" mt-4 mb-4">Password</div>
          <div className=" ">
            <input className="bg-transparent border-b-2 w-full" />
          </div>
          <div className=" mt-4 mb-4">Confirm Password</div>
          <div className=" ">
            <input className="bg-transparent border-b-2 w-full" />
          </div>
          <div className="mt-3 ">
            <input type="checkbox" /> I agree to{" "}
            <span className="text-green">terms</span> &{" "}
            <span className="text-green">conditions.</span>
          </div>
          <Link to="/home">
            <button className="rounded-md text-center py-2  border-darkgrey mt-6 bg-green w-full">
              Sign Up
            </button>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Signup;
