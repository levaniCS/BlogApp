import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthScreen from './screens/AuthScreen';
import NewPostScreen from './screens/NewPostScreen';
import ListOfUsersScreen from './screens/ListOfUsersScreen';
import MyFeedScreen from './screens/MyFeedScreen';
import Logout from './components/Logout';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    let routes = (
      <Switch>
        <Route exact path='/login' component={AuthScreen} />
        <Redirect to='/login' />
      </Switch>
    );

    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route exact path='/login' component={AuthScreen} />
          <Route exact path='/' component={NewPostScreen} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/users' component={ListOfUsersScreen} />
          <Route exact path='/feed' component={MyFeedScreen} />
          <Redirect to='/' />
        </Switch>
      );
    }
    return <div>{routes}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
