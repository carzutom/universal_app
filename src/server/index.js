import express from "express"
import path from "path"

import React from "react"
import { StaticRouter } from "react-router-dom"
import { renderToString } from "react-dom/server"
import { Provider as ReduxProvider } from "react-redux"
import Helmet from "react-helmet"
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n'
import App from "../components/app"
import htmlTemplate from "./render"
import createStore from '../store/configureStore'
import translations from '../locale'

const app = express()
const PORT = 9076

//app.use(express.static(path.resolve(__dirname, "../../dist")))
app.use(express.static(path.resolve(__dirname)))

app.get("/*", (req, res) => {
  const context = {}
  const store = createStore()

  syncTranslationWithStore(store)
  store.dispatch(loadTranslations(translations))
  store.dispatch(setLocale('en'))

  const html = (
    <ReduxProvider store={store}>
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    </ReduxProvider>)
  const reactDom = renderToString(html)
  const reduxState = store.getState()
  const helmetData = Helmet.renderStatic()

  res.writeHead(200, {"Content-Type": "text/html"})
  res.end(htmlTemplate(reactDom,reduxState,helmetData))
})

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}!`))
