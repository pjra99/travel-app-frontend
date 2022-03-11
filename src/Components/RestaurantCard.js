function RestaurantCard() {
  return (
    <div className="fi:w-60 w-48 fi:h-80 h-72 bg-lightgreen pt-1 md:mt-0 mt-5">
      <img
        src="somerestaurant.jpg"
        className="fi:w-56 w-44 ml-2 mt-1 rounded-lg"
        alt="somerestaurant-img"
      />
      <div className="flex mt-4 ml-3 mr-2">
        <div className="1">
          <div className="text-green font-semibold text-sm">
            Xyz Restaurant{" "}
          </div>
          <div className="text-darkgrey text-sm">Chinese, Italian</div>
        </div>
        <div className="2 flex ml-5 ">
          4.2{" "}
          <img
            src="star.svg"
            className="fl:w-6 fl:h-6 w-5 h-5 mr-2 md:mx-1"
            alt="star-icon"
          />
        </div>
        <div className="3 ml-2">
          <img
            src="locate.svg"
            className="fl:h-8 fl:w-8 h-6 w-6  fl:mr-0 mr-3"
            alt="locate-icon"
          />
        </div>
      </div>
    </div>
  );
}
export default RestaurantCard;
