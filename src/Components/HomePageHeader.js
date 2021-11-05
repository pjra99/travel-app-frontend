import {Link} from 'react-router-dom'
import {AiOutlineSearch} from "react-icons/ai"
import Navbar from './Navbar'

function HomePageHeader(){
    return(
        <div className="w-screen h-668px" style={{backgroundImage: "url(/homebg.jpg)", backgroundSize: "cover"}}>
            <Navbar />
            <div className="flex justify-center">
              {/* <div></div> */}
              <div className="h-80 md:ml-0 ml-6 rounded-md w-80 md:w-568px bg-glassblack mt-44 z-0 absolute md:pl-2">
                <div className="text-white opacity-100 z-10 text-2xl ml-10 md:px-20 font-heading mt-8">Need a vacation? Don't worry we got you!</div>
                <div className="md:w-96 h-36 bg-lightgreen md:ml-20 mt-4 rounded-md z-20">
             <div className="flex"><input type="text" className="w-48 md:w-72 ml-4 mt-4 bg-white h-12 z-30 rounded-md" placeholder="  Find your destination" /> <Link to ="/destination" ><button className="bg-green rounded-md mt-4 ml-2 w-14 h-12"><AiOutlineSearch className="text-white ml-3" size={36}/></button></Link></div> 
                <button className="bg-green text-white text-center ml-4 py-2 px-2 md:px-8 rounded-md md:ml-4 mt-4">Places near me</button>
                <button className="bg-black text-white text-center ml-2 py-2 px-2 md:px-8 rounded-md md:ml-2 mt-4">Trending Places</button>
                </div>
              </div>
              {/* <div></div> */}
              </div>
              </div>
    )
}

export default HomePageHeader