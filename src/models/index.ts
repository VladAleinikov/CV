import { ReactElement } from "react";

export interface IProject {
      title: string;
      subtitle: string;
      technologies: string[];
      preview: string;
      date: string;
      figmaLink: string;
      GithubLink: string;
      link: string;
}
export interface IIcon {
      "css": ReactElement,
      "js": ReactElement,
      "php": ReactElement,
      "html": ReactElement,
      "react": ReactElement,
      "scss": ReactElement
}