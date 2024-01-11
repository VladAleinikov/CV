import { useWords } from "../../../hooks/words";
import { IProject, IProjectEn } from "../../../models";

const ProjectModal = ({ project }: { project: IProject | IProjectEn }) => {
  const words = useWords(
    ["Ссылки:", "Проект", "Макет", "Github", "Описание:"],
    ["Links:", "Project", "Layout", "Github", "Description"]
  );
  return (
    <div className="project-modal">
      <h3 className="project-modal__title">{project.title}</h3>
      <img
        className="project-modal__preview"
        src={"/cv/assets/projects/previews/" + project.preview}
        alt="project-preview"
      />
      <p className="project-modal__subtitle">{project.subtitle}</p>
      <p className="project-modal__links">{words.next().value}</p>
      <ul className="project-modal__links-list">
        <li className="links-list__link">
          {project.link && (
            <a href={project.link} target="_blank">
              {words.next().value}
            </a>
          )}
        </li>
        <li className="links-list__link">
          {project.figmaLink && (
            <a href={project.figmaLink} target="_blank">
              {words.next().value}
            </a>
          )}
        </li>
        <li className="links-list__link">
          {project.GithubLink && (
            <a href={project.GithubLink} target="_blank">
              {words.next().value}
            </a>
          )}
        </li>
      </ul>
      <h3>{words.next().value}:</h3>
      <article
        className="project-modal__content"
        dangerouslySetInnerHTML={{ __html: project.content }}
      ></article>
    </div>
  );
};

export default ProjectModal;
