import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Info from './components/info/Info';
import lightUp from '../../utils/lightUp/lightUp';
import MiniNav from './components/mininav/MiniNav';
import './aboutme.css';

export default function AboutMe() {
  const [nav,setNav] = useState('edu');
  const [titleVisible, setTitleVisible] = useState(false);
  const { ref: titleRef, inView: visible } = useInView();

  if(visible && titleVisible !== true) setTitleVisible(true);

  return (
      <div className='block top-corner'>
        <div>
          <h1 className={`title mike__title ${titleVisible ? 'mike_title--load-in' : ''}`} ref={titleRef}>
            Hey, I'm {lightUp('Mike','mike__letter', true)}.
          </h1>
          <p className={`mike__about ${titleVisible ? 'mike__about-load-in' : ''}`}>
            I am a {lightUp('Full-Stack Developer')}, with a passion for {lightUp('Front-End')}, currently residing in {lightUp('Emeryville, California')}.
            When it comes to apps, I love working with the design and aesthetic elements, and enjoy seeing all of the pieces come together on my projects.
          </p>
        </div>
        <MiniNav setNav={setNav} nav={nav}/>
        <Info nav={nav}/>
      </div>
  );
}