import * as React from 'react'
import './App.css'
import Hello from './Hello'

const logo = require('./logo.svg')

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Reacttt</h2>
        </div>
        <p className="App-intro">
          <Hello namerino={'bla'} theme='yellow' />
        </p>
      </div>
    );
  }
}

export default App
