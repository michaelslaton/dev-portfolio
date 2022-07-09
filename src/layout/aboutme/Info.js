import React from 'react';
import Slider from './photoSlider/Slider'

export default function Info({ nav }){

  return (
    <div className='info-wrapper'>
      <div className='text-wrapper'>
        School: Thinkful<br/>
        Course: Software-Engineering<br/>
      </div>
      <div className={`${nav} image-wrapper`}>
        <Slider/>
      </div>
    </div>
  )
}