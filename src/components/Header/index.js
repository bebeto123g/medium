import React from 'react'
import './Header.scss'
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/about'}>About</NavLink>
    </nav>
  )
}

export { Header }
