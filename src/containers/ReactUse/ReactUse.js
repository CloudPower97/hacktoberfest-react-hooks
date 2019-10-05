import React, { useEffect } from 'react'
import { useCounter, useUpdateEffect } from 'react-use'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Star from '../../assets/emoji/star.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faArrowRight,
  faPlusCircle,
  faMinusCircle,
} from '@fortawesome/free-solid-svg-icons'

const ReactUse = ({ history }) => {
  const [counter, { inc, dec, get, set, reset }] = useCounter(0)

  useEffect(() => {
    console.log('We will now see react-use in action!')
  }, [])

  useUpdateEffect(() => {
    console.log("You will see this in the console whenever the component updates it's state")
  }, [counter])

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
          onClick={() => inc(1)}
          style={{
            width: '25%',
          }}>
          Increment Counter
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
        <button
          onClick={() => dec(1)}
          style={{
            width: '25%',
          }}>
          Decrement Counter
          <FontAwesomeIcon icon={faMinusCircle} />
        </button>
        <button
          onClick={() => set(10)}
          style={{
            width: '25%',
          }}>
          Set counter to 10
        </button>
        <button
          onClick={reset}
          style={{
            width: '25%',
          }}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default ({ location: { pathname } }) => (
  <Switch>
    <Route path={pathname} component={ReactUse} />
    <Redirect to={pathname} />
  </Switch>
)
