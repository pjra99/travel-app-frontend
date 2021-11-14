function SpecialPackage(props){
    return (
        <div className="bg-lightgreen w-56 h-60 mt-5 md:mt-0">
        <img src={props.img} className="w-56 h-44" />
        <div className="flex justify-between mt-1 pt-0.5">
      <div className=" text-green ml-3">{props.text}</div>
      <div className="flex mr-3 font-bold">{props.rating}<img src="star.svg" className="w-5" />   </div>
        </div>
        <div className="flex">
            <div className="flex ml-3 text-sm mt-1 pt-0.5">
                <div className="font-bold">{props.price}</div>
                <div className="ml-2 text-darkgrey">@{props.dealer}</div>
            </div>
            <div className="">
            <img src="nextcircle.svg" className="mt-1 ml-2" />
            </div>
        </div>
        </div>
    )
}

export default SpecialPackage