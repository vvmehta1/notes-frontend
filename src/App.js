import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';

class App extends React.Component {
  render() {
    return (
      /*<div className="vinay">
        <h2>Vinay Mehta..!!</h2>
      </div>*/
      <Router>
        <div className="app">
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
