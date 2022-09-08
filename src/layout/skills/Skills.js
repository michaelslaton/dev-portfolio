import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './skills.css';
import { skills, learnSkills } from './data/skills';

export default function Skills(){
  const [skillVisible, setSkillVisible] = useState(false);
  const { ref: skillRef, inView: visible } = useInView();

  if(visible && skillVisible !== true) setSkillVisible(true);

  return (
    <div className="skills__wrapper block block__width">
        <div>
          <h1 className="title">Skills</h1>
          <p>
            My aim is to be versatile, I love learning new skills. Listed below are my current skills, but if I don't know it, I'm more than willing to learn it!
          </p>
        </div>
        
        {/* <section className="learn-skills--wrapper">
            <ul className="learn-skills--list">
              {learnSkills.map((skill, i)=>{
                      i += 1;
                      if (learnSkills.length === i) {
                        return <li key={i} className="learn-skill">{skill}</li>;
                      } else {
                        return <li key={i} className="learn-skill">{skill} ,</li>;
                      }
                    })}
            </ul>
        </section> */}

        <div className="skills-list" ref={skillRef}>
          {skills.map((skill, i) => {
            return (
              <div className={`skill-card ${skillVisible ? `skill-load-in` : ""}`} key={i}>
                <div><img className="skill-card__image" src={skill.img} alt={skill.name}/></div>
                <div>{`${skill.name}`}</div>
              </div>
            );
          })}

        </div>
    </div>
  );
}