function ReviewBox() {
  return (
    <div className="border border-lightgrey md:h-44 h-auto md:pt-2 py-2 md:px-0 px-2 md:mt-0 mt-3 w-5/6 md:mx-10 md:w-1/3 flex rounded-md">
      <div>
        <img src="user-male.svg" className="md:h-20 h-14 mt-3 ml-3" />
        <div className="flex pl-2 mt-10">
          <img
            src="view more.svg"
            className="transform rotate-90 w-5 h-2 mt-2"
            alt="Up vote"
          />
          <p>237</p>
          <img
            src="view more.svg"
            className="transform -rotate-90 w-5 h-2 mt-2"
            alt="Up vote"
          />{" "}
          <p>11</p>
        </div>
      </div>
      <div className="md:ml-5 ml-10">
        <p className="text-xl">Nice Place</p>
        <img src="4star.svg" className="h-6 -ml-1 mb-2" />
        <p className="text-sm md:w-88  w-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.{" "}
        </p>
      </div>
    </div>
  );
}

export default ReviewBox;
