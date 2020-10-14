import { Phones } from '../pages/Phones'
import { About } from '../pages/About'

export const routes = [
  { path: '/', component: Phones, exact: true },
  { path: '/about', component: About, exact: true },
]
