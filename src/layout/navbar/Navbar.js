import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./navbar.css";


export default function Navbar({ shift }){
  const [navVisible, setNavVisible] = useState(false);
  const { ref: navRef, inView: visible } = useInView();

  if(visible && navVisible !== true) setTimeout(()=>{setNavVisible(true)}, 700);

  return (
    <div ref={navRef} className={`navbar__wrapper ${navVisible ? "navbar__wrapper--load-in" : ""} ${shift ? "" : "nav-at-top"}`}>
      
      <ul className={`navbar__buttons-wrapper ${shift ? "" : "nav-buttons-at-top"}`}>
        <li><a href="#top" className={`navbar__button ${shift ? "" : "button-at-top"}`}>About</a></li>
        <li><a href="#skills" className={`navbar__button ${shift ? "" : "button-at-top"}`}>Skills</a></li>
        <li><a href="#projects" className={`navbar__button ${shift ? "" : "button-at-top"}`}>Projects</a></li>
        <li><a href="#contact" className={`navbar__button ${shift ? "" : "button-at-top"}`}>Contact</a></li>
      </ul>

    </div>
  )
}