import SkillCard from './components/skillcard/SkillCard';
import skills from '../../data/skills';
import './skills.css';

export default function Skills(){

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
              <SkillCard key={skill.id} skill={skill}/>
            );
            return null;
          })}
      </div>
    </div>
  );
}