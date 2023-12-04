import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import projects from '../../static/projects.json'

interface IProjectsState {
      title: string
      subtitle: string
      technologies: string[]
      previewUrl: string
      date: string
      figmaLink: string
      GithubLink: string
      link: string
}

const initialState: IProjectsState[] = projects;

export const projectsSlice = createSlice({
      name: "projects",
      initialState,
      reducers: {
            addProject(state, action: PayloadAction<IProjectsState>) {
                  state.push(action.payload)
            }
      }
})

export const projectsActions = projectsSlice.actions;
export const projectsReducer = projectsSlice.reducer;