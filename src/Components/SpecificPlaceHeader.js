import React from "react"
import Navbar from "./Navbar"
import {AiOutlineSearch} from "react-icons/ai"
import {Link} from "react-router-dom";

function SpecificPlaceHeader(){
    return (
        <div className="container-fluid text-black">
            <div className="bg-lightgreen h-100 w-s">
            <Navbar />
           <div className="grid grid-cols-2 px-20 ">
           <div className="w-100 mt-24">
               <p className="font-heading text-darkgrey pb-6 ml-16">Temp: 23° C, Humidity 87% </p>
               <p className="pt-6 font-heading ml-16"><span className="text-4xl">Nanitaal,</span> Uttrakhand</p>
               <img src="4star.svg" className="pb-6 ml-14 pl-1 h-12" />
               <p className="font-body ml-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></div>
           <div className="mt-24"><img src="valley.jfif" className="h-100 w-100 rounded-md" /></div>
           </div>
            </div>
               <button className="bg-green text-white text-center py-2 px-8 rounded-md ml-4 mt-4 mr-5 ml-36 mt-14">Transport</button>
            <button className="bg-black text-white text-center py-2 px-8 rounded-md ml-2 mt-4 mt-6">Places to visit</button>
          <div className="flex mt-20">
          <div className="h-32 w-96 ml-4 bg-lightgreen rounded-lg ml-36">
              <div className="flex flex-row">
              <div className="text-green mt-5 ml-5 font-light text-2xl"> Search for the Best Hotels</div> 
            <div><button className="bg-green rounded-md  mt-4 ml-9 w-12 h-10"><AiOutlineSearch className="text-white ml-2" size={34}/></button></div> 
              </div>
              <div className="flex">
                  <input type="date" placeholder="Check in" className="ml-5 mr-3 mt-4 py-2 rounded-md"  />
                  <input type="date" placeholder="Check out" className="mt-4  rounded-md" />
              </div>
           </div>
           <div className="text-2xl font-light w-100 font-heading ml-40 pl-3 text-black">
         Enter the check in and check out 
        dates and know about the availibility 
        of best Hotel Deals.
           </div>
          </div>
            </div>
    )
}

export default SpecificPlaceHeader