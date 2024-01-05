import { ReactElement } from "react"
import Portfolio from "../pages/Portfolio"
import InDeveloping from "../pages/InDeveloping"
import About from "../pages/About"

interface IRoutes {
            path: string,
            element: ReactElement,
      }


export const routes: IRoutes[] = [
      { path: '/', element: <Portfolio /> },
      { path: '/about', element: <InDeveloping /> },
      { path: '/education', element: <InDeveloping /> },
      { path: '/skills', element: <InDeveloping /> },
      { path: '/projects', element: <Portfolio /> }
]