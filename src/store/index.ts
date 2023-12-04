import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { projectsSlice } from "./projects/projects.slice";

export const store = configureStore({
      reducer: {
            projects: projectsSlice
      }
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;