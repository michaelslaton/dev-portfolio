import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./aboutme.css";
import mike from "../../assets/imgs/mike.jpg";
import MiniNav from "./components/mininav/MiniNav";
import Info from "./components/info/Info";
import lightUp from "../../utils/lightUp";

export default function AboutMe() {
  const [nav,setNav] = useState("edu");
  const [titleVisible, setTitleVisible] = useState(false);
  const { ref: titleRef, inView: visible } = useInView();

  if(visible && titleVisible !== true) setTitleVisible(true);

  return (
      <div className="about-me__wrapper block__width">
        <div className="profile-image__wrapper">
          <img
            src={mike}
            className="profile-image"
            alt="Michael Slaton"
          />
          <div className="about-me__mobile-filler"/>
        </div>
        <div className="block top-corner">
          <h1 className={`title mike__title ${titleVisible ? "mike_title--load-in" : ""}`} ref={titleRef}>
            Hey, I'm {lightUp("Mike","mike__letter")}.
          </h1>
          <article className={`mike__about ${titleVisible ? "mike__about-load-in" : ""}`}>
            I am a {lightUp("full-stack developer")}, with a passion for {lightUp("front-end")}, currently living in Emeryville, California.
            I love working with the design and aesthetic elements of an App and seeing a project as all of the pieces come together.
          </article>
        </div>
        <MiniNav setNav={setNav} nav={nav}/>
        <Info nav={nav}/>
      </div>
  );
}