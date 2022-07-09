import React from 'react';
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

export default function SliderBtn({ direction, handler }){

  return(
    <button
    tabIndex="0"
    onClick={()=>handler(direction)}
    className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img alt="" src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  )
}