import { useState } from 'react'
import { Route, Routes } from 'react-router';
import { routes } from './routes/index';

function App() {

  return (
    <>
      <Routes>
        {routes.map((route) =>
          <Route path={route.path} element={route.element} />)}
      </Routes>
    </>
  )
}

export default App
