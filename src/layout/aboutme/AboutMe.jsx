import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Info from "./components/info/Info";
import lightUp from "../../utils/lightUp/lightUp";
import mike from "../../assets/imgs/mike.jpg";
import MiniNav from "./components/mininav/MiniNav";
import "./aboutme.css";

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
            Hey, I'm {lightUp("Mike","mike__letter", true)}.
          </h1>
          <article className={`mike__about ${titleVisible ? "mike__about-load-in" : ""}`}>
            I am a {lightUp("Full-Stack Developer")}, with a passion for {lightUp("Front-End")}, currently residing in {lightUp("Emeryville, California")}.
            When it comes to apps, I love working with the design and aesthetic elements, and enjoy seeing all of the pieces come together on my projects.
          </article>
        </div>
        <MiniNav setNav={setNav} nav={nav}/>
        <Info nav={nav}/>
      </div>
  );
}