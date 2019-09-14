import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import HeaderComponent from '../components/Header';
import Authorization from '../modules/auth';
import GithubStatView from '../modules/stat/GithubStatView';
import ProfileView from '../modules/profile/ProfileView';
import SearchView from '../modules/search/SearchView';
import { useStore } from '../store';
import Spinner from '../components/Spinner';
import history from './history';

const Routes = () => {
  const [view, setView] = React.useState(<Spinner show />);
  const { state } = useStore();
  const { isAuthorized } = state.auth;
  React.useEffect(() => {
    if (isAuthorized) {
      setView(
        <>
          <Route exact path='/' render={() => <Redirect to="/stat" />} />
          <Route path='/stat' component={ GithubStatView } />
          <Route path='/users/:login' component={ ProfileView } />
          <Route path='/search' component={ SearchView } />
        </>
      );
    } else {
      setView(
        <>
          <Route path="/login" component={ Authorization } />
          <Route render={() => <Redirect to="/login" />} />
        </>
      );
    }
  }, [isAuthorized]);
  return (
    <Router history={history}>
      <HeaderComponent isAuthorized={isAuthorized}/>
      <div className='container'>
        <div className='main'>
          {view}
        </div>
      </div>
    </Router>
  );
}

export default Routes;
