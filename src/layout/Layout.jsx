import { useInView } from 'react-intersection-observer';
import Navbar from './navbar/Navbar';
import ProfilePhoto from './profilePhoto/ProfilePhoto';
import AboutMe from './aboutme/AboutMe';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import './layout.css';

export default function Layout(){
  const { ref: navRef, inView: visible } = useInView();

  return (
    <div className='main-screen'>
      <Navbar shift={visible}/>

      <div className='top-anchor' ref={navRef}/>
      <ProfilePhoto/>
      <section id='about'><AboutMe/></section>

      <div id='skills' className='anchor'/>
      <section><Skills/></section>
      
      <div id='projects' className='anchor'/>
      <section><Projects/></section>

      <div id='contact' className='anchor'/>
      <section><Contact/></section>

      <Footer/>
    </div>
  )
}