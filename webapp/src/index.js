import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import SignupPage from './page/SignupPage';
import MomentPage from './page/MomentPage';
import AlbumPage from './page/AlbumPage';
import MessageBoardPage from './page/MessageBoardPage';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import 'antd/dist/antd.css';

const Auth = {
    authed: window.sessionStorage.getItem('userObj') ? true : false,
    login() {
        this.authed = true;
    },
    logout() {
        this.authed = false;
    }
}

const Target = {
  targetUser: '',
  changeTarget(value) {
    this.targetUser = value;
  }
}


const PrivateRoute = ({ component: Component, Target: Target, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        Auth.authed ? (
          <Component Target={Target} {...props}/>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );

  const AuthRoute = ({ component: Component, Auth: Auth,Target: Target, ...rest }) => (
    <Route
      {...rest}
      render={props =>
          <Component Auth={Auth} Target={Target}/>
      }
    />
  );


ReactDOM.render(
    <Router>
        <div>
        <PrivateRoute exact path="/" component={HomePage} Target={Target}/>
        <AuthRoute path="/login" component={LoginPage} Auth={Auth} Target={Target}/>
        <AuthRoute path="/signup" component={SignupPage}  Auth={Auth} Target={Target} />
        <PrivateRoute path="/moment" component={MomentPage} Target={Target} />
        <PrivateRoute path="/album" component={AlbumPage} Target={Target} />
        <PrivateRoute path="/messageboard" component={MessageBoardPage} Target={Target} />
        </div>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
