import { useInView } from 'react-intersection-observer';
import './layout.css';
import Navbar from './navbar/Navbar';
import ProfilePhoto from './profilePhoto/ProfilePhoto';
import AboutMe from './aboutme/AboutMe';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

export default function Layout(){
  const { ref: navRef, inView: visible } = useInView();

  return (
    <div className='main-screen'>
      <Navbar shift={visible}/>

      <div className='top-anchor' ref={navRef}/>
      <ProfilePhoto/>
      <AboutMe/>

      <div id='skills' className='anchor'/>
      <Skills/>
      
      <div id='projects' className='anchor'/>
      <Projects/>

      <div id='contact' className='anchor'/>
      <Contact/>

      <Footer/>
    </div>
  )
}