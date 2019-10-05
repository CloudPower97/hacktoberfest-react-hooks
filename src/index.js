import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import ReactUse from './containers/ReactUse'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import BoringClassComponent from './containers/BoringClassComponent'
import AwesomeFunctionalComponent from './containers/AwesomeFunctionalComponent'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/boring-class-component" component={BoringClassComponent} />
      <Route path="/awesome-functional-component" component={AwesomeFunctionalComponent} />
      <Route path="/react-use" component={ReactUse} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
