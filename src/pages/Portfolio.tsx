import React from 'react'
import { useAppSelector } from './../hooks/redux';

const Portfolio = () => {
  const s = useAppSelector((state) => state.projects);
  console.log(s);
  
  return (
    <div>
    </div>
  )
}

export default Portfolio