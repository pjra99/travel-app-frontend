import SpecificPlaceHeader from "../Components/SpecificPlaceHeader";
import HotelDetailsCard from "../Components/HotelDetailsCard";
import Footer from "../Components/Footer";

function HotelsPage() {
  return (
    <div>
      <SpecificPlaceHeader />
      <div className="text-center font-heading text-3xl mt-16">
        <span className="text-green">H</span>otels
      </div>
      <HotelDetailsCard />
      <HotelDetailsCard />
      <HotelDetailsCard />
      <HotelDetailsCard />
      <Footer />
    </div>
  );
}

export default HotelsPage;
