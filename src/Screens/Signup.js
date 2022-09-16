import React, { useState, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Context from "../context/context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const history = useHistory();
  const status = useContext(Context);
  var [mail, setMail] = useState("");
  var [pass, setPass] = useState("");
  var [cpass, setCPass] = useState("");
  var [isChecked, setIsChecked] = useState(false);

  const notify = (msg) => toast.warning(msg);
  const verifyInputs = () => {
    if (mail === "" || pass === "" || cpass === "") {
      notify("All Fields are mandatory!");
      return false;
    }
    if (pass !== cpass) {
      notify("Passwords doesn't match!");
      return false;
    }
    //eslint-disable-next-line
    if (!mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      notify("Invalid Email!");
      return false;
    }
    if (!isChecked) {
      notify("You need to accept the terms and conditions.");
      return false;
    }
    return true;
  };
  const handleSubmit = () => {
    const data = {
      email: mail,
      password: pass,
    };
    if (verifyInputs()) {
      notify("Succesfully registered.");
      status.changeLogStatus();

      axios
        .post(`http://127.0.0.1:8000/users`, {
          data,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      history.push("/home");
    }
  };
  return (
    <div
      className="container-fluid h-screen text-black font-body"
      style={{
        backgroundImage: "url(/background.png)",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex justify-center flex-wrap">
        <div></div>
        <div className="bg-black text-white md:w-2/4 lg:w-2/5 xl:w-1/3 px-10 opacity-80 rounded-xl mt-36 md:mt-28 pb-7 fi:mt-20 ">
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
              <FcGoogle size={30} className="-ml-1 fi:mt-0.5" />
              <span className="ml-1 mt-1 pt-0.5 text-xs fi:-mt-1 fi:pt-2 ">
                Continue with Google
              </span>
            </button>
            <button className=" mt-4 ml-2 p-2 fi:pr-1 fi:h-12 rounded-md px-2 py-1 bg-blue flex h-14 fi:-pt-1 md:h-10">
              <ImFacebook2 size={30} className=" -ml-0.5 fi:mt-1" />
              <span className="ml-2 mt-2 text-xs fi:-mt-1 fi:pt-2">
                Continue with Facebook
              </span>
            </button>
          </div>
          <div className="  mt-6 mb-4">Email Address</div>
          <div className=" ">
            <input
              className="bg-transparent border-b-2 w-full"
              id="email"
              onChange={(e) => {
                setMail(e.target.value);
              }}
              value={mail}
            />
          </div>
          <div className=" mt-4 mb-4">Password</div>
          <div className=" ">
            <input
              className="bg-transparent border-b-2 w-full"
              id="password"
              type="password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
              value={pass}
            />
          </div>
          <div className=" mt-4 mb-4">Confirm Password</div>
          <div className=" ">
            <input
              className="bg-transparent border-b-2 w-full"
              id="confirm-password"
              type="password"
              onChange={(e) => {
                setCPass(e.target.value);
              }}
              value={cpass}
            />
          </div>
          <div className="mt-3 ">
            <input
              type="checkbox"
              onChange={(e) => {
                setIsChecked(e.target.value);
              }}
            />{" "}
            I agree to <span className="text-green">terms</span> &{" "}
            <span className="text-green">conditions.</span>
          </div>
          <button
            className="rounded-md text-center py-2  border-darkgrey mt-6 bg-green w-full"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Signup;
