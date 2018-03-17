import React, { Component } from 'react'
import Root from './components/Root'
import { Provider } from 'mobx-react'
import AppStore from './stores/AppStore'

export default class App extends Component {
  render() {
    return (
      <Provider AppStore={AppStore}>
        <Root />
      </Provider>
    )
  }
}