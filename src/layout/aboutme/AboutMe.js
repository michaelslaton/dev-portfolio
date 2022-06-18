import React from 'react';
import Mike from './images/mike.png';

export default function AboutMe() {

  function lightItUp(str) {
    return str.split("").map((letter,i)=>{
      return (
        <div key={i} className="mike-letter">{letter}</div>
      )
    })
  };

  return (
    <div className="block-top">
      <div className="profile-image-wrapper">
      <img src={Mike} className="profile-image"/>
      </div>
      <div className="text-wrapper about-me">
        <h1 className="title">
          Hey, I'm {lightItUp(`Mike`)}.
        </h1>
        <div className="spacer"/>
        <p>
          I am a Full-Stack Developer, with a bias passion for Front-End Development, currently living in Emeryville, California.
          I love working with the design and aesthetic elements of an App or UI and seeing a project come together 
        </p>
      </div>
    </div>
  );
}