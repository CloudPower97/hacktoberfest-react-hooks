import React from 'react'
import logo from './assets/img/logo.svg'
import './App.scss'
import LogoAbstract from './assets/img/logo_abstract.svg'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1
          style={{
            fontFamily: "'Inconsolata', monospace",
          }}>
          React hooked me up!
        </h1>
        <Link to="/boring-class-component">Let's Start Hacking!</Link>
      </header>
      <img id="logo-abstract" src={LogoAbstract} alt="Logo Abstract-Technolgy" />
    </div>
  )
}

export default App
