import React from "react"
import Navbar from "./Navbar"

function Home(){
    return (
      <div className="container-fluid">
        <div className="mt-6 header h-668px" style={{backgroundImage: "url(/homebg.jpg)", backgroundSize: "cover"}}>
        <Navbar />
        <div className="grid justify-items-center">
          {/* <div></div> */}
          <div className="h-80 opacity-80 rounded-md w-568px bg-black mt-24 z-0">
            <div className="text-white opacity-100 z-10 text-2xl px-20 font-heading mt-8">Need a vacation? Don't worry we got you!</div>
            <div className="w-96 h-36 bg-lightgreen ml-20 mt-4 rounded-md z-20 opacity-100">
            <input type="text" className="z-30 w-72 ml-4 mt-4 bg-white h-12 z-20 rounded-md opacity-100" />
            </div>
          </div>
          {/* <div></div> */}
          </div>
          </div>
        
      </div>
    );
}

export default Home