import React, { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import Filter from "./Filter/index";
import Modal from "../Modal";

const Projects = () => {
  const { language } = useAppSelector((state) => state.language);
  const { projects } = useAppSelector((state) => state.projects);
  const [showModal, setShowModal] = useState<number>(-1);

  const projectCardHandler = (id: number) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setShowModal(id);
    };
  };
  return (
    <div className="projects-container">
      <Filter />
      <div className="projects__list">
        {projects.map((project, id) => (
          <ProjectCard
            key={id}
            project={{
              ...project,
              title:
                language === "ru" ? project.title : project.projectEn.title,
            }}
            onClick={projectCardHandler(id)}
          />
        ))}
      </div>

      {showModal >= 0 && (
        <Modal setShowModal={setShowModal}>
          <ProjectModal
            project={
              language === "ru"
                ? projects[showModal]
                : projects[showModal].projectEn
            }
          />
        </Modal>
      )}
    </div>
  );
};

export default Projects;
