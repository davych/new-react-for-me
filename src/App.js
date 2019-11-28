import React, { Component } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { Provider } from 'react-redux'
import './App.css'
import Routes from './routes'
import theme from './theme'
import configStore from './configStore'
class App extends Component {
  render () {
    return (
      <Provider store={configStore()}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default App
