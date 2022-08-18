import React from "react";
import './navbar.css';


export default function Navbar({ shift }){

  return (
    <div className={`navbar__wrapper ${shift ? "" : "nav-at-top"}`}>
      
      <ul className={`navbar__buttons-wrapper ${shift ? "" : "nav-buttons-at-top"}`}>
        <li><a href="#top" className={`navbar__button ${shift ? "" : "button-at-top"}`}>About</a></li>
        <li><a href="#skills" className={`navbar__button ${shift ? "" : "button-at-top"}`}>Skills</a></li>
        <li><a href="#projects" className={`navbar__button ${shift ? "" : "button-at-top"}`}>Projects</a></li>
        <li><a href="#contact" className={`navbar__button ${shift ? "" : "button-at-top"}`}>Contact</a></li>
      </ul>

    </div>
  )
}