import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (

    <div className="flex absolute mt-10 w-full font-body bg-white justify-between">
      <div className="text-green font-heading md:ml-36 ml-3">
        Travel Website
      </div>

      <div className="flex justify-between md:mr-32">

        <Link to="/home">
          <div id="home" className="mx-1 md:mx-10">
            Home
          </div>
        </Link>
        <Link to="/blogs">
          <div id="blogs" className="mx-1 md:mx-10">
            Blogs
          </div>
        </Link>

        <Link to="/photogallery">

          <div id="upload" className="mx-1 md:mx-10">
            Upload{" "}
          </div>
        </Link>
        <Link to="/signin">
          {" "}
          <div id="login" className="mx-1 md:mx-10">
            Log In
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
