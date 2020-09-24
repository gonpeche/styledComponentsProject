import React from 'react'
import Login from 'components/pages/Login'
import Home from 'components/pages/Home'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script';
  }
`
const theme = {
  primaryColor: '#f8049c',
  secondaryColor: '#fdd54f',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </ ThemeProvider>
  )
}

export default App
