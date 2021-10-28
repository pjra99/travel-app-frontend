import Navbar from "../Components/Navbar";
// import {AiOutlineSearch} from "react-icons/ai"
import SpecificPlaceHeader from "../Components/SpecificPlaceHeader";
import HotelCard from "../Components/HotelCard";

function SpecificDestination(){
return(
   <div>
     <SpecificPlaceHeader />
     <div className="font-heading text-3xl text-center mt-16"><span className="text-green">H</span>otels</div>
     <div className="flex mt-10">
       <div className="flex-1 ml-48">
         <div className=""><HotelCard /></div>
         <div className="mt-10"><HotelCard /></div>
       </div>
       <div className="flex-1 -ml-32">
       <div className="mt-10"><HotelCard /></div>
       <div className="mt-10"><HotelCard /></div>
       </div>
       <div className="flex-1 -ml-32 pr-16 ">
<div className="text-3xl font-heading">      <span className="text-green">D</span>iscover the Best Hotel 
Deals in Nanitaal</div>
<div className="mt-16">Get instant confirmation, last minute hotel deals. Find Hotels For Tonight Near to You. No cancellation fees. Exclusive deals. From Fasntastic Hotels To Modern Apartments. Easy and Secure payment. Best Price Guarantee. Free cancellation. Easy, Fast and Secure.</div>
       </div>

     </div>
   </div>
)
}

export default SpecificDestination