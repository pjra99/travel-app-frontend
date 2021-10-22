import Navbar from "./Navbar"
function SpecificDestination(){
return(
    <div className="container-fluid">
    <div className="header bg-lightgreen h-100 w-s">
    <Navbar />
   <div className="grid grid-cols-2 px-20 ">
   <div className="w-100 mt-24">
       <p className="font-heading text-darkgrey pb-6">Temp: 23° C, Humidity 87% </p>
       <p className="pt-6 font-heading"><span className="text-4xl">Nanitaal,</span> Uttrakhand</p>
       <img src="4star.svg" className="pb-6 -ml-1 h-12" />
       <p className="font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></div>
   <div className="mt-24 ml-16"><img src="valley.jfif" className="h-100 w-98 rounded-md" /></div>
   </div>
    </div>
   <div className="ml-16 mt-6">
   <button className="bg-green text-white text-center py-2 px-8 rounded-md ml-4 mt-4 mr-5">Places near me</button>
    <button className="bg-black text-white text-center py-2 px-8 rounded-md ml-2 mt-4">Trending Places</button>
   </div>
    </div>
)
}

export default SpecificDestination