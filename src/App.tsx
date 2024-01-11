import { Route, Routes } from 'react-router';
import { routes } from './routes/index';
import Aside from './components/Aside';
import NoMobilePage from './pages/NoMobilePage';
import Language from './components/Language';
declare module "react" {
  interface HTMLAttributes<T> {
    popovertarget?: any;
    popover?: any;
  }
}

function App() {
  if (window.outerWidth <= 1280) {
    return (<NoMobilePage/>);
  }


  return (
    <main>
      <Aside/>
      <Routes>
        {routes.map((route, id) =>
          <Route key={id} path={route.path} element={route.element} />)}
      </Routes>
      <Language/>
    </main>
  )
}

export default App
