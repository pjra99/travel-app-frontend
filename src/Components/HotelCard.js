import React from "react"

function HotelCard(){
    return (
        <div className="bg-lightgreen w-60 rounded-xl h-60  ">
            <div><img src="hotelroom.jpeg" alt="Hotel room img" className="rounded-xl h-44 mb-2" /></div>     
        <div className="flex">
        <div className="ml-3 font-medium text-green pl-2">Some Hotel</div><div className="font-bold ml-16">4.2</div><div><img src="star.svg" className="h-6 w-5 ml-2" />
        </div>
            </div>
            <div className="text-darkgrey text-sm pl-3 ml-2">1798INR/night</div>
        </div>
    );
}

export default HotelCard