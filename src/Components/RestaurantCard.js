function RestaurantCard(){
    return (
        <div className="w-60 h-76 bg-lightgreen pt-1"><img src="somerestaurant.jpg" className="w-56 ml-2 mt-1 rounded-lg" />
        <div className="flex mt-3 ml-3">
            <div className="1">
            <div className="text-green font-semibold">Xyz  Restaurant </div>
            <div className="text-darkgrey">Chinese, Italian</div>
            </div>
            <div className="2 flex ml-5">4.2 <img src="star.svg" className="w-6 h-6 ml-1" /></div>
            <div className="3 ml-2"><img src="locate.svg" className="h-8 w-8" /></div>
        </div>
        </div>
    )
}
export default RestaurantCard