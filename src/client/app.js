import React from 'react'
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import {Provider} from "react-redux"
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n'

import App from "../components/app"

import createStore from '../store/configureStore'
import translations from '../locale'

const store = createStore(window.REDUX_DATA)


syncTranslationWithStore(store)
store.dispatch(loadTranslations(translations))
store.dispatch(setLocale('en'))

ReactDOM.hydrate((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById("app"))
