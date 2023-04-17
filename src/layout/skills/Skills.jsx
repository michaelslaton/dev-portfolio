import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import lightUp from '../../utils/lightUp/lightUp';
import skills from '../../data/skills';
import './skills.css';

export default function Skills(){
  const [skillVisible, setSkillVisible] = useState(false);
  const { ref: skillRef, inView: visible } = useInView();

  if(visible && skillVisible !== true) setSkillVisible(true);

  return (
    <div className='block'>
        <div>
          <h1 className='title'>Skills</h1>
        </div>

        <div className='skills-grid' ref={skillRef}>
          {skills.map((skill, i) => {
            return (
              <div className={`skill-card ${skillVisible ? 'skill-load-in' : ''}`} key={i}>
                <div><img className='skill-card__image' src={skill.img} alt={skill.name}/></div>
                {
                  skill.abbr ? <div><abbr title={skill.abbr}>{lightUp(skill.name)}</abbr></div>
                  : 
                  <div>{lightUp(skill.name)}</div>
                }
                
              </div>
            );
          })}

        </div>
    </div>
  );
}