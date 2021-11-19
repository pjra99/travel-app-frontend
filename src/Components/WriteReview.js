function WriteReview() {
  return (
    <div className="border border-lightgrey h-40 pt-4 px-10 w-2/3 flex flex-wrap justify-between rounded-md pt-2">
      <img src="user-male.svg" className="h-24 mt-3" />
      <div className="flex flex-col  w-100 mt-5">
        <input
          type="text"
          placeholder=" Title"
          className="border-b border-grey"
        />
        <input
          type="text"
          placeholder=" (Review)"
          className="border-b mt-8 border-grey"
        />
      </div>
      <div className="mt-8">
        <div>No Rating</div>
        <div>
          <img src="norating.svg" className="-ml-2 mt-4" />
        </div>
      </div>
    </div>
  );
}

export default WriteReview;
