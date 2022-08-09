import React from 'react';
import './skills.css';
import skills from './data/skills';

export default function Skills(){


  return (
    <div className="skills__wrapper block block__width">
        <div>
          <h1 className="title">Skills</h1>
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

        <div className="skills-list">
          {skills.map((skill, i) => {
            return (
              <div className="skill-card" key={i}>
                <div><img className="skill-card__image" src={skill.img} alt={skill.name}/></div>
                <div>{`${skill.name}`}</div>
              </div>
            );
          })}

        </div>
    </div>
  );
}