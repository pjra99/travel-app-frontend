function WriteReview() {
  return (
    <div className="border border-lightgrey h-40 pt-4 md:px-10 px-4 md:w-2/3 w-5/6 flex justify-between rounded-md pt-2">
      <img src="user-male.svg" className="md:h-24 h-16 md:mt-3 mt-6" />
      <div className="flex flex-col mt-5">
        <input
          type="text"
          placeholder=" Title"
          className="border-b border-grey md:w-full w-36"
        />
        <input
          type="text"
          placeholder=" (Review)"
          className="border-b mt-8 border-grey md:w-full w-36"
        />
      </div>
      <div className="mt-8">
        <div className="md:text-xl text-sm">No Rating</div>
        <div>
          <img src="norating.svg" className="md:-ml-2 mt-4 md:w-full w-20" />
        </div>
      </div>
    </div>
  );
}

export default WriteReview;
