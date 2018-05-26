

import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"
import UserSetting from './UserSetting'
import {
    Button,
    Container,
    Menu,
  } from 'semantic-ui-react'

export default class LoginStatus extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let userObj = window.sessionStorage.getItem('userObj');
        const authed = userObj ? true : false;
        userObj = JSON.parse(userObj);
        let { fixed } = this.props;
        return (
            <Container>
                <Menu.Item as='span' active={this.props.path === '/' ? true : false}><Link to="/">主页</Link></Menu.Item>
                <Menu.Item as='span' active={this.props.path === '/moment' ? true : false}><Link to="/moment">瞬间</Link></Menu.Item>
                <Menu.Item as='span' active={this.props.path === '/album' ? true : false}><Link to="/album">相册</Link></Menu.Item>
                <Menu.Item as='span' active={this.props.path === '/messageboard' ? true : false}><Link to="/messageboard">留言板</Link></Menu.Item>
                {authed ? 
                <Menu.Item position='right'>
                  <UserSetting />
                </Menu.Item> : 
                <Menu.Item position='right'>
                  <Link to="/login"><Button as='span' inverted={!fixed}>登录</Button></Link>
                  <Link to="/signup"><Button as='span' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>注册</Button></Link>
                </Menu.Item>}
              </Container>
        )
    }
}