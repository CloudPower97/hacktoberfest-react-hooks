import React, { useState } from 'react'
// import './BoringClassComponent.scss'
import { Link } from 'react-router-dom'
import Star from '../../assets/emoji/star.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faArrowRight,
  faPlusCircle,
  faMinusCircle,
} from '@fortawesome/free-solid-svg-icons'

const AwesomeFunctionalComponent = ({ history }) => {
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter(prev => prev + 1)
  }

  const handleDecrement = () => {
    setCounter(prev => prev - 1)
  }

  return (
    <div className="boring-class-component-wrapper">
      <h1
        style={{
          display: 'inline-flex',
          alignContent: 'center',
        }}>
        Awesome Functional Component!
        <img
          src={Star}
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
        to="/react-use"
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
          onClick={handleIncrement}
          style={{
            width: '25%',
          }}>
          Increment Counter
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
        <button
          onClick={handleDecrement}
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

export default AwesomeFunctionalComponent
