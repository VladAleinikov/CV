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
  type: "Всё" | "Верстка" | "Веб-приложение" | "Pet-проект";
  content: string;
}
export interface IIcon {
  css: ReactElement;
  js: ReactElement;
  php: ReactElement;
  html: ReactElement;
  react: ReactElement;
  scss: ReactElement;
  typescript: ReactElement;
  redux: ReactElement;
}
export interface IFilter {
  sort: SortType;
  technologies: "Всё" | string[];
  type: ProjectTypesType;
}
export type SortType = "По умолчанию" | "Сначала новые" | "Сначала старые";
export type ProjectTypesType =
  | "Всё"
  | "Вёрстка"
  | "Веб-приложение"
  | "Pet-проект";
