import React from 'react';
import Slider from './photoSlider/Slider';
import schoolList from '../data/schools.js';

export default function Info({ nav }){

  return (
    <div className={`info-wrapper block`}>
      <div className={`${nav === 'edu' ? 'active-screen' : 'inactive-screen'} info-wrapper__padding`}>

        {schoolList.map((school,i)=>{
          if(school.length-1 !== i){
          return (
            <div key={school.id}>
              <div className='school'>
              <div>
                <span className='school__title'>School:</span>
              </div>
              <div className='school__info'>
                <a href={school.link} target='_blank'>{school.name}</a>
              </div>
              <div>
                <span className='school__title'>Course:</span>
              </div>
              <div className='school__info'>
                {school.course}
              </div>
              <div>
                <span className='school__title'>Dates:</span>
              </div>
              <div className='school__info'>
                {school.dates}
              </div>
            </div>
            { schoolList.length-1 !== i && (
              <div className='divider'/>
            )}
            </div>
          )}
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