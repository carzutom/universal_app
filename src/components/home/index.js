import React, {Component} from 'react'
import Helmet from "react-helmet"
import {Translate,I18n} from 'react-redux-i18n'

import logo from './assets/img/logo.svg'
import './assets/css/home.less'

import LanguageSelector from '../i18n'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="App">
        <Helmet>
          <title>{I18n.t('home.page_title')}</title>
          <meta name="description" content={I18n.t('home.page_description')} />
        </Helmet>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"><Translate value="home.title"/></h1>
        </header>
        <p className="App-intro">
          <Translate value="home.message"/>
        </p>
        <div style={{width: 166, display: 'block', position: 'relative', margin: '0 auto'}}>
          <LanguageSelector />
        </div>
      </div>
    )
  }
}

export default Home
