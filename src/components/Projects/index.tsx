import React, { useState } from 'react'
import { useAppSelector } from '../../hooks/redux'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

const Projects = () => {
  const { projects } = useAppSelector(state => state.projects)
  const [showModal, setShowModal] = useState<number>(-1);

  const projectCardHandler = (id: number) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setShowModal(id);
    }
  }
  return (
    <>
      {projects.map((project, id) =>
        <ProjectCard key={id} project={project} onClick={projectCardHandler(id)} />)}
      
      {showModal >= 0 && <ProjectModal project={projects[showModal]}/>}
    </>
  )
}

export default Projects