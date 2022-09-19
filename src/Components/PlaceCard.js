function PlaceCard() {
  return (
    <div className="h-72 w-56 bg-lightgreen rounded-xl xl:mx-0 mx-2 xl:mt-0 mt-4 ">
      <img
        className="h-56 mb-2 w-full rounded-t-xl"
        src="snow-view.jpg"
        alt="site-img"
      />
      <div>
        <div className="flex mt-2">
          <div className="ml-3 text-green font-medium">Snow View</div>
          <div>
            <img src="locate.svg" className="ml-20 h-8 w-8" alt="locate-icon" />
          </div>
        </div>
      </div>
      <div>
        <img src="4star.svg" className="w-24 ml-2 -mt-1" alt="rating-icon" />
      </div>
    </div>
  );
}

export default PlaceCard;
