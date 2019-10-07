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

  const [list, { set, push, clear, filter, sort }] = useList()

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
        axios-hooks
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
        to="/greetings"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
        }}>
        Next! <FontAwesomeIcon icon={faArrowRight} />
      </Link>
      {(loadingUsers || loadingPosts) && <FontAwesomeIcon icon={faCircleNotch} spin size="2x" />}
      <div
        style={{
          maxHeight: '40%',
          overflowY: 'auto',
        }}>
        {!loadingUsers && users && (
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

        <button onClick={clear} disabled={!users}>
          Clear elements
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>

        <button onClick={() => filter(user => user.name[0] === 'C')} disabled={!users}>
          Filter elements
          <FontAwesomeIcon icon={faFilter} />
        </button>

        <button
          onClick={() =>
            sort((a, b) => {
              const nameA = a.name.toUpperCase() // ignore upper and lowercase
              const nameB = b.name.toUpperCase() // ignore upper and lowercase

              if (nameA < nameB) {
                return -1
              }
              if (nameA > nameB) {
                return 1
              }

              // names must be equal
              return 0
            })
          }
          disabled={!users}>
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
