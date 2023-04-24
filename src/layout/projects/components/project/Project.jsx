import './project.css';

export default function Project({ projectData }){

  return (
    <div key={projectData.id}>
      <div className='project'>
        <div className='project__image--wrapper'>
          <a href={projectData.code} rel='noreferrer' target='_blank'>
            <img src={projectData.img} className='project__image' alt={projectData.name} />
          </a>
        </div>

        <div>
          <h2 className='project__title'>{projectData.name}</h2>
          <div className='project__sub-title'>{projectData.type}</div>
          <p>{projectData.description}</p>
          <div className='project__tech-list'>
            <div className='project_title title'>Technology:</div>
            
            {projectData.tech.map((tech, i) => {
              i += 1;
              if (projectData.tech.length === i) {
                return <div key={i} className='project__tech'>{tech}</div>;
              } else {
                return <div key={i} className='project__tech'>{tech} ,</div>;
              }
            })}

          </div>

          <div className='project__buttons-container'>
            {projectData.demo && (
              <a href={projectData.demo} type='button' className='button project__button' rel='noreferrer' target='_blank'>Demo</a>
            )}
            <a
              href={projectData.code}
              type='button'
              className='button project__button'
              rel='noreferrer'
              target='_blank'>
                { projectData.codeb ? 'Code: F' : 'Code'}
            </a>
            {projectData.codeb && (
              <a
                href={projectData.codeb}
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
  )
}