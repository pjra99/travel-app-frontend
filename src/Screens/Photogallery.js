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
      <div className="flex align-center justify-item-center justify-between md:px-40 mr-30 mt-20 px-200">
        <div>
          <Dropanddrag />
        </div>

        <div className="ml-16">
          <h2 className="font-heading text-2xl font-light mb-8 mt-12">
            Have some pictures of this Place ? Add them!{" "}
          </h2>
          <p className="w-99" text-5xl>
            Add the pictures and let others know about the beauty of this place.
            Just Drag and drop and wait for some time get the aproval.
          </p>
        </div>
      </div>
      {/*photos*/}
      <div className="text-center font-heading text-3xl mt-16">
        <span className="text-green">P</span>hotos
      </div>
      <div className="flex justify-center  mt-8">
        <FirstPhotos />
        <Photos />
        <Photos />
      </div>
      <div className="flex justify-center mt-8">
        <Photos />
        <Photos />
        <Photos />
      </div>
      <div className="flex justify-center mt-8">
        <Photos />
        <Photos />
        <Photos />
      </div>
      <Footer />
    </div>
  );
}

export default PhotoGallery;
