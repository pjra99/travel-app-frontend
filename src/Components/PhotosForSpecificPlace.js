import { useState } from "react";

function PhotosForSpecificPlace() {
  var ar = [
    {
      src: "nanital-1.jpeg",
      name: "nanitaal-lakee",
    },
    {
      src: "nanital-2.jpg",
      name: "nanital-2",
    },
    {
      src: "snow-view.jpg",
      name: "Snow Vieww",
    },
    {
      src: "nanital-1.jpeg",
      name: "nanitaal-lake",
    },
    {
      src: "nanital-2.jpg",
      name: "nanital-23",
    },
    {
      src: "snow-view.jpg",
      name: "Snow View",
    },
  ];

  const [mainImg, setMainImg] = useState(0);

  const photos = ar.map((item, index) => (
    <div className="md:w-2/3 md:h-32 mb-4 ml-4 md:ml-10 " key={item.name}>
      <img
        src={item.src}
        className="md:h-32 md:w-full w-36"
        onClick={() => {
          setMainImg(index);
        }}
        key={item.name}
        alt="some-img"
      />
    </div>
  ));
  return (
    <div className="lg:px-36 px-8 sm:mx-0 mx-2">
      <div className="font-heading text-3xl text-center mt-16 text-black mb-10 ">
        <span className="text-green">P</span>hoto Gallery
      </div>
      <div className="flex justify-center">
        <div className="w-2/3 md:h-98 h-44">
          <img src={ar[mainImg].src} className="h-full w-full" alt="main-img" />
        </div>
        <div className="w-1/3 md:h-98 h-44 overflow-auto">{photos}</div>
      </div>
    </div>
  );
}

export default PhotosForSpecificPlace;
