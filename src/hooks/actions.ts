import { useDispatch } from "react-redux";
import { projectsActions } from "../store/projects/projects.slice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { languageActions } from "../store/language/language.slice";

const actions = {
      ...projectsActions,
      ...languageActions
}
export const useActions = () => {
      const dispatch = useDispatch();
      return bindActionCreators(actions, dispatch);
}