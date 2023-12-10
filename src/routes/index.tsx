import { ReactElement } from "react"
import Portfolio from "../pages/Portfolio"

interface IRoutes {
            path: string,
            element: ReactElement,
      }


export const routes: IRoutes[] = [
      { path: '/', element: <Portfolio /> },
      { path: '/projects', element: <Portfolio /> }
]