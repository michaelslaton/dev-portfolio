import React, { useState } from 'react';
import './aboutme.css';
import MiniNav from './components/MiniNav';
import Info from './components/Info';

export default function AboutMe() {
  const [nav,setNav] = useState('edu');

  function lightItUp(str) {
    return str.split("").map((letter,i)=>{
      return (
        <div key={i} className="mike__letter">{letter}</div>
      )
    })
  };

  return (
      <div className="about-me__wrapper">
        <div className="profile-image__wrapper">
          <img
            src={process.env.PUBLIC_URL + `/imgs/mike.png`}
            className="profile-image"
            alt="Michael Slaton"
          />
        </div>
        <div className="text-wrapper">
          <h1 className="title mike__title">
            Hey, I'm {lightItUp(`Mike`)}.
          </h1>
          <p className="about-me__p">
            I am a Full-Stack Developer, with a passion for front-end development, currently living in Emeryville, California.
            I love working with the design and aesthetic elements of an App or UI and seeing a project come together 
          </p>
        </div>
        <MiniNav setNav={setNav}/>
        <Info nav={nav}/>
      </div>
  );
}