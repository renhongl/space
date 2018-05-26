import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Heading from './Heading'
import UserSetting from './UserSetting'



import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Dimmer, 
  Loader,
  Transition,
} from 'semantic-ui-react'


export default class MobileContainer extends Component {
    state = {}
  
    handlePusherClick = () => {
      const { sidebarOpened } = this.state
  
      if (sidebarOpened) this.setState({ sidebarOpened: false })
    }
  
    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })
  
    render() {
      const { children, path, heading } = this.props
      const { sidebarOpened } = this.state
      let userObj = window.sessionStorage.getItem('userObj');
        const authed = userObj ? true : false;
        userObj = JSON.parse(userObj);
  
      return (
        <Responsive {...Responsive.onlyMobile}>
          <Sidebar.Pushable>
            <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='span' active={this.props.path === '/' ? true : false}><Link to="/">主页</Link></Menu.Item>
            <Menu.Item as='span' active={this.props.path === '/moment' ? true : false}><Link to="/moment">瞬间</Link></Menu.Item>
            <Menu.Item as='span' active={this.props.path === '/album' ? true : false}><Link to="/album">相册</Link></Menu.Item>
            <Menu.Item as='span' active={this.props.path === '/messageboard' ? true : false}><Link to="/messageboard">留言板</Link></Menu.Item>
            </Sidebar>
  
            <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
              <Segment inverted textAlign='center' style={{ minHeight: 350, padding: '1em 0em' }} vertical>
                <Container>
                  <Menu inverted pointing secondary size='large'>
                    <Menu.Item onClick={this.handleToggle}>
                      <Icon name='sidebar' />
                    </Menu.Item>
                    {authed ? 
                        <Menu.Item position='right'>
                        <UserSetting />
                        </Menu.Item> : 
                        <Menu.Item position='right'>
                            <Button as='span' inverted><Link to="/login">登录</Link></Button>
                            <Button as='span' inverted style={{ marginLeft: '0.5em' }}><Link to="/signup">注册</Link></Button>
                        </Menu.Item>}
                  </Menu>
                </Container>
                {heading}
              </Segment>
  
              {children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Responsive>
      )
    }
  }
  
  MobileContainer.propTypes = {
    children: PropTypes.node,
  }