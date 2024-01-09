import { IProject } from "../../../models";

const ProjectModal = ({ project }: { project: IProject }) => {
  return (
    <div className="project-modal">
      <h3 className="project-modal__title">{project.title}</h3>
      <img
        className="project-modal__preview"
        src={"/assets/projects/previews/" + project.preview}
        alt="project-preview"
      />
      <p className="project-modal__subtitle">{project.subtitle}</p>
      <p className="project-modal__links">Ссылки:</p>
      <ul className="project-modal__links-list">
        <li className="links-list__link">
          {project.link && <a href={project.link} target="_blank">Проект</a>}
        </li>
        <li className="links-list__link">
          {project.figmaLink && <a href={project.figmaLink} target="_blank">Макет</a>}
        </li>
        <li className="links-list__link">
          {project.GithubLink && <a href={project.GithubLink} target="_blank">Github</a>}
        </li>
      </ul>
      <h3>Описание:</h3>
      <article className="project-modal__content" dangerouslySetInnerHTML={{ __html: project.content }}>
        
      </article>
    </div>
  );
};

export default ProjectModal;
