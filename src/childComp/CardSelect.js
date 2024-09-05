import React from "react";

function CardSelect(props){
    return(
        <div className="flex flex-row justify-start items-center w-full pl-5">
            <button className="flex flex-row gap-2">
                <img className="self-center w-4 h-4 fill-yellow-600" src={props.image} alt=""/>
                <p className="text-white font-bold">{props.text}</p>
            </button>
        </div>
    );
}

export default CardSelect;