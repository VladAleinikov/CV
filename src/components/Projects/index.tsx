import React, { useState } from 'react'
import { useAppSelector } from '../../hooks/redux'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import Filter from './Filter/index';

const Projects = () => {
  const { projects } = useAppSelector(state => state.projects)
  const [showModal, setShowModal] = useState<number>(-1);
  const [filter, setFilter] = useState<string>('none');

  const projectCardHandler = (id: number) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setShowModal(id);
    }
  }
  return (
    <div className='projects-container'>
      <Filter />
      <div className="projects__list">
        {projects.map((project, id) =>
          <ProjectCard key={id} project={project} onClick={projectCardHandler(id)} />)}
      </div>

      {showModal >= 0 && <ProjectModal project={projects[showModal]} />}
    </div>
  )
}

export default Projects