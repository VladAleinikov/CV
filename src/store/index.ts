import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { projectsReducer } from "./projects/projects.slice";

export const store = configureStore({
      reducer: {
            projects: projectsReducer
      }
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;