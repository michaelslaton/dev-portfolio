import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import SkillCard from './components/skillcard/SkillCard';
import skills from '../../data/skills';
import './skills.css';

export default function Skills(){
  const [skillVisible, setSkillVisible] = useState(false);
  const { ref: skillRef, inView: visible } = useInView();

  if(visible && !skillVisible) setSkillVisible(true);

  return (
    <div className='block'>
      <div>
        <h1 className='title'>Skills</h1>
      </div>
      <div className='skills-grid'>
        {skills
          .sort((a,b)=>{ return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;})
          .map((skill, i) => {
            if(skill.learned) return (
              <SkillCard key={skill.id} order={i} skill={skill} skillVisible={skillVisible}/>
            );
            return null;
          })}
      </div>
      <div ref={skillRef}/>
    </div>
  );
}