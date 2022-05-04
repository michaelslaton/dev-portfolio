import React, { useState } from 'react';

export default function Kirablock({color, setColor}){

  function changeColor(){
    
    if(color === "kiraWhite"){
      setColor("kiraBlack");
    } else {
      setColor("kiraWhite");
    }
  }

  return (
    <div className="kira">
      <h1 className={color} onClick={()=> changeColor()}>K I R A</h1>
    </div>
  )
}