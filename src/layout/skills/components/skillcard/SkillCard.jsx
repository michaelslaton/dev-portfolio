import { useState } from 'react';
import lightUp from '../../../../utils/lightUp/lightUp';
import './skillCard.css';

export default function SkillCard({ skill, skillVisible, order }){
  const [loaded,setLoaded] = useState(false);

  if(!loaded && skillVisible) setTimeout(()=>{ setLoaded(true) }, order * 50);

  return (
    <div className={`skill-card ${loaded ? 'skill-load-in' : ''}`}>
      <div><img className='skill-card__image' src={skill.img} alt={skill.name}/></div>
      {
        skill.abbr ? <div><abbr title={skill.abbr}>{lightUp(skill.name)}</abbr></div>
        : 
        <div>{lightUp(skill.name)}</div>
      }
    </div>
  )
}