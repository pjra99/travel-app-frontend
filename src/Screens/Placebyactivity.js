import react from "react";

function Placebyactivity(props){
    return(
        <div className="h-72 w-56 bg-lightgreen rounded-md p-2 mx-10">
            <img className="h-60 w-full rounded-md" src={props.img} />
            <div className="text-center mt-2 text-green font-medium">{props.text}</div>
        </div>
    );
}

export default Placebyactivity