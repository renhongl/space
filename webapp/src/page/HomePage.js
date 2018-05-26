import React, { Component } from 'react'
import PageLayout from '../component/PageLayout'
import Footer from '../component/Footer'


class HomePage extends Component{

  render() {
    const { match } = this.props;
    return (
      <PageLayout path={match.path} heading={<div>heading component put here</div>}>
        <div>content component put here</div>
      </PageLayout>
    )
  }
}


export default HomePage