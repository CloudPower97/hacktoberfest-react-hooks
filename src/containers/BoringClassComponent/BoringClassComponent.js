import React, { Component } from 'react'
import './BoringClassComponent.scss'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Bored from '../../assets/emoji/bored.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faArrowRight,
  faPlusCircle,
  faMinusCircle,
} from '@fortawesome/free-solid-svg-icons'

class BoringClassComponent extends Component {
  // * Old Fashion Code Style :P
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     counter: 0
  //   }
  //   this.handleIncrement = this.handleIncrement.bind(this)
  //   this.handleDecrement = this.handleDecrement.bind(this)
  //   this.handleToggle = this.handleToggle.bind(this)
  // }
  //
  // handleIncrement(delta) {
  //   this.setState(prevState => ({
  //     counter: prevState.counter + delta,
  //   }))
  // }
  //
  // handleDecrement(delta) {
  //   this.setState(prevState => ({
  //     counter: prevState.counter - delta,
  //   }))
  // }
  //
  // handleToggle() {
  //   this.setState(prevState => ({
  //     useless: !prevState.useless,
  //   }))
  // }

  state = {
    counter: 0,
    useless: false,
  }

  handleIncrement = (delta = 1) => {
    this.setState(prevState => ({
      counter: prevState.counter + delta,
    }))
  }

  handleDecrement = (delta = 1) => {
    this.setState(prevState => ({
      counter: prevState.counter - delta,
    }))
  }

  handleToggle = () => {
    this.setState(prevState => ({
      useless: !prevState.useless,
    }))
  }

  componentDidMount() {
    console.log("I'm a boring class component!")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("You will see this in the console whenever the component updates it's state")

    if (prevState.counter !== this.state.counter) {
      console.log('You will only see this in the console when the counter updates')
    }
  }

  componentWillUnmount() {
    console.log(
      'You will see this in the console when the components is going to be removed from the DOM'
    )
  }

  render() {
    const { counter } = this.state
    const { history } = this.props

    return (
      <div className="boring-class-component-wrapper">
        <h1>
          Boring Class Component...{' '}
          <img
            src={Bored}
            alt=""
            style={{
              height: 40,
            }}
          />
        </h1>
        <button
          onClick={history.goBack}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
          }}>
          <FontAwesomeIcon icon={faArrowLeft} /> Go Back
        </button>
        <Link
          to="/awesome-functional-component"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
          }}>
          Next! <FontAwesomeIcon icon={faArrowRight} />
        </Link>
        <p
          style={{
            fontSize: 'x-large',
          }}>
          Click Count: {counter}
        </p>
        <div className="boring-class-component-btn-wrapper">
          <button
            onClick={() => this.handleIncrement()}
            style={{
              width: '25%',
            }}>
            Increment Counter
            <FontAwesomeIcon icon={faPlusCircle} />
          </button>

          <button
            onClick={() => this.handleDecrement()}
            style={{
              width: '25%',
            }}>
            Decrement Counter
            <FontAwesomeIcon icon={faMinusCircle} />
          </button>

          <button
            onClick={() => this.handleToggle()}
            style={{
              width: '25%',
            }}>
            Trigger a fake update of the component
          </button>
        </div>
      </div>
    )
  }
}

export default ({ location: { pathname } }) => (
  <Switch>
    <Route to={pathname} component={BoringClassComponent} />
    <Redirect to={pathname} />
  </Switch>
)
