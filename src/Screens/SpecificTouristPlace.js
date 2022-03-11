import Navbar from "../Components/Navbar";
import ReviewBox from "../Components/ReviewBox";
import WriteReview from "../Components/WriteReview";
import FirstPhotos from "../Components/FirstPhotos";
import Photos from "../Components/Photos";
import Dropanddrag from "../Components/Dropanddrag";
import Footer from "../Components/Footer";

function SpecificTouristPlace({ name }) {
  return (
    <div className="container-fluid font-body">
      <Navbar />
      <div>
        <img src="snow-view.jpg" className="w-full h-96" alt="some-img" />
        <div className="md:h-20 h-52 bg-glassblack -mt-20 absolute w-full flex flex-wrap justify-between md:px-36 px-10 pt-5">
          <div className="font-heading text-2xl  text-white flex flex-wrap">
            Snow view
            <img src="rating.svg" className="h-7 ml-10" alt="some-img" />
          </div>

          <div className="flex flex-wrap justify-between text-white pt-1 mr-5 ">
            Locate on map{" "}
            <img
              src="mapicon.svg"
              className="w-10 ml-4 -mt-10"
              alt="some-img"
            />
          </div>
          <div>
            <button className="bg-green text-white w-44 h-9 rounded-md">
              Rate this place
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:mt-16 mt-44">
        <div className="text-xl font-heading "> Reviews </div>
        <img src="likeicon.svg" className="ml-5" alt="some-img" />
        <div className="mt-1 ml-1">101</div>
        <img src="comment.svg" className="h-5 w-8 mt-2 ml-6" alt="some-img" />
        <div className="mt-1 ml-1">42</div>
      </div>
      <div className="flex flex-wrap justify-center md:mt-10">
        <ReviewBox />
        <ReviewBox />
      </div>
      <div className="flex flex-wrap justify-center md:mt-10">
        <ReviewBox />
        <ReviewBox />
      </div>
      <div className="flex flex-wrap justify-center md:mt-10">
        <ReviewBox />
        <ReviewBox />
      </div>
      <div className="flex flex-wrap justify-center mt-16">
        <WriteReview />
      </div>
      <div className="text-center mt-16 mb-10">
        <span className="text-green">P</span>hotos
      </div>
      <div className="flex flex-wrap justify-between mt-10 md:mx-32 ml-10 px-2">
        <FirstPhotos />
        <Photos />
        <Photos />
      </div>
      <div className="flex flex-wrap md:mx-32 px-2 justify-between mt-16">
        <div>
          {" "}
          <Dropanddrag />
        </div>

        <div>
          <div className="font-heading text-2xl text-center md:text-justify md:mt-0 mt-10">
            Have some pitcures of this Place? Add them!
          </div>
          <div className="w-72 mt-10 md:text-justify text-center md:ml-0 ml-12">
            Add the pitcures and let others know about the beauty of this place.
            Just Drag and drop and wait for some time get the aproval.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SpecificTouristPlace;
