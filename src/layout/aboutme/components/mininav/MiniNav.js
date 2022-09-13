import React from "react";
import "./mininav.css";

export default function MiniNav({ setNav }){
  return (
    <div className="miniNav">
      <div className="miniNav__buttons-wrapper">
        <button className="miniNav__button" onClick={()=>setNav("edu")}>Education</button>
        <button className="miniNav__button" onClick={()=>setNav("photo")}>Photography</button>
        <button className="miniNav__button" onClick={()=>setNav("misc")}>MISC</button>
      </div>
    </div>
  )
}