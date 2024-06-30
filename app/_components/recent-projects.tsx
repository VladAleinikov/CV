import { projects } from "@/data"
import { ProjectItem } from "./project-item"
import { ExpandCollapse } from "@/components/ui/expand-collapse"


export const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A selection of <span className="text-purple">my projects</span>
      </h1>
      <ExpandCollapse>
        <div className="flex flex-wrap items-center justify-center p-4 gap-24 mt-10">
          {projects.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </div>
      </ExpandCollapse>
    </div>
  );
}
