import SpecificPlaceHeader from "../Components/SpecificPlaceHeader"
import PlaceCard from "../Components/PlaceCard"
import Footer from "../Components/Footer"

function AllTouristsPlaces(){
    return (
        <div>
            <SpecificPlaceHeader />
            <div className="text-center font-heading text-3xl mt-16"><span className="text-green">T</span>ourist places</div>
            <div className="flex justify-center mt-10">
       <div><PlaceCard /></div>
       <div><PlaceCard /></div>
       <div><PlaceCard /></div>
       <div><PlaceCard /></div>
     </div>
     <div className="flex justify-center mt-10">
       <div><PlaceCard /></div>
       <div><PlaceCard /></div>
       <div><PlaceCard /></div>
       <div><PlaceCard /></div>
     </div>
     <div className="flex justify-center mt-10">
       <div><PlaceCard /></div>
       <div><PlaceCard /></div>
       <div><PlaceCard /></div>
       <div><PlaceCard /></div>
     </div>

     <Footer />
        </div>
    )
}

export default AllTouristsPlaces