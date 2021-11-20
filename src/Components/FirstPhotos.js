function FirstPhotos() {
  return (
    <div className="h-60 w-80 md:mb-0 mb-3 relative bg-grey">
      <img className="absolute right-7 top-2 opacity-100" src="Ellipse 3.png" />
      <div className="absolute left text-white text-sm:0.875rem pl-4 mt-1">
        Shot by: @anonymous
      </div>
      <img className="absolute right-8 top-3" src="vector.png" />

      <div className="absolute bottom-0 left-0 text-white text- mx-7 mb-5 ml-58">
        Nanitaal Lake
      </div>
      <div className="absolute bottom-0 right-0 opacity-100 border border-1 border-green rounded-md bg-green text-white text-center 	 text-white text-sm:1.875rem p-1 px-2 mx-7 mb-5 ml-58">
        Explore Location
      </div>
      <img
        className="h-65 mb-2 w-t-xl opacity-70"
        src="images/photo-1610715936287-6c2ad208cdbf.jpeg"
      />
    </div>
  );
}

export default FirstPhotos;
