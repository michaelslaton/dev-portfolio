import lightUp from '../../../../utils/lightUp/lightUp';
import './skillCard.css';

export default function SkillCard({ skill }){

  return (
    <div className={`skill-card`}>
      <div><img className='skill-card__image' src={skill.img} alt={skill.name}/></div>
      {
        skill.abbr ? <div><abbr title={skill.abbr}>{lightUp(skill.name)}</abbr></div>
        : 
        <div>{lightUp(skill.name)}</div>
      }
    </div>
  )
}