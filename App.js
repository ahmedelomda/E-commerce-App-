import React, { Component } from 'react';
import './Components/App.css';
// Router
import AppRouter from './Navigation';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppRouter />
      </React.Fragment>
    )
  }
}

export default App;

// named export --> export { App }
// default export ----> export default App