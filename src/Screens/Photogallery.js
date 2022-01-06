import SpecificPlaceHeader from "../Components/SpecificPlaceHeader";
import Dropanddrag from "../Components/Dropanddrag";
import FirstPhotos from "../Components/FirstPhotos";

import Photos from "../Components/Photos";

import Footer from "../Components/Footer";

function PhotoGallery() {
  return (
    <div>
      <SpecificPlaceHeader />
      {/*dropanddrag*/}
      <div className="flex flex-wrap md:justify-between justify-center md:px-32 mt-20 px-10">
        <div>
          <Dropanddrag />
        </div>

        <div className=" md:w-auto ">
          <h2 className="font-heading text-2xl md:w-auto font-light mb-8 mt-12">
            Have some pictures of this Place ? Add them!{" "}
          </h2>
          <p className="md:w-99">
            Add the pictures and let others know about the beauty of this place.
            Just Drag and drop and wait for some time get the aproval.
          </p>
        </div>
      </div>
      {/*photos*/}
      <div className="text-center font-heading text-3xl mt-16">
        <span className="text-green">P</span>hotos
      </div>
      <div className="flex flex-wrap md:justify-between justify-center mt-10 md:mx-32 ">
        <FirstPhotos />
        <Photos />
        <Photos />
      </div>
      <div className="flex flex-wrap md:justify-between justify-center md:mt-10 md:mx-32 ">
        <Photos />
        <Photos />
        <Photos />
      </div>
      <div className="flex flex-wrap md:justify-between justify-center md:mt-10 md:mx-32 ">
        <Photos />
        <Photos />
        <Photos />
      </div>
      <Footer />
    </div>
  );
}

export default PhotoGallery;
