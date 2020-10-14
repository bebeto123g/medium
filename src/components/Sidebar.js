import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <nav>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/about'}>About</NavLink>
    </nav>
  )
}

export { Sidebar }
