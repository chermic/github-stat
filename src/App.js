import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Authorization from './modules/auth/AuthorizationView';
import GithubStatView from './modules/stat/GithubStatView'
import ProfileView from './modules/profile/ProfileView';
import SearchView from './modules/search/SearchView';
import HeaderComponent from './modules/core/components/HeaderComponent';
import FooterComponent from './modules/core/components/FooterComponent';
import ErrorBoundary from './modules/core/components/ErrorBoundary';
import './App.css';

require('dotenv').config();

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Router>
            <HeaderComponent />
              <div className='container'>
                <div className='main'>
                  <Route exact path='/' component={ Authorization } />
                  <Route path='/stat' component={ GithubStatView } />
                  <Route path='/users/:login' component={ ProfileView } />
                  <Route path='/search' component={ SearchView } />
                </div>
              </div>
            </Router>
          </ErrorBoundary>
          
        <FooterComponent />
      </div>

        
    );
  }
}

export default App;
