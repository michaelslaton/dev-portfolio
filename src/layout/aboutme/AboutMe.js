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
        <h1>About Me</h1>
        <h4>
          Hey, I'm {lightItUp(`Mike`)}.
        </h4>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </div>
  );
}