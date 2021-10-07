import react from "react";

function Placebyactivity(props){
    return(
        <div className="h-80 w-56 bg-lightgreen rounded-md p-2 mx-10">
            <img className="h-64 w-full rounded-md" src={props.img} />
            <div className="text-center mt-3 text-green font-medium">{props.text}</div>
        </div>
    );
}

export default Placebyactivity