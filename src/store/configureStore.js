import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {i18nReducer} from 'react-redux-i18n'

import LangReducer from '../components/i18n/reducers'

const rootReducer = combineReducers({
  i18n: i18nReducer,
  langs: LangReducer
})

let enhancer = applyMiddleware(
  thunk,
)

if (typeof window !== 'undefined') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  enhancer = composeEnhancers(applyMiddleware(thunk))
}

export default (initialState) => createStore(
  rootReducer,
  initialState,
  enhancer
  /*compose(
    applyMiddleware(
      thunk,
    ),
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )*/
)
