import React, { useEffect, useRef } from 'react'
import { useCounter, useUpdateEffect, useToggle, useEvent, useFullscreen } from 'react-use'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Star from '../../assets/emoji/star.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faArrowRight,
  faPlusCircle,
  faMinusCircle,
} from '@fortawesome/free-solid-svg-icons'
import Tux from '../../assets/img/tux.png'

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
        to="/axios-hooks"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
        }}>
        Next! <FontAwesomeIcon icon={faArrowRight} />
      </Link>

      <img src={Tux} alt="Tux, the Linux mascotte" width={250} ref={ref} />

      <div className="boring-class-component-btn-wrapper">
        <button
          onClick={toggle}
          style={{
            width: '25%',
          }}>
          Open image in full screen
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>
    </div>
  )
}

const Events = ({ history }) => {
  useEvent('abstract-hacktoberfest', () => {
    console.log('Custom event catched!')
  })

  return (
    <div className="boring-class-component-wrapper">
      <h1
        style={{
          display: 'inline-flex',
          alignContent: 'center',
        }}>
        More hooks!
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
        to="/react-use/useFullscreen"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
        }}>
        Next! <FontAwesomeIcon icon={faArrowRight} />
      </Link>
      <div className="boring-class-component-btn-wrapper">
        <button
          onClick={() => {
            const event = new Event('abstract-hacktoberfest')
            window.dispatchEvent(event)
          }}
          style={{
            width: '25%',
          }}>
          Dispatch event
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>
    </div>
  )
}

const ReactUse = ({ history }) => {
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

        <button
          onClick={toggleUseless}
          style={{
            width: '25%',
          }}>
          Trigger a fake update of the component
        </button>
      </div>
    </div>
  )
}

export default ({ match: { path } }) => (
  <Switch>
    <Route exact path={path} component={ReactUse} />
    <Route path={`${path}/useEvents`} component={Events} />
    <Route path={`${path}/useFullscreen`} component={Fullscreen} />
    <Redirect to={path} />
  </Switch>
)
