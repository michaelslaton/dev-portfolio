import React from 'react';

export default function AboutMe() {

  function lightItUp(str) {
    return str.split("").map((letter)=>{
      return (
        <div className="mikeLetter">{letter}</div>
      )
    })
  };

  return (
    <div className="bigolblock">
      <div className="insidetheblock">
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