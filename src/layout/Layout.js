import './Layout.css';
import React from "react";
import Navbar from './navbar/Navbar';

import AboutMe from './aboutme/AboutMe';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';


export default function Layout(){

  return (
    <div>

    <Navbar/>

    <section id="about"><AboutMe/></section>

    <section id="skills"><Skills/></section>

    <section id="projects"><Projects/></section>

    <section id="contact"><Contact/></section>

    </div>
  )
}