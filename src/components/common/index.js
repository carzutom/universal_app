import React, {Component} from 'react'
import {renderRoutes} from "react-router-config"

import './assets/css/layout.less'

class Layout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}

export default Layout
