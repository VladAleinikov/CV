import { ReactElement } from "react"
import Portfolio from "../pages/Portfolio"
import InDeveloping from "../pages/InDeveloping"

interface IRoutes {
            path: string,
            element: ReactElement,
      }


export const routes: IRoutes[] = [
      { path: '/', element: <Portfolio /> },
      { path: '/about', element: <InDeveloping /> },
      { path: '/expirience', element: <InDeveloping /> },
      { path: '/education', element: <InDeveloping /> },
      { path: '/projects', element: <Portfolio /> }
]