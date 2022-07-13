import React from 'react';

export default function MiniNav({ setNav }){
  return (
    <div className="miniNav-body">
      <ul className="miniNav-buttons">
        <li><a className="miniNav-button" onClick={()=>setNav('edu')} role="button" tabIndex="0">Education</a></li>
        <li><a className="miniNav-button" onClick={()=>setNav('photo')} role="button" tabIndex="0">Photography</a></li>
        <li><a className="miniNav-button" onClick={()=>setNav('photo')} role="button" tabIndex="0">MISC</a></li>
      </ul>
    </div>
  )
}