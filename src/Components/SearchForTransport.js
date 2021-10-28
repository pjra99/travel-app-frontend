import {AiOutlineSearch} from "react-icons/ai"
function SearchForTransport(){
    return (
        <div className="bg-lightgreen w-100 h-36 ml-32 mt-10 rounded-md">
            <input type="text" className="ml-4 mt-4 w-99 h-12 rounded md" placeholder=" Where do you want to go?" />
            <div className="flex">
                <div><input type="text" className="ml-4 mt-4 w-96 h-12 rounded md" placeholder=" Mode of Transport" /></div>
                <div><button className="bg-green rounded-md  mt-4 ml-6 w-16 h-12"><AiOutlineSearch className="text-white ml-4" size={34}/></button></div>
            </div>
        </div>
    )
}

export default SearchForTransport