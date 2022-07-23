import React, { useState } from 'react';
import MiniNav from './MiniNav';
import Info from './Info';

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
    <div className="block-top">
      <div className="profile-image__wrapper">
      <img src={process.env.PUBLIC_URL + `/imgs/mike.png`} className="profile-image"/>
      </div>
      <div className="text-wrapper">
        <h1 className="title">
          Hey, I'm {lightItUp(`Mike`)}.
        </h1>
        <p>
          I am a Full-Stack Developer, with a bias passion for Front-End Development, currently living in Emeryville, California.
          I love working with the design and aesthetic elements of an App or UI and seeing a project come together 
        </p>
      </div>
      <MiniNav setNav={setNav}/>
      <Info nav={nav}/>
    </div>
  );
}