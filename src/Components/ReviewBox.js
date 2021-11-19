function ReviewBox() {
  return (
    <div className="border border-lightgrey h-44 mx-2 w-1/3 flex flex-wrap rounded-md pt-2">
      <div>
        <img src="user-male.svg" className="h-20 mt-3 ml-3" />
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
      <div className="ml-5">
        <p className="text-xl">Nice Place</p>
        <img src="4star.svg" className="h-6 -ml-1 mb-2" />
        <p className="text-sm w-88">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.{" "}
        </p>
      </div>
    </div>
  );
}

export default ReviewBox;
