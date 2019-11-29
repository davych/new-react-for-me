import React, { Component } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { Provider } from 'react-redux'
import './App.css'
import Routes from './routes'
import theme from './theme'
import configStore from './configStore'
const store = configStore()
window.store = store
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default App
