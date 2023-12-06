import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='aside__navigation'>
      <ul className='navigation__links'>
        <li className='links__link'><Link to='/about'>Обо мне</Link></li>
        <li className='links__link'><Link to='/expirience'>Опыт</Link></li>
        <li className='links__link'><Link to='/education'>Образование</Link></li>
        <li className='links__link active'><Link to='/projects'>Проекты</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation