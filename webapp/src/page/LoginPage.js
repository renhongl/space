import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import axios from 'axios'
import {URL} from '../config/url'
import {Status} from '../config/constant'
import { message } from 'antd'
import { Route } from 'react-router-dom'


export default class LoginPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      openPortal: false
    }
  }

  onUserNameChange = (e, input) => {
    this.setState({
      userName: input.value
    })
  }

  onPasswoardChange = (e, input) => {
    this.setState({
      password: input.value
    })
  }

  onSignup = (history) => {
    history.push('/signup');
  }

  onLogin = (history) => {
    axios.get(URL.USER, {
      params: {
        userName: this.state.userName,
        password: this.state.password
      }
    }).then(result => {
      if (result.data.status === Status.SUCCESS) {
        message.success(`登陆成功，欢迎"${this.state.userName}"访问我们的空间。`);
        window.sessionStorage.setItem('userObj', JSON.stringify(result.data.result));
        this.props.Target.changeTarget(result.data.result.userName);
        this.props.Auth.login();
        setTimeout(() => {
          history.push('/');
        }, 1000);
      } else {
        message.error(`登陆失败，失败信息：${result.data.message}`);
      }
    })
  }

  render(){
    const RouteButton = () => (
      <Route render={({ history}) => (
        <Button color='teal' fluid size='large' onClick={() => this.onLogin(history)}>登录</Button>
      )} />
    )
    const RouteSignup = () => (
      <Route render={
        ({history}) => (
          <a href='#' onClick={() => this.onSignup(history)}>注册</a>
        )
      }/>
    )
    return (
    <div className='login-form'>
      {/*
        Heads up! The styles below are necessary for the correct render of this example.
        You can do same with CSS, the main idea is that all the elements up to the `Grid`
        below must have a height of 100%.
      */}
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
      <Grid
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='./assets/logo.png' />
            {' '}登录你的账号
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='E-mail address'
                onChange={this.onUserNameChange}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={this.onPasswoardChange}
              />
              <RouteButton/>
              
            </Segment>
          </Form>
          <Message>
            新用户? <RouteSignup />
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  )
  }
}
