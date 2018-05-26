
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


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

export default class Heading extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let { mobile } = this.props;
        return (
            <Container text>
                <Header
                    as='h1'
                    content='主页'
                    inverted
                    style={{
                    fontSize: mobile ? '2em' : '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: mobile ? '1.5em' : '3em',
                    }}
                />
                <Header
                    as='h2'
                    content='Do whatever you want when you want to.'
                    inverted
                    style={{
                    fontSize: mobile ? '1.5em' : '1.7em',
                    fontWeight: 'normal',
                    marginTop: mobile ? '0.5em' : '1.5em',
                    }}
                />
                <Button primary size='huge'>
                    Get Started
                    <Icon name='right arrow' />
                </Button>
                </Container>
        )
    }
}
  
Heading.propTypes = {
    mobile: PropTypes.bool,
}