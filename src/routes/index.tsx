import { ReactElement } from "react";
import Portfolio from "../pages/Portfolio";
import InDeveloping from "../pages/InDeveloping";
import { Navigate } from "react-router";

interface IRoutes {
  path: string;
  element: ReactElement;
}

export const routes: IRoutes[] = [
  { path: "/cv/", element: <Portfolio /> },
  { path: "/cv/about", element: <InDeveloping /> },
  { path: "/cv/education", element: <InDeveloping /> },
  { path: "/cv/skills", element: <InDeveloping /> },
  { path: "/cv/projects", element: <Portfolio /> },
  { path: "*", element: <Navigate to="/cv/" replace />},
];
