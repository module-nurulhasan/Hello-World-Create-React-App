//import React from 'react';
import React, {Component} from 'react'
import ReactDOM from 'react-dom';



/*
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}
*/

//we're loading the Component as a property of React, so we no longer need to extend React.Component.
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
