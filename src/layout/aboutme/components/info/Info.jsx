import lightUp from '../../../../utils/lightUp/lightUp';
import schoolList from '../../../../data/schools.js';
import Slider from '../photoSlider/Slider';
import './info.css';

export default function Info({ nav }){

  return (
    <div className={'info-wrapper'}>
      <div className={`${nav === 'edu' ? 'active-screen' : 'inactive-screen'}`}>

        {schoolList.map((school,i)=>{
          if(school.length-1 !== i){
          return (
            <div key={school.id}>
              <div className='school'>
                <div className='school__img-container'>
                  <a href={school.link} rel='noreferrer' target='_blank'>
                    <img className='school__img' alt={school.name} src={school.img}/>
                  </a>
                </div>
                <div className='school__info-grid'>
                  <div>
                    <span className='school__info--title'>School:</span>
                    <span className='school__info'>{lightUp(school.name)}</span>
                  </div>
                  <div>
                    <span className='school__info--title'>Course:</span>
                    <span className='school__info'>{school.course}</span>
                  </div>
                  <div>
                    <span className='school__info--title'>Dates:</span>
                    <span className='school__info'>{school.dates}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          else return <></>
        })}

      </div>
      
      <div className={`${nav === 'photo' ? 'active-screen' : 'inactive-screen'}`}>
        <Slider/>
      </div>

      <div className={`${nav === 'misc' ? 'active-screen' : 'inactive-screen'} info-wrapper__padding`}>
        Some Stuff
      </div>
    </div>
  )
}