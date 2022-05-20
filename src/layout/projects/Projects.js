import React from 'react';
import projectList from './projectData';

export default function Projects(){


  return (
    <div className="bigolblock2 projectBlock">
      <h1 className="title">Projects</h1>
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
                <p className="projectTech">
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
                    <a href={project.code} className="projectButton">
                      Code
                    </a>
                  {project.demo && (
                    <a href={project.demo} className="projectButton">
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