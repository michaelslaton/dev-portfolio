import React from 'react';

export default function MiniNav({ setNav }){


  return (
    <div className="miniNav-body">
      <ul className="miniNav-buttons">
        <li><a className="miniNav-button" onClick={()=>setNav('photography-inactive')} role="button" tabindex="0">Education</a></li>
        <li><a className="miniNav-button" onClick={()=>setNav('photography-active')} role="button" tabindex="0">Photography</a></li>
      </ul>
    </div>
  )
}