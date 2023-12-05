import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import projects from '../../static/projects.json'

interface IProject {
  title: string;
  subtitle: string;
  technologies: string[];
  previewUrl: string;
  date: string;
  figmaLink: string;
  GithubLink: string;
  link: string;
}

interface IProjectsState {
  projects:Array<IProject>
}

const initialState: IProjectsState = {projects: projects};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject(state, action: PayloadAction<IProject>) {
      state.projects.push(action.payload);
    },
  },
});

export const projectsActions = projectsSlice.actions;
export const projectsReducer = projectsSlice.reducer;