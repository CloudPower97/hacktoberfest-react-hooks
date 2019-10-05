import React from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import { useList, useUpdateEffect } from 'react-use'
import Star from '../../assets/emoji/star.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import useAxios from 'axios-hooks'

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
      {loadingUsers && <p>Loading Users</p>}
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
      <div className="boring-class-component-btn-wrapper">
        <button
          style={{
            width: '25%',
          }}
          onClick={refetchPosts}>
          Refetch Posts
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
        <button
          style={{
            width: '25%',
          }}
          onClick={fetchUser}>
          Fetch Users
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
        <button
          onClick={() => {
            push(new Date().toDateString())
          }}
          style={{
            width: '25%',
          }}>
          Push new element
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>

        <button
          onClick={clear}
          style={{
            width: '25%',
          }}>
          Clear all elements
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>

        <button
          onClick={() => filter(user => user.name[0] === 'C')}
          style={{
            width: '25%',
          }}>
          Filter elements
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>

        <button
          style={{
            width: '25%',
          }}>
          Sort elements
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
