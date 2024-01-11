import { createSlice } from "@reduxjs/toolkit";
import { ILanguage } from "../../models";
const LS_LANG_KEY = "language";
const initialState: ILanguage = {
  language: localStorage.getItem(LS_LANG_KEY) === "en" ? "en" : "ru",
};
export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage(state) {
      state.language = state.language === "ru" ? "en" : "ru";
      localStorage.setItem(LS_LANG_KEY, state.language);
    },
  },
});

export const languageActions = languageSlice.actions;
export const languageReducer = languageSlice.reducer;
