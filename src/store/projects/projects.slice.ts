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

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject(state, action: PayloadAction<IProject>) {
      state.projects.push(action.payload);
    },
    sortProjects(state, action: PayloadAction<SortType>) {
      state.filter.sort = action.payload;
    },
    filterByType(state, action: PayloadAction<ProjectTypesType>) {
      state.filter.type = action.payload;
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
    },
    resetFilter(state) {
      state.filter = initialState.filter;
    },
  },
});

export const projectsActions = projectsSlice.actions;
export const projectsReducer = projectsSlice.reducer;
