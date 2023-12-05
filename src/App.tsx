import { useState } from 'react'
import { Route, Routes } from 'react-router';
import { routes } from './routes/index';

function App() {

  return (
    <>
      <Routes>
        {routes.map((route, id) =>
          <Route key={id} path={route.path} element={route.element} />)}
      </Routes>
    </>
  )
}

export default App
