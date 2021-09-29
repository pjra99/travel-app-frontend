import React from "react"
import Navbar from "./Navbar";
import GoogleButton from "react-google-button";
import {FcGoogle} from "react-icons/fc"
import {ImFacebook2} from "react-icons/im"

function Signin(){
    return (
  <div className="container-fluid" style={{ backgroundImage: "url(/background.png)",
  backgroundSize: '100% 100%',
}}>
   <Navbar />
   <div className="grid grid-cols-3">
 <div></div>
 <div className="bg-black text-white w-full h-100 opacity-80 rounded-xl mt-14">
   <div className="w-52 font-body mt-6 ml-10 text-lg">Login and explore your favourite destinations.</div>
   {/* <GoogleButton style={{width: '12rem', padding: "1rem"}} /> */}
   <div className="flex">
   <button className="border-2  text-black mt-4   ml-10 mr-2 px-2 py-1 rounded-md bg-white w-42 flex"><FcGoogle size={30} className="-ml-1" /><span className="mt-1 text-sm">Sign Up with Google</span></button>
   <button className=" mt-4 ml-2 p-2 rounded-md px-2 py-1 bg-blue flex h-10"><ImFacebook2 size={30} className="mt-0.5 -ml-0.5" /><span className="ml-1 mt-1.5 text-sm">Sign Up with Facebook</span></button>
   </div>
   <div className="mt-8 ml-28">Don't have an account? Sign Up</div>
   
   <div className=" ml-10 mt-6 mb-4">Email Address</div>
   <div className=" ml-10"><input className="bg-transparent border-b-2 w-96" /></div>
   <div className="ml-10 mt-4 mb-4 ">Password</div>
   <div className=" ml-10"><input className="bg-transparent border-b-2 w-96" /></div>
   <div className="mt-4 ml-10 text-green ">Forgot Password?</div>
   <button className="rounded-md text-center ml-10 w-96 p-2 border-darkgrey mt-4 ml- bg-green">Log In</button>
 </div>
 <div></div>
   </div>
  </div>
    );
}

export default Signin