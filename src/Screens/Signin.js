import React from "react";
import Navbar from "../Components/Navbar";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div
      className="container-fluid font-body text-black"
      style={{
        backgroundImage: "url(/background.png)",
        backgroundSize: "100% 100%",
      }}
    >
      <Navbar />
      <div className="flex h-screen justify-center">
        <div className="bg-black text-white pr-11 h-100 opacity-80 rounded-xl  mt-36 md:mt-28 mx-3 ">
          <div className="md:w-52 font-body mt-6 ml-10 text-lg">
            Login and explore your favourite destinations.
          </div>
          {/* <GoogleButton style={{width: '12rem', padding: "1rem"}} /> */}
          <div className="flex">
            <button className="border-2 text-black mt-4 ml-10 px-2 py-1 rounded-md bg-white w-42 flex">
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
          <div className="mt-8 ml-10 md:ml-28">
            Don't have an account?
            <Link to="/signup">
              <span className="text-green"> Sign Up</span>
            </Link>
          </div>

          <div className=" ml-10 mt-6 mb-4">Email Address</div>
          <div className=" ml-10">
            <input className="bg-transparent border-b-2 w-72 md:w-96" />
          </div>
          <div className="ml-10 mt-4 mb-4">Password</div>
          <div className="ml-10">
            <input className="bg-transparent border-b-2 w-72 md:w-96" />
          </div>
          <div className="mt-4 ml-10 text-green ">Forgot Password?</div>
          <Link to="/home">
            <button className="rounded-md text-center ml-10 md:w-96 p-2 border-darkgrey mt-4 bg-green">
              {" "}
              Log In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
