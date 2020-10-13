import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { routes } from './routes'

const SwitchRoutes = () => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route key={route.path + i} {...route} />
      ))}
      <Redirect to={'/'} />
    </Switch>
  )
}

export { SwitchRoutes }
