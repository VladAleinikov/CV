import React, { MouseEventHandler } from 'react'
import { IProject } from '../../../models'


const ProjectCard = ({ project, onClick }: { project: IProject, onClick: MouseEventHandler }) => {
  
  return (
    <div onClick={onClick}>aaa</div>
  )
}

export default ProjectCard