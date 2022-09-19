import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "/himachal.jpg",
    caption: "Himachal",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat.",
  },
  {
    url: "/goa.jpg",
    caption: "Goa",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat.",
  },
  {
    url: "/kerala.jpg",
    caption: "Kerala",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat.",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container md:px-28 mx-3">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide flex flex-wrap" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                backgroundSize: "100% 100%",
              }}
              className="lg:w-1/2 w-full h-96"
            ></div>
            <div className="px-10 lg:w-1/2 w-full">
              <div className="font-heading text-2xl mb-10 lg:mt-0 mt-10">
                {slideImage.caption}
              </div>
              <div>{slideImage.about}</div>
              <button className="mt-10 bg-black px-8 py-2 font-2xl text-white rounded-md">
                Explore More
              </button>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
