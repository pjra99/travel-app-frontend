function HotelDetailsCard({ name, img1, img2, checkin, checkout, overview }) {
  return (
    <div className="w-s border-2 justify-between border-grey mx-2 fi:mx-32 mt-10 rounded-md p-4 flex flex-wrap font-body text-black">
      <div className="pehla-col">
        <img
          src="entrance.jpg"
          alt="Hotel Main Img"
          className="md:w-97 fi:w-88 rounded-t-md"
        />
        <div className="flex justify-between flex-wrap mt-2">
          <img
            src="hotelroom.jpeg"
            className="md:w-32 fi:w-28 h-24 rounded-bl-md"
            alt="hotel's img 1"
          />
          <img
            src="hotelroom.jpeg"
            className="md:w-32 fi:w-28 h-24 md:my-0 my-1 md:mx-2"
            alt="hotel's img 2"
          />
          <img
            src="hotelroom.jpeg"
            className="md:w-32 fi:w-28 h-24 rounded-br-md"
            alt="hotel's img 3"
          />
        </div>
      </div>
      <div className="dusra-col md:w-80 md:ml-10">
        <div className="text-4xl font-heading text-green md:mt-0 mt-3">
          Lakeside Inn
        </div>
        <img src="4star.svg" className="w-36 -ml-1 " alt="rating" />
        <div className="text-darkgrey mt-4">Check in 2 PM | Check out 2 PM</div>
        <div className="flex mt-5 ">
          <img src="tick.svg" alt="Check" />{" "}
          <p className="text-darkgrey ml-2 text-sm">
            Hand Sanitizer / Temperature Screening
          </p>
        </div>
        <div className="flex flex-wrap mt-1">
          <img src="tick.svg" alt="Check" />{" "}
          <p className="text-darkgrey ml-2 text-sm">
            Hand Sanitizer / Temperature Screening
          </p>
        </div>
        <div className="flex flex-wrap mt-1">
          <img src="tick.svg" alt="Check" />{" "}
          <p className="text-darkgrey ml-2 text-sm">
            Hand Sanitizer / Temperature Screening
          </p>
        </div>
        <div className="flex flex-wrap mt-1">
          <img src="tick.svg" alt="Check" />{" "}
          <p className="text-darkgrey ml-2 text-sm">
            Hand Sanitizer / Temperature Screening
          </p>
        </div>
        <div className="mt-5">Overview</div>
        <p className="mt-2 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="teesra-col md:pl-10 md:my-0 my-1">
        <div className="md:w-68 h-40 bg-lightgreen pt-2 rounded-sm pl-4">
          <div className="flex flex-wrap">
            <div className="text-xl font-heading">Best Deal</div>
            <div className="text-sm text-darkgrey mt-1 pt-0.5 ml-10">
              Goibibo.com
            </div>{" "}
          </div>
          <div className="text-green">₹2101/night</div>
          <div className="flex flex-wrap mt-14">
            <img src="tick.svg" alt="Check" />
            <div className="text-sm text-darkgrey ml-1 mt-1   ">
              Free Cancellation
            </div>
            <button className="bg-green text-white rounded-sm ml-8 px-3 py-0.5">
              View
            </button>
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-32 h-20 border-2 border-grey pl-3 rounded-md">
            <div className="text-darkgrey mt-2 text-sm">makemytrip</div>
            <div className="text-green mt-4">₹2101/night</div>
          </div>
          <div className="w-32 h-20 border-2 border-grey pl-3 rounded-md ml-4 pr-2">
            <div className="text-darkgrey mt-2 text-sm flex justify-between">
              <div>trivago</div>
              <button>
                <img src="down.svg" alt="Check" />
              </button>
            </div>
            <div className="text-green mt-4">₹2101/night</div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div>
            <div>
              <button className="bg-green text-white w-36 py-2 rounded-md  mt-10">
                View more
              </button>
            </div>
            <div>
              <button className="bg-black text-white  w-36 py-2 px-3 rounded-md mt-3 flex justify-center">
                <div> Reviews</div>{" "}
                <img src="downwhite.svg" className="mt-2 ml-2" alt="Check" />
              </button>
            </div>
          </div>
          <div className="mt-6 ml-4">
            <img src="mapicon.svg" className="h-28" alt="Check" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDetailsCard;
