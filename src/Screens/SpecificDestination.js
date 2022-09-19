import SpecificPlaceHeader from "../Components/SpecificPlaceHeader";
import HotelCard from "../Components/HotelCard";
import PlaceCard from "../Components/PlaceCard";
import SearchForTransport from "../Components/SearchForTransport";
import { Link } from "react-router-dom";
import RestaurantCard from "../Components/RestaurantCard";
import Footer from "../Components/Footer";
import { AiOutlineSearch } from "react-icons/ai";
import Blogcard from "../Components/Blogcard";
import Guidelinecard from "../Components/Guidelinecard";
import Horizontalline from "../Components/Horizontalline";
import SpecialPackage from "../Components/SpecialPackage";
import SimilarPlaceCard from "../Components/SimilarPlaceCard";
import PhotosForSpecificPlace from "../Components/PhotosForSpecificPlace";

function SpecificDestination() {
  return (
    <div className="container-fluid text-black font-body">
      <SpecificPlaceHeader />
      <PhotosForSpecificPlace />
      <div className="font-heading text-3xl text-center mt-16 text-black ">
        <span className="text-green">H</span>otels
      </div>
      <div className="xl:flex  flex-none flex-wrap mt-10 md:ml-0">
        <div className="xl:pl-36 xl:pr-10 md:pl-0 pl-1 xl:w-1/2">
          <div className="flex xl:justify-between justify-center ">
            <div className="">
              <HotelCard />
            </div>
            <div className="xl:mt-10 xl:ml-10">
              <HotelCard />
            </div>
          </div>
          <div className="flex xl:justify-between justify-center ">
            <div className="">
              <HotelCard />
            </div>
            <div className="xl:mt-10 xl:ml-10">
              <HotelCard />
            </div>
          </div>
        </div>
        <div className="flex-1 xl:ml-10 xl:w-80 w-full xl:mx-0 xl:px-0 xl:mt-0 mt-10 md:px-60">
          <div className="text-3xl font-heading text-black md:mt-0 md:ml-0 ml-16 mt-10">
            <span className="text-green">D</span>iscover the Best Hotel Deals in
            Nanitaal
          </div>
          <div className="mt-16 text-black md:ml-0 ml-10 text-justify">
            Get instant confirmation, last minute hotel deals. Find Hotels For
            Tonight Near to You. No cancellation fees. Exclusive deals. From
            Fasntastic Hotels To Modern Apartments. Easy and Secure payment.
            Best Price Guarantee. Free cancellation. Easy, Fast and Secure.
          </div>
          <Link to="hotelspage">
            <button className="bg-green text-white text-xl pt-2 font-heading text-center py-2 md:px-8 px-6 rounded-md mt-16 md:ml-0 ml-24">
              Explore more
            </button>{" "}
          </Link>
        </div>
        <div className="w-32"></div>
      </div>
      <div className="text-center mt-16 font-heading text-3xl text-black">
        <span className="text-green">T</span>ourist Places
      </div>
      <div className="flex flex-wrap justify-between mt-10 md:ml-0 ml-24 md:px-36">
        <Link to="specifictouristplace">
          <PlaceCard />{" "}
        </Link>
        <Link to="specifictouristplace">
          <PlaceCard />{" "}
        </Link>
        <Link to="specifictouristplace">
          <PlaceCard />{" "}
        </Link>
        <Link to="specifictouristplace">
          <PlaceCard />{" "}
        </Link>
      </div>
      <Link to="alltouristsplaces">
        <button className="mr-10 flex float-right mr-36 mt-6">
          View All{" "}
          <img src="view more.svg" className="w-6 h-6 ml-3" alt="some-img" />
        </button>
      </Link>
      <div className="text-3xl font-heading text-center mt-20 text-black">
        <span className="text-green">T</span>ransportation cost
      </div>
      <div className="flex flex-wrap sm:px-36 sm:justify-between justify-center">
        <div className="">
          <SearchForTransport />
        </div>
        <div className="font-heading text-2xl mt-10 text-black pl-10 w-99 ">
          Search for a Place in Nanital to Know the actual Transportation cost.
        </div>
      </div>
      <div className="text-center font-heading text-3xl text-black mt-16 mb-10">
        <span className="text-green">R</span>estaurants
      </div>
      <div className="xl:flex flex-wrap justify-between mt-10 lg:px-32 px-16">
        <div className="flex-1">
          <div className="flex flex-wrap px-3 xl:justify-start justify-center">
            <div>
              <RestaurantCard />
            </div>
            <div className="md:mt-10 md:ml-10 ">
              <RestaurantCard />
            </div>
          </div>
          <div className="flex flex-wrap px-2 xl:justify-start justify-center">
            <div>
              <RestaurantCard />
            </div>
            <div className="md:mt-10 md:ml-10">
              <RestaurantCard />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="text-2xl font-heading font-200 mt-16 pr-12">
            Search for the Restaurants, know about the user ratings and choose
            where to Eat!
          </div>
          <div className="bg-lightgreen md:w-99 w-60 md:h-44 h-60 pt-3 mt-16">
            <div className="flex flex-wrap">
              <div>
                <input
                  type="text"
                  className="py-3 md:w-auto w-full md:px-24 ml-4 rounded-md"
                  placeholder="What do you want to eat?"
                />
              </div>
              <div>
                <button className="bg-green rounded-md md:ml-2 ml-40 md:mt-0 mt-2 w-14 h-12">
                  <AiOutlineSearch className="text-white ml-3" size={36} />
                </button>
              </div>
            </div>
            <div className="text-center mt-2 text-darkgrey mt-3">OR</div>
            <button className="md:px-36 pr-3 bg-black text-white mx-3 mt-5 py-3 rounded-md md:px-0 font-body">
              Restaurants Near Me
            </button>
          </div>
          <Link to="/allrestaurants">
            <button className="bg-green text-white text-xl pt-2 font-heading text-center py-2 px-8 rounded-md md:mt-32 mt-10 md:ml-0 ml-5">
              Explore more
            </button>
          </Link>
        </div>
      </div>
      <div className="text-3xl font-heading text-center mt-16 mb-10">
        <span className="text-green">B</span>logs
      </div>
      <div className="flex justify-between flex-wrap md:px-28 mx-0.5">
        <Link to="/specificblogscreen">
          <Blogcard />{" "}
        </Link>
        <div className="flex-1 ml-5">
          <div className="text-2xl font-heading mb-5 mt-2">
            Blogs from Verified Travellers
          </div>
          <div className="text-xl font-body">
            Blogs are a great source of Information about places, hotels and
            Destinations in general. Read blogs from different people as well as
            Verified Travellers.
          </div>
        </div>
        <div className="flex-1">
          <Link to="blogsforspecificdest">
            {" "}
            <button className="md:px-16 bg-black text-white mt-5 py-3 rounded-md font-heading float-right mr-8 md:px-0 px-2 flex">
              More Blogs{" "}
              <img src="next.svg" className="mt-1 ml-6 h-4" alt="some-img" />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-between flex-wrap md:px-28 mx-0.5 ">
        <Link to="/specificblogscreen">
          <Blogcard />{" "}
        </Link>
        <Link to="/specificblogscreen">
          <Blogcard />{" "}
        </Link>
        <Link to="/specificblogscreen">
          <Blogcard />{" "}
        </Link>
      </div>
      <div className="text-3xl text-center mt-16 mb-10 font-heading">
        <span className="text-green">U</span>pdates
      </div>
      <div className="flex flex-wrap justify-between px-4 md:px-32">
        <Guidelinecard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <Horizontalline />
        <Guidelinecard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <Horizontalline />
        <Guidelinecard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      </div>
      <div className="text-center text-3xl font-heading mt-16 mb-10">
        <span className="text-green">S</span>pecial Packages
      </div>
      <div className="flex flex-wrap xl:justify-between justify-center md:px-32 md:mx-1 px-20 mx-3">
        <SpecialPackage
          img="hotelroom.jpeg"
          text="5 days, 4 nights"
          rating="4.2"
          price="5999/-"
          dealer="Kumar Travels"
        />
        <SpecialPackage
          img="hotelroom.jpeg"
          text="5 days, 4 nights"
          rating="4.2"
          price="5999/-"
          dealer="Kumar Travels"
        />
        <SpecialPackage
          img="hotelroom.jpeg"
          text="5 days, 4 nights"
          rating="4.2"
          price="5999/-"
          dealer="Kumar Travels"
        />
        <SpecialPackage
          img="hotelroom.jpeg"
          text="5 days, 4 nights"
          rating="4.2"
          price="5999/-"
          dealer="Kumar Travels"
        />
      </div>
      <div className="text-3xl text-center font-heading mt-16 mb-10">
        <span className="text-green">S</span>imilar Places
      </div>
      <div className="flex flex-wrap xl:justify-between justify-center md:px-32 md:mx-0 px-20 mx-3">
        <SimilarPlaceCard img="manali.jpg" place="Manali" />
        <SimilarPlaceCard img="manali.jpg" place="Manali" />
        <SimilarPlaceCard img="manali.jpg" place="Manali" />
        <SimilarPlaceCard img="manali.jpg" place="Manali" />
      </div>
      <Footer />
    </div>
  );
}

export default SpecificDestination;
