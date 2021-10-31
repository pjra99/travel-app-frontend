import SpecificPlaceHeader from "../Components/SpecificPlaceHeader";
import HotelCard from "../Components/HotelCard";
import PlaceCard from "../Components/PlaceCard";
import SearchForTransport from "../Components/SearchForTransport";
import {Link} from "react-router-dom"
import RestaurantCard from "../Components/RestaurantCard";
import Footer from "../Components/Footer";

function SpecificDestination(){
return(
   <div>
     <SpecificPlaceHeader />
     <div className="font-heading text-3xl text-center mt-16 text-black "><span className="text-green">H</span>otels</div>
     <div className="flex mt-10">
       <div className="flex-1 ml-36">
         <div className=""><HotelCard /></div>
         <div className="mt-10"><HotelCard /></div>
       </div>
       <div className="flex-1 -ml-24">
       <div className="mt-10"><HotelCard /></div>
       <div className="mt-10"><HotelCard /></div>
       </div>
       <div className="flex-1">
<div className="text-3xl font-heading text-black ">     
<span className="text-green">D</span>iscover the Best Hotel 
Deals in Nanitaal</div>
<div className="mt-16 text-black ">Get instant confirmation, last minute hotel deals. Find Hotels For Tonight Near to You. No cancellation fees. Exclusive deals. From Fasntastic Hotels To Modern Apartments. Easy and Secure payment. Best Price Guarantee. Free cancellation. Easy, Fast and Secure.</div>
<button className="bg-green text-white text-xl pt-2 font-heading text-center py-2 px-8 rounded-md mt-16">Explore more</button>
       </div>
       <div className="w-32"></div>
     </div>
     <div className="text-center mt-16 font-heading text-3xl text-black "><span className="text-green">T</span>ourist Place</div>
     <div className="flex justify-center mt-10">
       <div><PlaceCard /></div>
       <div><PlaceCard /></div>
       <div><PlaceCard /></div>
       <div><PlaceCard /></div>
     </div>
     <Link to="alltouristsplaces"><button className="mr-10 flex float-right mr-32 mt-6">View All <img src="view more.svg" className="w-6 h-6 ml-3" /></button></Link>
     <div className="text-3xl font-heading text-center mt-20 text-black ">
       <span className="text-green">T</span>ransportation cost
     </div>
     <div className="flex">
       <div className="flex-1"><SearchForTransport /></div>
       <div className="flex-1 font-heading text-2xl mt-10 text-black ">Search for a Place in Nanital to Know 
the actual Transportation cost.</div>
     </div>
     <div className="text-center font-heading text-3xl text-black mt-16"><span className="text-green">R</span>estaurants</div>
     <div className="flex justify-between mt-10 px-32">
       <div><RestaurantCard /></div>
       <div><RestaurantCard /></div>
       <div><RestaurantCard /></div>
       <div><RestaurantCard /></div>
     </div>
     <div className="flex justify-between mt-10 px-32">
       <div><RestaurantCard /></div>
       <div><RestaurantCard /></div>
       <div><RestaurantCard /></div>
       <div><RestaurantCard /></div>
     </div>
     <div className="flex justify-between mt-10 px-32">
       <div><RestaurantCard /></div>
       <div><RestaurantCard /></div>
       <div><RestaurantCard /></div>
       <div><RestaurantCard /></div>
     </div>
     <Footer />
   </div>
)
}

export default SpecificDestination