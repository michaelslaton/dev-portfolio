import './Layout.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './navbar/Navbar';

import Bigblock from './bigblock/Bigblock';
import Bigblock2 from './bigblock/Bigblock2';
import AboutMe from './aboutme/AboutMe';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';


export default function Layout(){

  return (
    <div>

    <Navbar/>

    <section id="about"><Bigblock/></section>

    <AboutMe/>

    <section id="skills"><Skills/></section>

    <section id="projects"><Projects/></section>

    <section id="contact"><Contact/></section>

    <Bigblock2/>

    </div>
  )
}