import mike from '../../assets/imgs/mike.jpg';
import './profilePhoto.css';

export default function ProfilePhoto() {

  return (
    <div className='profile-photo__block'>
      <div className='profile-image__wrapper'>
        <img
          src={mike}
          className='profile-image'
          alt='Michael Slaton'
        />
        <div className='mobile-background'/>
      </div>
    </div>
  )
}