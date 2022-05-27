import React from "react";
import projectList from "./projectData";

export default function Projects() {
  return (
    <div className="block">
      <div className="text-wrapper">
        <h1 className="title">Projects</h1>
      </div>
      <div>
        {projectList.map((project,index) => {
          return (
            <div key={index} className="project-container">
              <div>
                <img src={project.image} className="project-image" />
              </div>

              <div className="projectText">
                <h2 className="title">{project.name}</h2>
                <div className="sub-title">{project.type}</div>
                <div className="spacer" />
                <p>{project.description}</p>
                <div className="project-techs">
                  <b className="title">Technology:</b>
                  {project.tech.map((tech, i) => {
                    i += 1;
                    if (project.tech.length === i) {
                      return <div key={i} className="tech">{tech}</div>;
                    } else {
                      return <div key={i} className="tech">{tech} ,</div>;
                    }
                  })}
                </div>

                <div className="project-buttons-container">
                  <a
                    href={project.code}
                    className="small-button project-button"
                  >
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="small-button project-button"
                    >
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
