import React, { Component } from 'react'
import PageLayout from '../component/PageLayout'


class HomePage extends Component{

  render() {
    const { match } = this.props;
    return (
      <PageLayout path={match.path}>
      </PageLayout>
    )
  }
}


export default HomePage