import React, { useState } from "react";
import CardSelect from "./CardSelect";
import { Hover } from "../assets/CardItems";

function Above(props){
  return(
    <CardSelect
      key = {props.id}
      image = {props.image}
      text = {props.text}
    />
  );
};


function ProdGrid(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      key={props.id}
      className={`relative group transition-transform duration-1000 ${isHovered ? "bg-gray-800 scale-105" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{fontFamily:'Poppins,sans-sarif'}}
    >
      <div className={`rounded-sm py-4 ${isHovered ? "opacity-60" : ""}`}>
        <div className="flex justify-end bg-red-500 relative">
          {props.discount && (
            <p className="absolute top-6 right-4 border-4 border-red-500 bg-red-500 rounded-full z-10 font-bold text-white text-xs py-2 xl:text-lg">
              {props.tag}
            </p>
          )}
        </div>
        <img className="" src={props.img} alt="" />
        <div className="bg-slate-100  h-fit">
          <p className="p-2 font-bold xl:text-3xl">{props.name}</p>
          <p className="p-2 font-bold xl:text-xl text-slate-400 text-opacity-40">{props.context}</p>
          <div className="flex flex-row">
            <p className="flex flex-row gap-9 md:gap-4 pl-2 pb-3 pt-2 font-bold text-sm xl:text-lg">
              {props.price}
              {props.discount && (
                <span className="justify-self-end text-center text-slate-400 text-opacity-40 line-through font-medium">
                  {props.discount}
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
      {isHovered && (
        <div
          className="flex flex-col justify-center absolute top-1/3 lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10 xl:mb-10 xl:mt-0  "
          style={{ fontFamily: "'Poppins',san-sarif" }}
        >
          <button className="text-center lg:mx-5 font-bold border-2 border-yellow-600 bg-white text-yellow-600 px-1 py-2 rounded text-xs xl:text-xl hover:bg-black hover:bg-opacity-60">
            Add to Cart
          </button>
          <div className="flex flex-row justify-start mt-2 md:mt-8 gap-2 text-white font-semibold text-xs xl:text-base xl:gap-4"></div>
          {Hover.map(Above)}
          </div>
      )}
    </div>
  );
}

export default ProdGrid;
