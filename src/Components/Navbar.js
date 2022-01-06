import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {
  const [display, setDisplay] = useState("flex");

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

  const { height, width } = useWindowDimensions();
  useEffect(() => {
    if (width < 761) {
      setDisplay("none");
      console.log(window.innerWidth);
    } else {
      setDisplay("flex");
    }
  }, [width]);

  return (
    <div className="flex flex-wrap absolute md:mt-10 mt-0 w-full font-body bg-white justify-between z-10">
      <div className="text-green font-heading md:ml-32 ml-3 md:block hidden">
        Travel Website
      </div>
      <div
        className="md:ml-36 ml-3"
        onMouseDown={() => {
          display === "block" ? setDisplay("none") : setDisplay("block");
        }}
      >
        <img
          src="hamburger_nav.svg"
          className="h-8 w-8 md:hidden"
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
        <Link to="/blogs">
          <div
            id="blogs"
            className="mx-1 md:mx-8 md:mt-0 mt-2 md:border-0 border-b border-grey hover:bg-black hover:text-white px-2"
          >
            Blogs
          </div>
        </Link>

        <Link to="/photogallery">
          <div
            id="upload"
            className="mx-1 md:mx-8 md:mt-0 mt-2 md:border-0 border-b border-grey hover:bg-black hover:text-white px-2"
          >
            Upload{" "}
          </div>
        </Link>
        <Link to="/signin">
          {" "}
          <div
            id="login"
            className="mx-1 md:mr-16 md:mt-0 mt-2 md:border-0 border-b border-grey hover:bg-black hover:text-white px-2"
          >
            Log In
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
