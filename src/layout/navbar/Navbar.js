import React from "react";


export default function Layout(){

  return (
    <div className="navbar">
      
      <ul className="navbar__buttons-wrapper">
        <li><a href="#top" className="navbar__button">About</a></li>
        <li><a href="#skills" className="navbar__button">Skills</a></li>
        <li><a href="#projects" className="navbar__button">Projects</a></li>
        <li><a href="#contact" className="navbar__button">Contact</a></li>
      </ul>

    </div>
  )
}