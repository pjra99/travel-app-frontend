import React from "react";

function HotelCard() {
  return (
    <div className="bg-lightgreen md:w-60 w-30 rounded-xl h-60 xl:my-0 my-6 xl:mx-0 mx-4 ">
      <div>
        <img
          src="hotelroom.jpeg"
          className="rounded-xl h-44 mb-2"
          alt="hotel-room-img"
        />
      </div>
      <div className="flex">
        <div className="md:ml-4 ml-2 md:text-md text-sm text-green ">
          Some Hotel
        </div>
        <div className="font-bold md:ml-20 ml-12">4.2</div>
        <div>
          <img src="star.svg" className="h-6 w-5 ml-2" alt="star-icon" />
        </div>
      </div>
      <div className="text-darkgrey text-sm md:ml-5 ml-2">1798INR/night</div>
    </div>
  );
}

export default HotelCard;
