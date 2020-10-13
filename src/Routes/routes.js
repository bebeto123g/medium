import { Home } from '../pages/Home'
import { About } from '../pages/About'

export const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/about', component: About, exact: true },
]
