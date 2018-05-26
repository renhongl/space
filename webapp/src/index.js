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

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        Auth.authed ? (
          <Component {...props} />
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

  const AuthRoute = ({ component: Component, Auth: Auth, ...rest }) => (
    <Route
      {...rest}
      render={props =>
          <Component Auth={Auth} />
      }
    />
  );


ReactDOM.render(
    <Router>
        <div>
        <PrivateRoute exact path="/" component={HomePage} />
        <AuthRoute path="/login" component={LoginPage} Auth={Auth}/>
        <AuthRoute path="/signup" component={SignupPage}  Auth={Auth}/>
        <PrivateRoute path="/moment" component={MomentPage} />
        <PrivateRoute path="/album" component={AlbumPage} />
        <PrivateRoute path="/messageboard" component={MessageBoardPage} />
        </div>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
