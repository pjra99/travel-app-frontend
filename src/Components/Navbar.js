import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useContext } from "react";
import Context from "../context/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  const [display, setDisplay] = useState("flex");
  const status = useContext(Context);
  const history = useHistory();

  const notify = (msg) => {
    toast.info(msg);
  };
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }
  //eslint-disable-next-line
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    if (width < 1024) {
      setDisplay("none");
    } else {
      setDisplay("flex");
    }
  }, [width]);

  return (
    <div className="flex flex-wrap absolute lg:mt-10 mt-0 w-full font-body bg-white justify-between z-10">
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        info
      />

      <div className="text-green font-heading md:ml-32 ml-3 lg:block hidden">
        Travel Website
      </div>
      <div
        className="lg:ml-36 ml-3"
        onMouseDown={() => {
          display === "block" ? setDisplay("none") : setDisplay("block");
        }}
      >
        <img
          src="hamburger_nav.svg"
          className="h-8 w-8 lg:hidden"
          alt="collapsed-menu"
        />
      </div>

      <div
        className="justify-between md:mr-16 md:flex flex-wrap hidden md:mt-0 mt-2 md:mr-0 mr-72"
        style={{
          display: display,
        }}
      >
        <Link to="/home">
          <div
            id="home"
            className="mx-1 md:mx-8 md:mt-0 mt-2 md:border-0 border-b border-grey hover:bg-black hover:text-white px-2"
          >
            Home
          </div>
        </Link>

        <div
          id="blogs"
          className="mx-1 md:mx-8 md:mt-0 mt-2 md:border-0 border-b border-grey hover:bg-black hover:text-white px-2"
          onClick={() => {
            status.isLoggedIn
              ? history.push("/blogs")
              : notify("Please login to read all blogs!");
          }}
        >
          Blogs
        </div>

        <div
          id="upload"
          className="mx-1 md:mx-8 md:mt-0 mt-2 md:border-0 border-b border-grey hover:bg-black hover:text-white px-2"
          onClick={() => {
            status.isLoggedIn
              ? history.push("/photogallery")
              : notify("Please login to upload images.");
          }}
        >
          Upload{" "}
        </div>
        <Link to="/signin">
          {" "}
          <div
            id="login"
            className="mx-1 md:mr-16 md:mt-0 mt-2 md:border-0 border-b border-grey hover:bg-black hover:text-white px-2"
            onClick={status.isLoggedIn ? status.changeLogStatus : ""}
          >
            {status.isLoggedIn ? <span>Log Out</span> : <span>Log In</span>}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
