import React from "react";

function Blogcard() {
  return (
    <div className="pb-6 mb-4 w-full sm:w-80 md:w-72 lg:w-80 xl:w-96 2xl:w-88 bg-lightgreen rounded-md mt-3 sm:mt-0">
      <div className="flex">
        <img
          src="/user-male.svg"
          className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 ml-4 mt-4"
          alt="User img"
        />
        <div className="text-base sm:text-lg lg:text-xl ml-4 mt-6 font-semibold">
          Nanitaal was great
          <div className="text-xs sm:text-sm text-darkgrey">@anonymous</div>
        </div>
      </div>
      <div className="px-4 pt-4 pb-2 text-justify text-xs sm:text-sm lg:text-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris...
      </div>
      <div className="flex items-center justify-end mt-4 ml-4 space-x-4">
        <div className="flex items-center space-x-1">
          <img
            src="view more.svg"
            className="h-2 rotate-90"
            alt="Up vote"
          />
          <div className="text-xs sm:text-sm text-darkgrey">237</div>
        </div>
        <div className="flex items-center space-x-1 ml-1">
          <img
            src="view more.svg"
            className="h-2 -rotate-90"
            alt="Down vote"
          />
          <div className="text-xs sm:text-sm text-darkgrey">11</div>
        </div>
      </div>
    </div>
  );
}

export default Blogcard;
