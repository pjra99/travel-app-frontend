import React from "react"
import Navbar from "./Navbar"
import {AiOutlineSearch} from "react-icons/ai"
import {Link} from "react-router-dom";

function SpecificPlaceHeader(){
    return (
        <div className="container-fluid text-black">
            <div className="bg-lightgreen h-100 w-s">
            <Navbar />
           <div className="flex flex-wrap justify-between md:mx-36 ">
           <div className="w-100 mt-24">
               <p className="font-heading text-darkgrey pb-6 md:ml-0 ml-5">Temp: 23° C, Humidity 87% </p>
               <p className="pt-6 font-heading"><span className="text-4xl md:ml-0 ml-5">Nanitaal,</span> Uttrakhand</p>
               <img src="4star.svg" className="pb-6 pl-1 h-12 md:ml-0 ml-4" />
               <p className="font-body md:px-0 px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
               </div>
           <div className="mt-24"><img src="valley.jfif" className="md:h-100 md:w-100 h-60 w-60 rounded-md" /></div>
           </div>
            </div>
              <div className="flex flex-wrap mt-10 ml-32">
              <button className="bg-green text-white text-center px-4 py-2 md:px-8 rounded-md md:ml-4 mt-4 mr-5 ml-32 ">Transport</button>
            <button className="bg-black text-white text-center px-2 py-2 md:px-8 rounded-md md:ml-2 mt-4 ml-32">Places to visit</button>
              </div>
          <div className="flex flex-wrap mt-36 md:mt-20">
          {/* Hara Box */}
          <div className="md:h-32 h-44 w-80 md:w-98 ml-4 bg-lightgreen rounded-lg md:ml-36 ml-11">
              <div className="flex flex-row">
              <div className="text-green mt-5 md:ml-5 ml-2 font-light md:text-2xl"> Search for the Best Hotels</div> 
            <div><button className="bg-green rounded-md  mt-4 ml-6 w-12 h-10"><AiOutlineSearch className="text-white ml-2" size={34}/></button></div> 
              </div>
              <div className="flex flex-wrap">
                  <input type="date" placeholder="Check in" className="md:ml-5 ml-2 mr-3 mt-4 py-2 rounded-md"  />
                  <input type="date" placeholder="Check out" className="mt-4 md:ml-0 ml-2  rounded-md" />
              </div>
           </div>

           <div className="text-2xl font-light w-100 font-heading md:mt-0 mt-10 md:ml-40 pl-3 text-black">
         Enter the check in and check out 
        dates and know about the availibility 
        of best Hotel Deals.
           </div>
          </div>
            </div>
    )
}

export default SpecificPlaceHeader