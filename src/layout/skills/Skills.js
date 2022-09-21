import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./skills.css";
import skills from "../../data/skills";

export default function Skills(){
  const [skillVisible, setSkillVisible] = useState(false);
  const { ref: skillRef, inView: visible } = useInView();

  if(visible && skillVisible !== true) setSkillVisible(true);

  return (
    <div className="skills__wrapper block block__width">
        <div>
          <h1 className="title">Skills</h1>
          {/* <p>
            Listed below are my current skills, though if I don't know it, I love and am more than happy to learn new technology!
          </p> */}
        </div>

        <div className="skills-list" ref={skillRef}>
          {skills.map((skill, i) => {
            return (
              <div className={`skill-card ${skillVisible ? "skill-load-in" : ""}`} key={i}>
                <div><img className="skill-card__image" src={skill.img} alt={skill.name}/></div>
                {
                  skill.abbr ? <div><abbr title={skill.abbr}>{`${skill.name}`}</abbr></div>
                  : 
                  <div>{`${skill.name}`}</div>
                }
                
              </div>
            );
          })}

        </div>
    </div>
  );
}