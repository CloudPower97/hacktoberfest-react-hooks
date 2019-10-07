import React, { useEffect, useRef } from 'react'
import { useCounter, useUpdateEffect, useToggle, useEvent, useFullscreen } from 'react-use'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faArrowRight,
  faPlusCircle,
  faMinusCircle,
  faSyncAlt,
  faRetweet,
  faEquals,
} from '@fortawesome/free-solid-svg-icons'
import Tux from '../../assets/img/tux.png'
import OneHundred from '../../assets/emoji/100.png'
import CallMeHand from '../../assets/emoji/call-me-hand.png'
import Cool from '../../assets/emoji/cool.png'
import Ok from '../../assets/emoji/ok.png'

const Fullscreen = ({ history }) => {
  const ref = useRef(null)
  const [show, toggle] = useToggle(false)

  useFullscreen(ref, show, { onClose: () => toggle(false) })

  return (
    <div className="boring-class-component-wrapper">
      <h1
        style={{
          display: 'inline-flex',
          alignContent: 'center',
        }}>
        useFullscreen
        <img
          src={OneHundred}
          alt="100"
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
        to="/axios-hooks"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
        }}>
        Next! <FontAwesomeIcon icon={faArrowRight} />
      </Link>

      <img src={Tux} alt="Tux, the Linux mascotte" width={250} ref={ref} />

      <div className="btn-wrapper">
        <button
          onClick={toggle}
          style={{
            columnSpan: 'all',
            gridColumnEnd: 3,
            gridColumnStart: 1,
            justifySelf: 'stretch',
          }}>
          Open image in full screen
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>
    </div>
  )
}

const Events = ({ history }) => {
  const [catchCount, { inc }] = useCounter(0)

  useEvent('abstract-hacktoberfest', () => {
    inc(1)
  })

  useUpdateEffect(() => {
    console.log(`Custom event emitted ${catchCount} times!`)
  }, [catchCount])

  return (
    <div className="boring-class-component-wrapper">
      <h1
        style={{
          display: 'inline-flex',
          alignContent: 'center',
        }}>
        useEvent
        <img
          src={Cool}
          alt=""
          style={{
            height: 40,
          }}
        />
      </h1>
      <p>Event emitted {catchCount} times</p>
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
        to="/react-use/useFullscreen"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
        }}>
        Next! <FontAwesomeIcon icon={faArrowRight} />
      </Link>
      <div className="btn-wrapper">
        <button
          onClick={() => {
            const event = new Event('abstract-hacktoberfest')
            window.dispatchEvent(event)
          }}
          style={{
            columnSpan: 'all',
            gridColumnEnd: 3,
            gridColumnStart: 1,
            justifySelf: 'stretch',
          }}>
          Dispatch event
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>
    </div>
  )
}

const Counter = ({ history }) => {
  const [counter, { inc, dec, set, reset }] = useCounter(0)
  const [, toggleUseless] = useToggle(false)

  useEffect(() => {
    console.log('We will now see react-use in action!')
  }, [])

  useUpdateEffect(() => {
    console.log("You will see this in the console whenever the component updates it's state")
  })

  useUpdateEffect(() => {
    console.log('You will only see this in the console when the counter updates')
  }, [counter])

  return (
    <div className="boring-class-component-wrapper">
      <h1
        style={{
          display: 'inline-flex',
          alignContent: 'center',
        }}>
        useCounter
        <img
          src={CallMeHand}
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
        to="/react-use/useEvents"
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
      <div className="btn-wrapper">
        <button onClick={() => inc(1)}>
          Increment Counter
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>

        <button onClick={() => dec(1)}>
          Decrement Counter
          <FontAwesomeIcon icon={faMinusCircle} />
        </button>

        <button onClick={() => set(10)}>
          Set counter to 10
          <FontAwesomeIcon icon={faEquals} />
        </button>

        <button onClick={reset}>
          Reset
          <FontAwesomeIcon icon={faRetweet} />
        </button>

        <button
          onClick={toggleUseless}
          style={{
            columnSpan: 'all',
            gridColumnEnd: 3,
            gridColumnStart: 1,
            justifySelf: 'stretch',
          }}>
          Trigger a fake update of the component
          <FontAwesomeIcon icon={faSyncAlt} />
        </button>
      </div>
    </div>
  )
}

const Intro = ({ history }) => {
  return (
    <div
      className="boring-class-component-wrapper"
      style={{
        justifyContent: 'center',
      }}>
      <h1
        style={{
          display: 'inline-flex',
          alignContent: 'center',
        }}>
        react-use
        <img
          src={Ok}
          alt=""
          style={{
            height: 40,
          }}
        />
      </h1>

      <p>Collection of essential React Hooks.</p>
      <p>You will find the source code on GitHub</p>
      <code>npm i react-use</code>
      <p>OR</p>
      <code>yarn add react-use</code>
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
        to="/react-use/useCounter"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
        }}>
        Next! <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  )
}

export default ({ match: { path } }) => (
  <Switch>
    <Route exact path={path} component={Intro} />
    <Route exact path={`${path}/useCounter`} component={Counter} />
    <Route path={`${path}/useEvents`} component={Events} />
    <Route path={`${path}/useFullscreen`} component={Fullscreen} />
    <Redirect to={path} />
  </Switch>
)
