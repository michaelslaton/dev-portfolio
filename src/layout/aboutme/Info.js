import React from 'react';
import Slider from './photoSlider/Slider';
import schoolList from './data/schools.js';

export default function Info({ nav }){

  return (
    <div className='info-wrapper'>      
      <div className={`${nav === 'edu' ? 'active-screen' : 'inactive-screen'} text-wrapper`}>

        {schoolList.map((school,i)=>{
          if(school.length-1 !== i){
          return (
            <>
              <div className='school' key={school.id}>
              <div>
                <span className='school-title'>School:</span>
              </div>
              <div className='school-info'>
                <a href={school.link} target='_blank'>{school.name}</a>
              </div>
              <div>
                <span className='school-title'>Course:</span>
              </div>
              <div className='school-info'>
                {school.course}
              </div>
              <div>
                <span className='school-title'>Dates:</span>
              </div>
              <div className='school-info'>
                {school.dates}
              </div>
            </div>
            { schoolList.length-1 !== i && (
              <div className='divider'/>
            )}
            </>
          )}
        })}

      </div>
      
      <div className={`${nav === 'photo' ? 'active-screen' : 'inactive-screen'} image-wrapper`}>
        <Slider/>
      </div>
    </div>
  )
}