import React from 'react';
import projectList from './projectData';

export default function Projects(){


  return (
    <div className="bigolblock2">
      <div className="textWrapper">
        <h1 className="title">Projects</h1>
      </div>
      <div>
        {projectList.map((project) => {
          return (
            <div key={project.id} className="projectContainer">
              <div>
                <img src={project.image} className="projectImage" />
              </div>

              <div className="projectText">
                <h2 className="title">{project.name}</h2>
                <div className="projectType">{project.type}</div>
                <div className="spacer"/>
                <p>{project.description}</p>
                <p className="projectTechs">
                  <b className="title">Technology:</b>
                  {project.tech.map((tech, i) => {
                    i += 1;
                    if (project.tech.length === i) {
                      return <div className="tech">{tech}</div>;
                    } else {
                      return <div className="tech">{tech} ,</div>;
                    }
                  })}
                </p>

                <div className="projectButtonsContainer">
                    <a href={project.code} className="small-button project-button">
                      Code
                    </a>
                  {project.demo && (
                    <a href={project.demo} className="small-button project-button">
                      Demo
                    </a>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}