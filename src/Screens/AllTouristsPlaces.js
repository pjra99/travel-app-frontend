import SpecificPlaceHeader from "../Components/SpecificPlaceHeader";
import PlaceCard from "../Components/PlaceCard";
import Footer from "../Components/Footer";

function AllTouristsPlaces() {
  return (
    <div className="container-fluid font-body">
      <SpecificPlaceHeader />
      <div className="text-center font-heading text-3xl mt-16">
        <span className="text-green">T</span>ourist places
      </div>
      <div className="flex flex-wrap justify-between md:mx-32 md:px-3 px-20 mx-3 mt-10">
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
      </div>
      <div className="flex flex-wrap justify-between md:mx-32 md:px-3 px-20 mx-3 mt-10">
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
      </div>
      <div className="flex flex-wrap justify-between md:mx-32 md:px-3 px-20 mx-3 mt-10">
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
      </div>
      <Footer />
    </div>
  );
}

export default AllTouristsPlaces;
