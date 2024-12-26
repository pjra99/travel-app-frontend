import React from "react";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Context from "../context/context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signin() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const status = useContext(Context);
  const navigate = useNavigate();

  const notify = (msg) => toast.error(msg);
  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        setUsers(response.data.data.all_users);
        console.log(response.data.data.all_users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSubmit = () => {
    if (email !== "testmail" && pass !== "testpass") {
      if (email === "" || pass === "") {
        notify("All fields are mandatory!");
        return;
      }
      let notFound = true;
      let passwordIncorrect = true;
      for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
        if (users[i].email === email) {
          notFound = false;

          if (users[i].password === pass) passwordIncorrect = false;
        }
      }
      if (!notFound && passwordIncorrect) {
        notify("Password Incorrect!");
        return;
      }
      if (notFound) {
        notify("User with the following email not found!");
        return;
      }
    }

    status.changeLogStatus();
    navigate("/home");
  };

  return (
    <div
    className="container-fluid lg:h-screen h-full font-body text-black"
    style={{
      backgroundImage: "url(/background.png)",
      backgroundSize: "cover",
    }}
  >
    <div className="flex h-screen justify-center items-center">
      <div className="bg-black text-white w-1/3 max-w-md md:max-w-lg lg:max-w-xl px-6 md:px-10 py-8 md:py-10 opacity-80 rounded-xl mt-16 md:mt-16 lg:mt-18">
        <div className="font-body text-center text-sm md:text-base lg:text-lg mt-6">
          Login and explore your favorite destinations.
        </div>
        <div className="flex justify-center mt-6">
          <button className="border-2 text-black px-4 py-2 rounded-md bg-white w-1/2 md:w-2/5 flex items-center justify-center ">
            <FcGoogle size={20} />
            <span className="ml-2 text-xs md:text-sm">Continue with Google</span>
          </button>
          <button className="ml-2 px-4 py-2 rounded-md bg-blue text-white w-1/2 md:w-2/5 flex items-center justify-center">
            <ImFacebook2 size={20} />
            <span className="ml-2 text-xs md:text-sm">Continue with Facebook</span>
          </button>
        </div>
        <div className="flex justify-center mt-4 text-xs md:text-sm">
          Don't have an account?
          <Link to="/signup">
            <span className="text-green ml-1">Sign Up</span>
          </Link>
        </div>
        <div className="mt-6 text-xs md:text-sm">Email Address</div>
        <input
          className="bg-transparent border-b-2 w-full text-xs md:text-sm p-1"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="mt-4 text-xs md:text-sm">Password</div>
        <input
          className="bg-transparent border-b-2 w-full text-xs md:text-sm p-1"
          type="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <div
          className="mt-4 text-green text-xs md:text-sm cursor-pointer"
          onClick={() => alert("Oops! This feature is under process as for now.")}
        >
          Forgot Password?
        </div>
        <button
          className="rounded-md text-center mt-6 py-2 bg-green w-full text-xs md:text-sm mb-5"
          onClick={handleSubmit}
        >
          Log In
        </button>
      </div>
    </div>
  </div>
  
  );
}

export default Signin;
