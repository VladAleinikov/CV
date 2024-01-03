import { useState } from 'react'
import { Route, Routes } from 'react-router';
import { routes } from './routes/index';
import Aside from './components/Aside';
import NoMobilePage from './pages/NoMobilePage';

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
    </main>
  )
}

export default App
