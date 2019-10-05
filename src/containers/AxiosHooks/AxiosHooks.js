import React from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Star from '../../assets/emoji/star.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import useAxios from 'axios-hooks'

const AxiosHook = ({ history }) => {
  const [{ data, error, loading }, refetch] = useAxios('https://jsonplaceholder.typicode.com/posts')
  const [{ data: manualData, error: manualError, loading: manualLoading }] = useAxios('', {
    manual: true,
  })

  return (
    <div className="boring-class-component-wrapper">
      <h1
        style={{
          display: 'inline-flex',
          alignContent: 'center',
        }}>
        Axios Hooks
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
        to="/react-use/events"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
        }}>
        Next! <FontAwesomeIcon icon={faArrowRight} />
      </Link>
      <pre
        style={{
          fontSize: 'x-large',
        }}>
        {JSON.stringify(data)}
      </pre>
      <div className="boring-class-component-btn-wrapper">
        <button
          style={{
            width: '25%',
          }}>
          Refetch
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>
    </div>
  )
}

export default ({ match: { path } }) => (
  <Switch>
    <Route exact path={path} component={AxiosHook} />
    <Redirect to={path} />
  </Switch>
)
