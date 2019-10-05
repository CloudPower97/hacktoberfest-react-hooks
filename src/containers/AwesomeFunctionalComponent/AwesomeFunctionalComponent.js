import React, { useState, useEffect, useRef } from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
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
  const [, setUseless] = useState(false)
  const initialMount = useRef(true)
  const counterMount = useRef(true)

  useEffect(() => {
    console.log("I'm an awesome functional component")

    return () => {
      console.log(
        'You will see this in the console when the components is going to be removed from the DOM'
      )
    }
  }, [])

  useEffect(() => {
    const { current } = initialMount

    if (!current) {
      console.log("You will see this in the console whenever the component updates it's state")
    } else {
      initialMount.current = false
    }
  })

  useEffect(() => {
    const { current } = counterMount

    if (!current) {
      console.log('You will only see this in the console when the counter updates')
    } else {
      counterMount.current = false
    }
  }, [counter])

  const handleIncrement = () => {
    setCounter(prev => prev + 1)
  }

  const handleDecrement = () => {
    setCounter(prev => prev - 1)
  }

  const handleToggle = () => {
    setUseless(prev => !prev)
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

        <button
          onClick={handleToggle}
          style={{
            width: '25%',
          }}>
          Trigger a fake update of the component
        </button>
      </div>
    </div>
  )
}

export default ({ location: { pathname } }) => (
  <Switch>
    <Route path={pathname} component={AwesomeFunctionalComponent} />
    <Redirect to={pathname} />
  </Switch>
)
