import React from 'react'
import './Header.scss'
import { Button } from '../../UI/Button/Button'

const Header = (props) => {
  return (
    <div className="Header">
      <p>Change Header about thunk before helper</p>
      <Button color="success">Кнопка</Button>
      <Button color="danger">Кнопка</Button>
      <Button color="secondary">Кнопка</Button>
      <Button color="primary">Кнопка</Button>
      <Button color="warning">Кнопка</Button>
    </div>
  )
}

export { Header }
