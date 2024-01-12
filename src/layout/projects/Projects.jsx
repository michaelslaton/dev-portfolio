import projectList from '../../data/projectData';
import Project from './components/project/Project';

export default function Projects() {
  return (
    <div className='block'>
      <div>
        <h1 className='title'>Projects</h1>
      </div>
      <div>
        {projectList.map((project,i) => {
          if (project.show){
            return (
              <Project projectData={project}/>
            )
          } else return null;
        }).reverse()}
      </div>
    </div>
  );
};