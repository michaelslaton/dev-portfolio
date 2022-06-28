import React from 'react';

export default function Info({ nav }){

  return (
    <div className='info-wrapper'>
      <div className='text-wrapper'>
        School: Thinkful<br/>
        Course: Software-Engineering<br/>
      </div>
      <div className={`${nav} text-wrapper`}>
        muh photos
      </div>
    </div>
  )
}