import './projects.css';
import projectList from '../../data/projectData';

export default function Projects() {
  return (
    <div className='block'>
      <div>
        <h1 className='title'>Projects</h1>
      </div>
      <div>
        {projectList.map((project,i) => {
          return (
            <div key={project.id}>
              <div className='project'>
                <div className='project__image--wrapper'>
                  <a href={project.code} rel='noreferrer' target='_blank'>
                    <img src={project.img} className='project__image' alt={project.name} />
                  </a>
                </div>

                <div>
                  <h2 className='project__title'>{project.name}</h2>
                  <div className='project__sub-title'>{project.type}</div>
                  <p>{project.description}</p>
                  <div className='project__tech-list'>
                    <b className='project_title title'>Technology:</b>
                    
                    {project.tech.map((tech, i) => {
                      i += 1;
                      if (project.tech.length === i) {
                        return <div key={i} className='project__tech'>{tech}</div>;
                      } else {
                        return <div key={i} className='project__tech'>{tech} ,</div>;
                      }
                    })}

                  </div>

                  <div className='project__buttons-container'>
                    {project.demo && (
                      <a href={project.demo} type='button' className='button project__button' rel='noreferrer' target='_blank'>Demo</a>
                    )}
                    <a
                      href={project.code}
                      type='button'
                      className='button project__button'
                      rel='noreferrer'
                      target='_blank'>
                        { project.codeb ? 'Code: F' : 'Code'}
                    </a>
                    {project.codeb && (
                      <a
                        href={project.codeb}
                        type='button'
                        className='button project__button'
                        rel='noreferrer'
                        target='_blank'>
                          Code: B
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};