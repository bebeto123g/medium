import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

import { rootReducer } from './reducers'


export const history = createBrowserHistory()

const middlewares = [thunk, routerMiddleware(history)]

export const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)
