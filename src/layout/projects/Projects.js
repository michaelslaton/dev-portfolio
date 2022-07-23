import React from "react";
import projectList from "./data/ProjectData";

export default function Projects() {
  return (
    <div className="block">
      <div className="text-wrapper">
        <h1 className="title">Projects</h1>
      </div>
      <div>
        {projectList.map((project,index) => {
          return (
            <>
            <div key={index} className="project">
              <div className="project__image--wrapper">
                <div>
                <img src={project.image} className="project__image" />
                </div>
              </div>

              <div>
                <h2 className="title">{project.name}</h2>
                <div className="sub-title">{project.type}</div>
                <div className="spacer" />
                <p>{project.description}</p>
                <div className="project__tech-list">
                  <b className="title">Technology:</b>
                  
                  {project.tech.map((tech, i) => {
                    i += 1;
                    if (project.tech.length === i) {
                      return <div key={i} className="project__tech">{tech}</div>;
                    } else {
                      return <div key={i} className="project__tech">{tech} ,</div>;
                    }
                  })}

                </div>

                <div className="project__buttons-container">
                  <a href={project.code} className="small-button project__button" target="_blank">Code</a>
                  {project.demo && (
                    <a href={project.demo} className="small-button project__button" target="_blank">Demo</a>
                  )}
                </div>
              </div>
            </div>
            { projectList.length-1 !== index && (
              <div className='text-wrapper'>
                <div className='divider'/>
              </div>
            )}
            </>
          );
        })}
      </div>
    </div>
  );
}
