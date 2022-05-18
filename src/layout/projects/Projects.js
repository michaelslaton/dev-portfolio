import React from 'react';
import projectList from './ProjectData';

export default function Projects(){


  return (
    <div className="bigolblock2 center">
      {projectList.map((project)=>{
        return (
          <div key={project.id} className="projectContainer">
            <div>
              <img src={project.image} className="projectImage"/>
            </div>

            <div className="projectText">
              <h2 className="title">{project.name}</h2>
              <p>{project.description}</p>
              <p className="projectTech"><b className="title">Technology:</b>{project.tech.map((tech)=>{
                return ( <div className="tech">{tech},</div> )
              })}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}