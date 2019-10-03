import React, { Component } from 'react'
import './BoringClassComponent.scss'
import { Link } from 'react-router-dom'
import Bored from '../../assets/emoji/bored.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faArrowRight,
  faPlusCircle,
  faMinusCircle,
} from '@fortawesome/free-solid-svg-icons'

export default class BoringClassComponent extends Component {
  state = {
    counter: 0,
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }))
  }

  handleDecrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
    }))
  }

  render() {
    const { counter } = this.state
    const { history } = this.props

    return (
      <div className="boring-class-component-wrapper">
        <h1>
          {' '}
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
            onClick={this.handleIncrement}
            style={{
              width: '25%',
            }}>
            Increment Counter
            <FontAwesomeIcon icon={faPlusCircle} />
          </button>
          <button
            onClick={this.handleDecrement}
            style={{
              width: '25%',
            }}>
            Decrement Counter
            <FontAwesomeIcon icon={faMinusCircle} />
          </button>
        </div>
      </div>
    )
  }
}
