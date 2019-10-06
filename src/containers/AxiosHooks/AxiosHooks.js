import React from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import { useList, useUpdateEffect } from 'react-use'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faArrowRight,
  faPlusCircle,
  faCircleNotch,
  faSyncAlt,
  faCloudDownloadAlt,
  faFilter,
  faSortAlphaUp,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'
import useAxios from 'axios-hooks'
import LoveYou from '../../assets/emoji/love-you.png'

const AxiosHook = ({ history }) => {
  const [{ data: posts, error: errorPosts, loading: loadingPosts }, refetchPosts] = useAxios(
    'https://jsonplaceholder.typicode.com/posts'
  )
  const [{ data: users, error: errorUsers, loading: loadingUsers }, fetchUser] = useAxios(
    'https://jsonplaceholder.typicode.com/users',
    {
      manual: true,
    }
  )

  const [list, { set, push, clear, updateAt, remove, filter, sort }] = useList()

  useUpdateEffect(() => {
    set(users)
  }, [users])

  return (
    <div className="boring-class-component-wrapper">
      <h1
        style={{
          display: 'inline-flex',
          alignContent: 'center',
        }}>
        Axios Hooks
        <img
          src={LoveYou}
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
      {(loadingUsers || loadingPosts) && (
        <FontAwesomeIcon
          icon={faCircleNotch}
          spin
          size="5x"
          // style={{
          //   position: 'absolute',
          //   top: '50%',
          //   left: '50%',
          //   transform: 'translate(-50%, -50%)',
          // }}
        />
      )}
      <div
        style={{
          maxHeight: '40%',
          overflowY: 'auto',
        }}>
        {users && (
          <ul>
            {list.map(({ name }, index) => (
              <li key={index} className="bullet">
                <span
                  style={{
                    color: 'white',
                  }}>
                  {name}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="btn-wrapper">
        <button onClick={refetchPosts}>
          Refetch Posts
          <FontAwesomeIcon icon={faSyncAlt} />
        </button>
        <button onClick={fetchUser}>
          Fetch Users
          <FontAwesomeIcon icon={faCloudDownloadAlt} />
        </button>
        <button
          onClick={() => {
            push({ name: 'Claudio Cortese' })
          }}
          disabled={!users}>
          New element
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>

        <button onClick={clear}>
          Clear elements
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>

        <button onClick={() => filter(user => user.name[0] === 'C')}>
          Filter elements
          <FontAwesomeIcon icon={faFilter} />
        </button>

        <button onClick={() => sort((a, b) => b > a)}>
          Sort elements
          <FontAwesomeIcon icon={faSortAlphaUp} />
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
