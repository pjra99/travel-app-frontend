import React from "react";

function Blogcard() {
  return (
    <div className="pb-8 mb-3 pb-8 mb-3 fi:w-88 w-76 mx-2 md:mx-5 bg-lightgreen rounded-md mb:mt-0 mt-3">
      <div className="flex">
        <img
          src="/user-male.svg"
          className="fi:h-20 fi:w-20 h-16 w-16 ml-5 mt-5"
          alt="User img"
        />

        <div className="fi:text-xl text-lg ml-5 font-semibold mt-10">
          Nanitaal was great
          <div className="text-sm text-darkgrey">@anonymous</div>
        </div>
      </div>
      <div className="px-5 pt-4 pb-2 fi:text-md text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris...
      </div>
      <div className="flex float-right mr-5">
        <img
          src="view more.svg"
          className="transform rotate-90 w-5 h-2 mt-1"
          alt="Up vote"
        />

        <div className="text-sm text-darkgrey">237</div>
        <img
          src="view more.svg"
          className="transform ml-5 -rotate-90 w-5 h-2 mt-1"
          alt="down vote"
        />
        <div className="text-sm text-darkgrey">11</div>
      </div>
    </div>
  );
}

export default Blogcard;
