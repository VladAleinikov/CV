import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import projects from "../../static/projects.json";
import { IFilter, IProject, ProjectTypesType, SortType } from "../../models";



interface IProjectsState {
  projects: Array<IProject>;
  filter: IFilter;
}

const initialState: IProjectsState = {
  projects: projects,
  filter: {
    sort: "По умолчанию",
    technologies: "Всё",
    type: "Всё",
  },
};

const filterProjects = (filter: IFilter): Array<IProject> => {
  return initialState.projects
    .filter((project) =>
      filter.technologies === "Всё"
        ? true
        : project.technologies.filter((tech) =>
            filter.technologies.includes(tech)
          ).length
    )
    .filter((project) =>
      filter.type === "Всё" ? true : project.type === filter.type
    );
};
const sortProjects = ({
  projects,
  filter,
}: IProjectsState): Array<IProject> => {
  return filter.sort === "По умолчанию"
    ? initialState.projects
    : projects.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();

        return (filter.sort === "Сначала новые" ? 1 : -1) * (dateB - dateA);
      });
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    sortProjects(state, action: PayloadAction<SortType>) {
      state.filter.sort = action.payload;
      state.projects = sortProjects(state);
    },
    filterByType(state, action: PayloadAction<ProjectTypesType>) {
      state.filter.type = action.payload;
      state.projects = filterProjects(state.filter);
    },
    toggleTechnologies(state, action: PayloadAction<string>) {
      if (action.payload === "Всё") {
        state.filter.technologies = action.payload;
      } else if (Array.isArray(state.filter.technologies)) {
        if (state.filter.technologies.includes(action.payload)) {
          const filtered = state.filter.technologies.filter(
            (tech) => tech != action.payload
          );

          state.filter.technologies = filtered.length ? filtered : "Всё";
        } else {
          state.filter.technologies.push(action.payload);
        }
      } else {
        state.filter.technologies = [action.payload];
      }
      state.projects = filterProjects(state.filter);
    },
    resetFilter(state) {
      state.projects = initialState.projects;
      state.filter = initialState.filter;
    },
  },
});

export const projectsActions = projectsSlice.actions;
export const projectsReducer = projectsSlice.reducer;
