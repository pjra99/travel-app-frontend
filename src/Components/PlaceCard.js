
function PlaceCard(){
    return (
        <div className="h-72 w-56 bg-lightgreen rounded-xl md:mt-0 mt-10">
        <img className="h-56 mb-2 w-full rounded-t-xl" src="snow-view.jpg" />
        <div>
        <div className="flex mt-2">
        <div className="ml-3 text-green font-medium">Snow View</div>
        <div><img src="locate.svg" className="ml-20 h-8 w-8" /></div>
        </div>
        </div>
        <div><img src="4star.svg" className="w-24 ml-2 -mt-1" /></div>
        </div>
    );
}


export default PlaceCard