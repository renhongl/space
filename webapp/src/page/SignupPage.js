import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import axios from 'axios'
import { message } from 'antd'
import {URL} from '../constant/url'
import {Status} from '../constant/status'
import { Route } from 'react-router-dom'

export default class SignupPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    }
    this.onSignup = this.onSignup.bind(this);
  }

  onUserNameChange = (e, input) => {
    this.setState({
      userName: input.value
    })
  }

  onPasswordChange = (e, input) => {
    this.setState({
      password: input.value
    })
  }

  onLogin = (history) => {
    history.push('/login');
  }

  onSignup = (history) => {
    let data = JSON.stringify({
      userName: this.state.userName,
      userPassword: this.state.password 
    });
    axios.post(URL.SIGNUP, data, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(result => {
      if (result.data.status === Status.SUCCESS) {
        message.success(`${result.data.message}`);
        setTimeout(() => {
          history.push('/login');
        }, 1000);
      } else {
        message.error(`${result.data.message}`);
      }
    }).catch(e => {
      message.error(JSON.stringify(e));
    })
  }

  render() {
    const RouteLoginButton = () => (
      <Route render={
        ({history}) => (
          <Button color='teal' fluid size='large' onClick={() => this.onSignup(history)}>注册</Button>
        )
      } />
    )
    const RouteLogin = () => (
      <Route render={
        ({history}) => (
          <a href='#' onClick={() => this.onLogin(history)}>登录</a>
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
              {' '}注册一个新账号
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
                  onChange={this.onPasswordChange}
                />

                <RouteLoginButton/>
              </Segment>
            </Form>
            <Message>
            已有账号? <RouteLogin />
          </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}