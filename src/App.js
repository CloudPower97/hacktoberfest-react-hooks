import React from 'react'
import logo from './assets/img/logo.svg'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Thinking from './assets/emoji/thinking.png'
import Nerd from './assets/emoji/nerd.png'
import LightBulb from './assets/emoji/light-bulb.png'
import Books from './assets/emoji/books.png'

const QuickRecap = ({ history }) => (
  <>
    <h1
      style={{
        fontFamily: "'Inconsolata', monospace",
      }}>
      A quick recap <img src={Books} alt="Books" />
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
      to="/boring-class-component"
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
      }}>
      Next! <FontAwesomeIcon icon={faArrowRight} />
    </Link>

    <div
      style={{
        padding: 25,
        overflowY: 'auto',
        height: '55%',
      }}>
      <p>
        You should be already familiar with at least Array Destructuring and Object Destructuring
      </p>
    </div>

    <div className="btn-wrapper">
      <Link
        to="/boring-class-component"
        style={{
          columnSpan: 'all',
          gridColumnEnd: 3,
          gridColumnStart: 1,
        }}>
        Without any further do, let's start coding together!
      </Link>
    </div>
  </>
)

const WhatYouWillLearn = ({ history }) => (
  <>
    <h1
      style={{
        fontFamily: "'Inconsolata', monospace",
      }}>
      What you will learn <img src={Nerd} alt="Nerd" />
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
      to="recap"
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
      }}>
      Next! <FontAwesomeIcon icon={faArrowRight} />
    </Link>

    <div
      style={{
        padding: 25,
        overflowY: 'auto',
        height: '55%',
      }}>
      <p>
        After this workshop you will have a good knowledge of hooks and how to use them effectively.
      </p>
      <p>
        If you are new to <code>React.js</code> or <code>JavaScript</code> do not worry! Before we
        deep dive into hooks, we are going to revise some basics concept and fundamentals{' '}
        <code>React.js</code> component lifecycles in both <code>ES6</code> and newer{' '}
        <code>JS</code> versions.
      </p>
      <p>
        We are also going to use some handy Open Source packages available on <code>GitHub</code>{' '}
        and distributed through <code>NPM</code>.
      </p>
      <p>
        In full <code>Hacktoberfest</code> spirit, I encourage you to contribute to these{' '}
        <code>FOSS</code> packages.
      </p>
    </div>
  </>
)

const HooksMotivation = ({ history }) => (
  <>
    <h1
      style={{
        fontFamily: "'Inconsolata', monospace",
      }}>
      Motivation <img src={Thinking} alt="Thinking" />
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
      to="what-you-will-learn"
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
      }}>
      Next! <FontAwesomeIcon icon={faArrowRight} />
    </Link>

    <div
      style={{
        padding: 25,
        overflowY: 'auto',
        height: '55%',
      }}>
      <h2
        style={{
          textAlign: 'left',
        }}>
        It’s hard to reuse stateful logic between components
      </h2>

      <p>
        React doesn’t offer a way to “attach” reusable behavior to a component (for example,
        connecting it to a store). If you’ve worked with React for a while, you may be familiar with
        patterns like render props and higher-order components that try to solve this.
      </p>

      <h2
        style={{
          textAlign: 'left',
        }}>
        Complex components become hard to understand
      </h2>

      <p>
        We’ve often had to maintain components that started out simple but grew into an unmanageable
        mess of stateful logic and side effects. Each lifecycle method often contains a mix of
        unrelated logic. For example, components might perform some data fetching in
        componentDidMount and componentDidUpdate. However, the same componentDidMount method might
        also contain some unrelated logic that sets up event listeners, with cleanup performed in
        componentWillUnmount. Mutually related code that changes together gets split apart, but
        completely unrelated code ends up combined in a single method. This makes it too easy to
        introduce bugs and inconsistencies.
      </p>

      <h2 style={{ textAlign: 'left' }}>Classes confuse both people and machines</h2>

      <p>
        In addition to making code reuse and code organization more difficult, we’ve found that
        classes can be a large barrier to learning React. You have to understand how this works in
        JavaScript, which is very different from how it works in most languages. You have to
        remember to bind the event handlers. Without unstable syntax proposals, the code is very
        verbose. People can understand props, state, and top-down data flow perfectly well but still
        struggle with classes. The distinction between function and class components in React and
        when to use each one leads to disagreements even between experienced React developers.
      </p>
    </div>
  </>
)

const HooksIntroduction = ({ history }) => (
  <>
    <h1
      style={{
        fontFamily: "'Inconsolata', monospace",
      }}>
      Introduction to hooks <img src={LightBulb} alt="Light Bulb" />
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
      to="motivation"
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
      }}>
      Next! <FontAwesomeIcon icon={faArrowRight} />
    </Link>

    <div
      style={{
        padding: 25,
        overflowY: 'auto',
        height: '55%',
      }}>
      <p>
        Hooks are a new addition in <code>React 16.8</code>. They let you use state and other React
        features without writing a class.
      </p>

      <p>Before we continue, note that Hooks are: </p>

      <ul
        style={{
          listStyleType: 'disc',
        }}>
        <li>
          <strong>Completely opt-in.</strong> You can try Hooks in a few components without
          rewriting any existing code. But you don’t have to learn or use Hooks right now if you
          don’t want to.
        </li>
        <li>
          <strong>100% backwards-compatible.</strong> Hooks don’t contain any breaking changes.
        </li>
        <li>
          <strong>Available now.</strong> Hooks are now available with the release of v16.8.0.
        </li>
      </ul>

      <p>
        <strong>There are no plans to remove classes from React.</strong> You can read more about
        the gradual adoption strategy for Hooks in the bottom section of this page.
      </p>

      <p>
        <strong>Hooks don’t replace your knowledge of React concepts.</strong> Instead, Hooks
        provide a more direct API to the React concepts you already know: props, state, context,
        refs, and lifecycle. As we will show later, Hooks also offer a new powerful way to combine
        them.
      </p>
    </div>
  </>
)

const App = ({ match: { path } }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1
        style={{
          fontFamily: "'Inconsolata', monospace",
        }}>
        React hooked me up!
      </h1>
      <div className="btn-wrapper">
        <Link
          to={`${path}/no-breaking-changes`}
          style={{
            columnSpan: 'all',
            gridColumnEnd: 3,
            gridColumnStart: 1,
          }}>
          Let's Start Hacking!
        </Link>
      </div>
    </header>
  </div>
)

export default ({ match: { path } }) => (
  <Switch>
    <Route exact path={path} component={App} />
    <Route path={`${path}/no-breaking-changes`} component={HooksIntroduction} />
    <Route path={`${path}/motivation`} component={HooksMotivation} />
    <Route path={`${path}/what-you-will-learn`} component={WhatYouWillLearn} />
    <Route path={`${path}/recap`} component={QuickRecap} />
    <Redirect to={path} />
  </Switch>
)
