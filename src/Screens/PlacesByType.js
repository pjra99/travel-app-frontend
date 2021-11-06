import Footer from "../Components/Footer"
import HomePageHeader from "../Components/HomePageHeader"
import Placebytype from "../Components/Placebytype"

function PlacesByType(props){
    return(
        <div className="container-fluid font-body text-black">
       <HomePageHeader />
       <div className="my-6 font-heading text-3xl text-center mt-16 mb-10"><span className="text-green">T</span>ypes Of Places</div>
       <div className="flex flex-wrap justify-between px-32 mx-1">
        <Placebytype img="/snow-region.jpg" name="Snow Region" />
        <Placebytype img="hillstation.jpeg" name="Hill station" />
        <Placebytype img="valley.jfif" name="Valley" />
        <Placebytype img="beach.jpg" name="Beach" />
       </div>
       <div className="flex flex-wrap justify-between px-32 mx-1 mt-10">
        <Placebytype img="/snow-region.jpg" name="Snow Region" />
        <Placebytype img="hillstation.jpeg" name="Hill station" />
        <Placebytype img="valley.jfif" name="Valley" />
        <Placebytype img="beach.jpg" name="Beach" />
       </div>
       <Footer />
        </div>
    )
}
export default PlacesByType