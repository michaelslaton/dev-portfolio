import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './aboutme.css';
import MiniNav from './components/MiniNav';
import Info from './components/Info';

export default function AboutMe() {
  const [nav,setNav] = useState('edu');
  const [titleVisible, setTitleVisible] = useState(false);
  const { ref: titleRef, inView: visible } = useInView();

  if(visible && titleVisible !== true) setTitleVisible(true);

  function lightItUp(str) {
    return str.split("").map((letter,i)=>{
      return (
        <div key={i} className="mike__letter">{letter}</div>
      )
    })
  };

  return (
      <div className="about-me__wrapper block__width">
        <div className="profile-image__wrapper">
          <img
            src={process.env.PUBLIC_URL + `/imgs/mike.jpg`}
            className="profile-image"
            alt="Michael Slaton"
          />
          <div className="about-me__mobile-filler"/>
        </div>
        <div className="block top-corner">
          <h1 className={`title mike__title ${titleVisible ? "mike_title--load-in" : ""}`} ref={titleRef}>
            Hey, I'm {lightItUp(`Mike`)}.
          </h1>
          <p className={`mike_about ${titleVisible ? `mike_about-load-in` : ``}`}>
            I am a Full-Stack Developer, with a passion for front-end, currently living in Emeryville, California.
            I love working with the design and aesthetic elements of an App or UI and seeing a project as all of the pieces come together.
          </p>
        </div>
        <MiniNav setNav={setNav}/>
        <Info nav={nav}/>
      </div>
  );
}