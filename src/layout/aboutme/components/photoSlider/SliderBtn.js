import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"


export default function SliderBtn({ direction, handler }){

  const arrow = (direction) => {
    if(direction === "next") return ( <FontAwesomeIcon icon={faArrowRight} transform="grow-7" fixedWidth/> );
    else return ( <FontAwesomeIcon icon={faArrowLeft} transform="grow-7" fixedWidth/> );
  }

  return(
    <button
    tabIndex="0"
    onClick={()=>handler(direction)}
    className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {arrow(direction)}
    </button>
  )
}