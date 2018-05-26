import React, { Component } from 'react'
import { ResponsiveContainer } from '../component/ResponsiveContainer'
import Footer from '../component/Footer'

import {
  Responsive,
  Dimmer, 
  Loader,
  Transition,
} from 'semantic-ui-react'

class PageLayout extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }
  componentDidMount() {
      this.setState({
        loaded: true
      })
  }

  render() {
    const { loaded } = this.state;
    const { path, children, heading } = this.props;
    return (
      <ResponsiveContainer path={path} heading={heading}>
        <Transition visible={!loaded} animation='fade' duration={500}>
          <Dimmer active={loaded ? false : true}>
          <Loader />
        </Dimmer>
        </Transition>
        {
          children
        }
        <Footer/>
      </ResponsiveContainer>
    )
  }
}


export default PageLayout