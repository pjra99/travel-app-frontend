import react from "react"

function Placebytype(props){
    return (
        <div className="h-80 w-56 bg-lightgreen rounded-t-lg mx-10">
        <img className="h-68 w-full rounded-t-md" src={props.img} />
        <div className="text-center mt-3 text-green font-medium">{props.name}</div>
        </div>
    );
}

export default Placebytype;