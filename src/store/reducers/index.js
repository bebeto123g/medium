import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { phonesReducer } from './phonesReducer'
import { phonesPageReducer } from './phonesPageReducer'

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    phonesReducer,
    phonesPageReducer
  })
