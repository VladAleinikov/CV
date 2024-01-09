import { MouseEventHandler } from 'react'
import { IProject } from '../../../models'
import { icons } from '../../Icons';

const ParseDate = (date: string): string => {
  const dateParsed = new Date(date).toLocaleDateString("en-GB");
  return dateParsed;
}
const ProjectCard = ({ project, onClick }: { project: IProject, onClick: MouseEventHandler }) => {
  const { title, technologies, preview, date } = project;
  return (
    <div onClick={onClick} className='projects__project-card'>
      <img src={"/assets/projects/previews/" + preview} alt="project-preview" className='project-card__img' />
      <ul className="project-card__technologies">
        {technologies.map((technology, id) =>
          <li className='technologies__technology' key={id}>
            {icons[technology as keyof typeof icons]}
          </li>)}
      </ul>
      <p className="project-card__date">{ParseDate(date)}</p>
      <h3 className="project-card__title">{title}</h3>
    </div>
  )
}

export default ProjectCard