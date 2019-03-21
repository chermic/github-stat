import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Authorization from './components/AuthorizationView.jsx';
import GithubStatView from './components/GithubStatView.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Authorization />
        </div>

        <Route exact path='/' component={ Authorization } />
        <Route path='/stat' component={ GithubStatView } />
        
      </Router>
    );
  }
}

export default App;
