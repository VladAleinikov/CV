import { useDispatch } from "react-redux";
import { projectsActions } from "../store/projects/projects.slice";
import { bindActionCreators } from "@reduxjs/toolkit";

const actions = {
      ...projectsActions
}
export const useActions = () => {
      const dispatch = useDispatch();
      return bindActionCreators(actions, dispatch);
}