import Footer from "../Components/Footer";
import RestaurantCard from "../Components/RestaurantCard";
import SpecificPlaceHeader from "../Components/SpecificPlaceHeader";

function AllRestaurants() {
  return (
    <div>
      <SpecificPlaceHeader />
      <div className="text-center text-3xl font-heading mt-16">
        <span className="text-green">R</span>estaurants
      </div>
      <div className="flex flex-wrap justify-center md:justify-between md:px-36 mt-10">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
      <div className="flex flex-wrap justify-center md:justify-between md:px-36 mt-10">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
      <Footer />
    </div>
  );
}

export default AllRestaurants;
