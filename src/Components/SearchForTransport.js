import {AiOutlineSearch} from "react-icons/ai"
function SearchForTransport(){
    return (
        <div className="bg-lightgreen md:w-100 h-36 md:ml-32 ml-7 w-80 mt-10 rounded-md">
            <input type="text" className="ml-4 mt-4 md:w-99 h-12 w-72 rounded md" placeholder=" Where do you want to go?" />
            <div className="flex flex-wrap">
                <div><input type="text" className="ml-4 mt-4 md:w-96 h-12 rounded md" placeholder=" Mode of Transport" /></div>
                <div><button className="bg-green rounded-md  mt-4 ml-6 w-16 h-12"><AiOutlineSearch className="text-white ml-4" size={34}/></button></div>
            </div>
        </div>
    )
}

export default SearchForTransport