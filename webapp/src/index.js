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
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';

ReactDOM.render(
    <Router>
        <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/moment" component={MomentPage} />
        <Route path="/album" component={AlbumPage} />
        <Route path="/messageboard" component={MessageBoardPage} />
        </div>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
