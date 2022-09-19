import React from "react";
import Navbar from "./Navbar";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

function SpecificPlaceHeader() {
  return (
    <div className="container-fluid text-black">
      <div className="bg-lightgreen h-100 w-s">
        <Navbar />
        <div className="flex flex-wrap justify-between md:mx-32 ">
          <div className="lg:w-100 mt-24">
            <p className="font-heading text-darkgrey pb-6 md:ml-0 ml-5">
              Temp: 23° C, Humidity 87%{" "}
            </p>
            <p className="pt-6 font-heading">
              <span className="text-4xl md:ml-0 ml-5">Nanitaal,</span>{" "}
              Uttrakhand
            </p>
            <img
              src="4star.svg"
              className="pb-6 pl-1 h-12 md:ml-0 ml-4"
              alt="rating-icon"
            />
            <p className="font-body md:px-0 px-5 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>
          </div>
          <div className="lg:mt-24 mt-14 ">
            <img
              src="valley.jfif"
              className=" xl:w-88 xl:h-88 lg:h-68 sm:w-60 w-64 rounded-md md:ml-0 ml-5"
              alt="main-img"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:pt-10 lg:pl-32 xl:pr-0 pr-32 lg:justify-start sm:justify-end justify-start sm:mt-0 mt-88">
        {/* 2 buttons wala flex */}
        <div className="lg:w-full w-72 md:static relative sm:top-10 sm:left-16">
          <button className="bg-green text-white text-center lg:ml-0 md:mt-0 py-2 ml-10 rounded-md mt-4 w-44">
            Transport
          </button>
          <Link to="/alltouristsplaces">
            {" "}
            <button className="bg-black text-white text-center py-2 rounded-md ml-10 mt-4 w-44">
              Places to visit
            </button>{" "}
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap lg:justify-between justify-center md:ml-0 ml-5 md:px-32 sm:mt-36 lg:mt-20 ">
        {/* Hara Box */}
        <div className="md:h-32 h-44 w-80 md:w-98 bg-lightgreen rounded-lg lg:mt-0 mt-10 mr-10 ">
          {/* Choose dates wala box */}
          <div className="flex flex-row">
            <div className="text-green mt-5 md:ml-5 ml-2 font-light md:text-2xl">
              {" "}
              Search for the Best Hotels
            </div>
            <div>
              <button className="bg-green rounded-md  mt-4 ml-6 w-12 h-10">
                <AiOutlineSearch className="text-white ml-2" size={34} />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap">
            <input
              type="date"
              placeholder="Check in"
              className="md:ml-5 ml-2 mr-3 mt-4 py-2 rounded-md"
            />
            <input
              type="date"
              placeholder="Check out"
              className="mt-4 md:ml-0 ml-2  rounded-md"
            />
          </div>
        </div>

        <div className="md:text-2xl text-lg text-justify md:w-100 w-80 font-light font-heading xl:mt-0 mt-4 mt-10 text-black">
          Enter the check in and check out dates and know about the availibility
          of best Hotel Deals.
        </div>
      </div>
    </div>
  );
}

export default SpecificPlaceHeader;
