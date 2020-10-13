import React from 'react'
import './Button.scss'

const Button = ({
  type = 'button',
  btnClick,
  children,
  color = 'secondary',
}) => {
  return (
    <button type={type} className={`btn btn-${color}`} onClick={btnClick}>
      {children}
    </button>
  )
}

export { Button }
