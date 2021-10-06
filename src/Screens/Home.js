import React from "react"
import Navbar from "./Navbar"
import {AiOutlineSearch} from "react-icons/ai"
import Placebyactivity from "./Placebyactivity";

function Home(){
    return (
      <div className="container-fluid">
        <div className="header h-668px" style={{backgroundImage: "url(/homebg.jpg)", backgroundSize: "cover"}}>
        <Navbar />
        <div className="grid justify-items-center">
          {/* <div></div> */}
          <div className="h-80 rounded-md w-568px bg-glassblack mt-40 z-0 absolute">
            <div className="text-white opacity-100 z-10 text-2xl px-20 font-heading mt-8">Need a vacation? Don't worry we got you!</div>
            <div className="w-96 h-36 bg-lightgreen ml-20 mt-4 rounded-md z-20">
         <div className="flex"><input type="text" className="z-30 w-72 ml-4 mt-4 bg-white h-12 z-30 rounded-md" placeholder="  Find your destination" /> <button className="bg-green rounded-md mt-4 ml-2 w-14 h-12"><AiOutlineSearch className="text-white ml-3" size={36}/></button></div> 
            <button className="bg-green text-white text-center py-2 px-8 rounded-md ml-4 mt-4">Places near me</button>
            <button className="bg-black text-white text-center py-2 px-8 rounded-md ml-2 mt-4">Trending Places</button>
            </div>
          </div>
          {/* <div></div> */}
          </div>
          </div>
        <div className="text-center font-heading py-10 text-3xl">What's your <span className="text-green">M</span>ood?</div>
       <div className="flex flex-row justify-center flex-wrap"> 
       
         <div><Placebyactivity text="Camping" img="/camping.jpg" /></div>
         <div><Placebyactivity text="Trekking" img="/trekking.png" /></div>
         <div><Placebyactivity text="Mountain Climbing" img="/mountainclimbing.jpg" /></div>
         <div><Placebyactivity text="Paragliding" img="/paragliding.jpg" /></div>
       </div>
      </div>
    );
}

export default Home