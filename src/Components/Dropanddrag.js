function Dropanddrag() {
  return (
    <div className="flex items-center justify-center px-24 border border-1 border-gray-200 rounded-lg h-48 w-11/12 mx-10 -md mb:mt-0 mt-3">
      <div className="flex flex-col items-center">
        <img src="/Ellipse 2.png" className="relative h-21 w-21 ml-5 mt-2" />

        <img className=" absolute p-5 pl-22" src="vector2.png" />
        <img className="absolute  pt-11 pl-3" src="vector1.png" />

        <div className=" flex items-center text-gray-100 text-xl ml-5 font-semibold mt-5">
          Drop and drag
        </div>
      </div>
    </div>
  );
}

export default Dropanddrag;
