import "./Layout.css";
import { useInView } from "react-intersection-observer";
import Navbar from "./navbar/Navbar";
import AboutMe from "./aboutme/AboutMe";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

export default function Layout(){
  const { ref: navRef, inView: visible } = useInView();

  return (
    <div>

      <Navbar shift={visible}/>

      <div className="top-sensor" ref={navRef}/>

      <section id="about"><AboutMe/></section>

      <div id="skills" className="anchor"/>
      <section><Skills/></section>
      
      <div id="projects" className="anchor"/>
      <section><Projects/></section>

      <div id="contact" className="anchor"/>
      <section><Contact/></section>

      <Footer/>

    </div>
  )
}