import './mininav.css';

export default function MiniNav({ setNav, nav }){
  return (
    <div className='miniNav'>
      <div className='miniNav__buttons-wrapper'>
        <button className={`miniNav__button ${nav === 'edu' ? 'active_button' : ''}`} onClick={()=>setNav('edu')}>Education</button>
        <button className={`miniNav__button ${nav === 'photo' ? 'active_button' : ''}`} onClick={()=>setNav('photo')}>Photography</button>
      </div>
    </div>
  )
}