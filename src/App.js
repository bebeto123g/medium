import React from 'react'
import './App.scss'
import { Header } from './components/Header'
import { SwitchRoutes } from './Routes'

const App = () => {
  return (
    <>
      <Header />
      <div className="App">
        <div className="container">
          <SwitchRoutes />
        </div>
      </div>
    </>
  )
}

export default App
