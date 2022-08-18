import './Layout.css';
import React from "react";
import { useInView } from 'react-intersection-observer';

import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

import AboutMe from './aboutme/AboutMe';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';


export default function Layout(){
  const { ref: navRef, inView: visible } = useInView();

  return (
    <div>

      <Navbar shift={visible}/>

      <div className="top-sensor" ref={navRef}/>

      <section id="about"><AboutMe/></section>

      <section id="skills"><Skills/></section>

      <section id="projects"><Projects/></section>

      <section id="contact"><Contact/></section>

      <Footer/>

    </div>
  )
}