import SpecificPlaceHeader from "../Components/SpecificPlaceHeader"
import Placebyactivity from "../Components/Placebyactivity"
import Footer from "../Components/Footer"

function PlacesByActivity(){
    return (
        <div className="container-fluid font-body">
            <SpecificPlaceHeader />
            <div className="text-center text-3xl font-heading mt-16 mb-10"><span className="text-green">W</span>hat's your Mood?</div>
            <div className="flex justify-between mx-32 px-3"> 
         <div><Placebyactivity text="Camping" img="/camping.jpg" /></div>
         <div><Placebyactivity text="Trekking" img="/trekking.png" /></div>
         <div><Placebyactivity text="Mountain Climbing" img="/mountainclimbing.jpg" /></div>
         <div><Placebyactivity text="Paragliding" img="/paragliding.jpg" /></div>
       </div>
       <div className="flex justify-between mx-32 px-3 mt-10"> 
         <div><Placebyactivity text="Camping" img="/camping.jpg" /></div>
         <div><Placebyactivity text="Trekking" img="/trekking.png" /></div>
         <div><Placebyactivity text="Mountain Climbing" img="/mountainclimbing.jpg" /></div>
         <div><Placebyactivity text="Paragliding" img="/paragliding.jpg" /></div>
       </div>
       <Footer />
        </div>
    )
}

export default PlacesByActivity